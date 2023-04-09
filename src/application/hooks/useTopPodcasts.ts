import { useEffect, useState } from "react";
import { Podcast } from "../../domain/Podcast";
import { ItunesApi, ItunesRepositoryImpl } from "../../services/Itunesapi";
import { ItunesApiStorageAdapter } from "../../services/ItunesApiStorageAdapter";
import { ItunesRepository } from "../../domain/ItunesRepository";
import { useLoadingContext } from "./useLoadingContext";

export function useTopPodcasts(): Podcast[] {
  const { setLoading } = useLoadingContext();
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  const repo: ItunesRepository = new ItunesApiStorageAdapter(
    new ItunesRepositoryImpl(new ItunesApi())
  );

  useEffect(() => {
    (async function () {
      try {
        const podcasts = await repo.getAll();
        setPodcasts(podcasts);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return podcasts;
}
