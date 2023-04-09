import React from "react";
import { PodcastCardCollection } from "../PodcastCardCollection";
import { useTopPodcasts } from "../../application/hooks/useTopPodcasts";

export function Home() {
  const podcasts = useTopPodcasts();

  return <PodcastCardCollection items={podcasts} />;
}
