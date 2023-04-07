import { ItunesPodcastCollectionResponse } from "../domain/ItunesPodcastCollectionResponse";
import { ItunesPodcastCollectionResponseContents } from "../domain/ItunesPodcastCollectionResponseContents";
import { ItunesPodcastDetailResponse } from "../domain/ItunesPodcastDetailResponse";
import { ItunesRepository } from "../domain/ItunesRepository";
import { Podcast } from "../domain/Podcast";
import { PodcastEpisode } from "../domain/PodcastEpisode";
import { fetchWithRetry } from "./fetchUtils";

export class ItunesRepositoryImpl implements ItunesRepository {
  constructor(private api: ItunesApi) {}
  async getAll(): Promise<Podcast[]> {
    const entries = await this.api.fetchTopPodcasts();
    const podcasts: Podcast[] = entries.map((e) => {
      return {
        id: e.id.attributes["im:id"],
        name: e["im:name"].label,
        thumbnailUrl: e["im:image"][2].label,
        author: e["im:artist"].label,
      };
    });

    return podcasts;
  }

  async getById(id: string): Promise<Podcast> {
    const podcast = await this.api.fetchPodcastdata(id);
    return podcast;
  }
}

export class ItunesApi {
  async fetchTopPodcasts() {
    const response = await fetchWithRetry(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
      )}`
    );

    if (!response.ok) throw new Error("fetchPodcastdata result not ok.");

    const data: ItunesPodcastCollectionResponse = await response.json();
    const contents: ItunesPodcastCollectionResponseContents = JSON.parse(
      data.contents
    );

    return contents.feed.entry;
  }

  async fetchPodcastdata(id: string): Promise<Podcast> {
    // original lookup
    const response = await fetchWithRetry(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${id}`
      )}`
    );

    if (!response.ok) throw new Error("fetchPodcastdata first call not ok.");

    const data: ItunesPodcastDetailResponse = await response.json();
    const contents: ItunesPodcastDetailResponseContents = JSON.parse(
      data.contents
    );

    // try with feed xml
    const feedResponse = await fetchWithRetry(contents.results[0].feedUrl);

    if (!feedResponse.ok)
      throw new Error("fetchPodcastdata feedResponse not ok.");

    const parser = new DOMParser();
    const xmlString = await feedResponse.text(); // get stream
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    // parse data from feed
    let podcast: Podcast = {
      id: id,
      name: "NODATA",
      author: "NODATA",
      description: "NODATA",
      thumbnailUrl: "",
      episodes: undefined,
    };

    try {
      let podcastFromXML = this._parsePodcastFromXML(id, xmlDoc);
      podcast.name = podcastFromXML.name || "";
      podcast.description = podcastFromXML.description || "";
      podcast.author = podcastFromXML.author || "";
      podcast.thumbnailUrl = podcastFromXML.thumbnailUrl || "";
    } catch (e) {
      console.error("Issue parsing XML feed (wrong format): Expect NODATA");
      console.error(e);
    }

    // parse episodes from api
    const episodesResponse = await fetchWithRetry(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=5`
      )}`
    );

    if (!episodesResponse.ok) throw new Error("episodesResponse not ok.");
    const episodeData: ItunesPodcastDetailResponse =
      await episodesResponse.json();
    const episodeContents: ItunesPodcastEpisodeResponse = JSON.parse(
      episodeData.contents
    );

    episodeContents.results.shift(); // drop first result (invalid api)

    console.log(episodeContents.results);

    const episodes: PodcastEpisode[] = episodeContents.results.map((e) => {
      return {
        id: e.trackId.toString(),
        name: e.trackName,
        description: e.description,
        episodeUrl: e.previewUrl,
        date: e.releaseDate,
        duration: e.trackTimeMillis.toString(),
      };
    });

    podcast.episodes = episodes;
    return podcast;
  }

  private _parsePodcastFromXML(id: string, xml: Document) {
    const parser = new DOMParser();

    // find stuff by dom trasverse
    const podcastTitle = xml.getElementsByTagName("title")[0]
      .textContent as string;
    const podcastDescription = xml.getElementsByTagName("description")[0]
      .textContent as string;
    const podcastAuthor = xml.getElementsByTagName("itunes:author")[0]
      .textContent as string;
    const podcastImage = xml.querySelectorAll("image>url")[0]
      .textContent as string;

    const podcast: Podcast = {
      id: id,
      name: podcastTitle,
      description: podcastDescription,
      author: podcastAuthor,
      thumbnailUrl: podcastImage,
      episodes: undefined,
    };

    return podcast;
  }
}
