import { Podcast } from "./Podcast";

export interface ItunesRepository {
  getAll(): Promise<Podcast[]>;
  getById(id: string): Promise<Podcast>;
}
