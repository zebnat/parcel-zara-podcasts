import { useState } from "react";
import { Podcast } from "../../domain/Podcast";

/**
 * Allows you to filter a podcast collection by name
 * Works by passing onFilterChange to an input onChange prop
 * You get also the filtered result set
 */
export function usePodcastCollectionFilter(items: Podcast[]): {
  filtered: Podcast[];
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} {
  const [filter, setFilter] = useState<string>("");

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFilter(e.target.value.trim());
  };

  const filtered = items.filter((podcast) => {
    const filterReg = new RegExp(filter, "i");
    return podcast.name.match(filterReg);
  });

  return { filtered, onFilterChange };
}
