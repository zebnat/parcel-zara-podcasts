interface ItunesPodcastCollectionEntry {
  id: { attributes: { "im:id": number } };
  "im:name": { label: string };
  "im:image": { label: string };
  "im:artist": { label: string };
  summary: { label: string };
}

export interface ItunesPodcastCollectionResponse {
  entry: ItunesPodcastCollectionEntry[];
}
