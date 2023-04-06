import React from "react";
import { Layout } from "../Layout";
import { Outlet, useParams } from "react-router-dom";
import { PodcastPresentation } from "../PodcastPresentation";
import { PodcastEpisodes } from "../PodcastEpisodes";

interface PodcastDetailsRouteParams {
  podcastId: string;
  episodeId?: string;
}
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
        {!episodeId && <PodcastEpisodes />}
        <Outlet />
      </div>
    </Layout>
  );
}
