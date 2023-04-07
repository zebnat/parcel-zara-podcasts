import React from "react";
import { PodcastCardCollection } from "../PodcastCardCollection";
import { Layout } from "../Layout";
import { useTopPodcasts } from "../../application/hooks/useTopPodcasts";

export function Home() {
  const podcasts = useTopPodcasts();

  return (
    <Layout>
      <PodcastCardCollection items={podcasts} />
    </Layout>
  );
}
