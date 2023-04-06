import React from "react";
import { Podcast } from "../domain/Podcast";
import { PodcastCard } from "./PodcastCard";

export interface PodcastCardCollectionProps {
  items: Podcast[];
}

export function PodcastCardCollection(props: PodcastCardCollectionProps) {
  const { items } = props;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {items.map((podcast) => (
        <PodcastCard
          id={podcast.id}
          thumbnail={podcast.thumbnailUrl}
          title={podcast.name}
          author={podcast.author}
        />
      ))}
    </div>
  );
}
