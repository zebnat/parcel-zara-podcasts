import { ItunesPodcastCollectionResponse } from "../domain/ItunesPodcastCollectionResponse";
import { ItunesPodcastCollectionResponseContents } from "../domain/ItunesPodcastCollectionResponseContents";
import { ItunesRepository } from "../domain/ItunesRepository";
import { Podcast } from "../domain/Podcast";
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
    throw new Error("Method not implemented.");
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

  fetchPodcastdata(id: string) {
    //`https://itunes.apple.com/lookup?id=${id}`
    throw Error("not implemented");
  }
}
