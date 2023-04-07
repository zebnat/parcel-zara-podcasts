interface ItunesPodcastCollectionEntry {
  id: { attributes: { "im:id": string } };
  "im:name": { label: string };
  "im:image": { label: string }[];
  "im:artist": { label: string };
  summary: { label: string };
}

export interface ItunesPodcastCollectionResponseContents {
  feed: {
    entry: ItunesPodcastCollectionEntry[];
  };
}
