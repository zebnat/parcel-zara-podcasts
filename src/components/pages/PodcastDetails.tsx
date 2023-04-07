import React from "react";
import { Layout } from "../Layout";
import { Outlet, useParams } from "react-router-dom";
import { PodcastPresentation } from "../PodcastPresentation";
import { PodcastEpisodes } from "../PodcastEpisodes";
import { PodcastEpisode } from "../../domain/PodcastEpisode";
import { PodcastEpisode as PodcastEpisodeComponent } from "../PodcastEpisode";
import { Podcast } from "../../domain/Podcast";

interface PodcastDetailsRouteParams {
  podcastId: string;
  episodeId?: string;
}

// todo: this should come from api
const dumbEpisodes: PodcastEpisode[] = [
  {
    id: "wadwdwa",
    date: new Date(),
    description: `<p>Today we have the second part of Rick Rubin’s conversation with legendary singer/songwriter Graham Nash. We dropped part one a couple of weeks ago, so definitely go check that out if you haven’t already.</p> <p>On today’s episode Graham tells Rick about the time the Grateful Dead were recording next to CSNY and how Jerry Garcia improvised a near-perfect pedal steel solo on “Teach Your Children.” Graham also describes a bizarre encounter with the judge who sentenced his father to prison, and he shares the inspiration behind his new solo album, <em data-stringify-type="italic">Now</em>.</p> <p>You can hear a playlist of some of our favorite Graham Nash songs <a href="https://open.spotify.com/playlist/4pSu0U2LZECtNt7njfUeSa?si=540bb0b9a0d74391&amp;nd=1">HERE</a>.</p><p>See <a href="https://omnystudio.com/listener">omnystudio.com/listener</a> for privacy information.</p>`,
    duration: "15:14",
    episodeUrl:
      "https://chtbl.com/track/39E17/podtrac.com/pts/redirect.mp3/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/ff0ba2f2-f33c-4193-aba2-ae32006cd633/1b0742b4-b0e6-4c26-b3f4-afd90120b46d/audio.mp3?utm_source=Podcast&in_playlist=11c188a1-cb86-4869-9c57-ae32006cd63c",
    name: "Some episode",
  },
  {
    id: "wadwdwa",
    date: new Date(),
    description: "This is a nice episode",
    duration: "15:41",
    episodeUrl: "",
    name: "Some episode",
  },
  {
    id: "wadwdwa42",
    date: new Date(),
    description: "This is a nice episode 2",
    duration: "20:00",
    episodeUrl: "",
    name: "Some episode 2",
  },
  {
    id: "wadwdwa623",
    date: new Date(),
    description: "This is a nice episode 3",
    duration: "10:00",
    episodeUrl: "",
    name: "Some episode 3",
  },
];

export function PodcastDetails() {
  const { podcastId, episodeId } = useParams();

  // todo: load episode data

  // get current episodeData
  const currentEpisodeData = dumbEpisodes.filter(
    (ep) => ep.id === episodeId
  )[0];

  return (
    <Layout>
      <div className="flex flex-wrap md:flex-nowrap	gap-20">
        <PodcastPresentation
          id={podcastId as string}
          name="Bblablabla"
          author="Author name"
          description="This is the description"
          thumbnailUrl="https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png"
        />
        <div className="w-2/3 grow">
          {episodeId ? (
            <PodcastEpisodeComponent
              name={currentEpisodeData.name}
              playerUrl={currentEpisodeData.episodeUrl}
              descriptionHTML={currentEpisodeData.description}
            />
          ) : (
            <PodcastEpisodes
              podcastId={podcastId as string}
              items={dumbEpisodes}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}
