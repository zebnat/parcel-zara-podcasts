import React from "react";
import { Podcast } from "../domain/Podcast";
import { PodcastCard } from "./PodcastCard";
import { FilterBox } from "./FilterBox";
import { usePodcastCollectionFilter } from "../application/hooks/usePodcastCollectionFilter";

export interface PodcastCardCollectionProps {
  items: Podcast[];
}

export function PodcastCardCollection(props: PodcastCardCollectionProps) {
  const { filtered, onFilterChange } = usePodcastCollectionFilter(props.items);

  return (
    <>
      <FilterBox
        onFilterChange={onFilterChange}
        total={filtered.length}
        placeholder="Filter podcasts..."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-20">
        {filtered.map((podcast) => (
          <PodcastCard
            id={podcast.id}
            thumbnail={podcast.thumbnailUrl}
            title={podcast.name}
            author={podcast.author}
          />
        ))}
      </div>
    </>
  );
}
