import React from "react";
import { Layout } from "../Layout";
import { Outlet, useParams } from "react-router-dom";
import { PodcastPresentation } from "../PodcastPresentation";
import { PodcastEpisodes } from "../PodcastEpisodes";
import { PodcastEpisode } from "../../domain/PodcastEpisode";

interface PodcastDetailsRouteParams {
  podcastId: string;
  episodeId?: string;
}

// todo: this should come from api
const dumbEpisodes: PodcastEpisode[] = [
  {
    id: "wadwdwa",
    date: new Date(),
    description: "This is a nice episode",
    duration: "15:14",
    episodeUrl: "",
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

  return (
    <Layout>
      <div className="flex flex-wrap gap-4">
        <PodcastPresentation
          id={podcastId as string}
          name="Bblablabla"
          author="Author name"
          description="This is the description"
          thumbnailUrl="https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png"
        />
        {!episodeId && (
          <PodcastEpisodes
            podcastId={podcastId as string}
            items={dumbEpisodes}
          />
        )}
        <Outlet />
      </div>
    </Layout>
  );
}
