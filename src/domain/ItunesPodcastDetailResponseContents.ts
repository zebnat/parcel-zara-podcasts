interface ItunesPodcastDetailResponseContents {
  resultCount: number;
  results: {
    collectionName: string;
    artistName: string;
    feedUrl: string;
    releaseDate: string;
  }[];
}
