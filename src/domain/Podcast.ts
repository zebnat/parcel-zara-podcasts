import { PodcastEpisode } from "./PodcastEpisode";

export interface Podcast {
  id: string;
  thumbnailUrl: string;
  name: string;
  description?: string;
  author: string;
  episodes?: PodcastEpisode[];
}
