interface ItunesPodcastEpisodeResponse {
  resultCount: number;
  results: {
    trackName: string;
    description: string;
    releaseDate: string;
    previewUrl: string;
    trackTimeMillis: number;
    trackId: number;
  }[];
}
