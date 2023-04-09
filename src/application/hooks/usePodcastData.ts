import { useEffect, useState } from "react";
import { Podcast } from "../../domain/Podcast";
import { ItunesRepository } from "../../domain/ItunesRepository";
import { ItunesApiStorageAdapter } from "../../services/ItunesApiStorageAdapter";
import { ItunesApi, ItunesRepositoryImpl } from "../../services/Itunesapi";
import { useLoadingContext } from "./useLoadingContext";

export function usePodcastData(id: string): Podcast | null {
  const { setLoading } = useLoadingContext();
  const [podcast, setPodcast] = useState<Podcast | null>(null);
  const repo: ItunesRepository = new ItunesApiStorageAdapter(
    new ItunesRepositoryImpl(new ItunesApi())
  );

  useEffect(() => {
    (async function () {
      try {
        const podcast = await repo.getById(id);
        setPodcast(podcast);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return podcast;
}
