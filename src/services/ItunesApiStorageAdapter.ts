import { ItunesRepository } from "../domain/ItunesRepository";
import { Podcast } from "../domain/Podcast";
import localforage from "localforage";

interface StoredItem {
  value: unknown;
  expiry: number;
}

export class ItunesApiStorageAdapter implements ItunesRepository {
  constructor(private repository: ItunesRepository) {}
  async getAll(): Promise<Podcast[]> {
    const getAllkey = "v3_repo_getAll";
    const value: unknown | null = await this._getItem(getAllkey);

    if (null !== value) {
      return value as Podcast[];
    }

    const podcasts = await this.repository.getAll();
    await this._setItem(getAllkey, podcasts, 1000 * 60 * 60 * 24); // 1 day cache

    return podcasts;
  }
  async getById(id: string): Promise<Podcast> {
    throw new Error("Method not implemented.");
  }

  private async _getItem(key: string): Promise<unknown> {
    const value: unknown | null = await localforage.getItem(key);
    if (null === value) return null;

    const storedItem = value as StoredItem;
    const expiration = storedItem.expiry;
    const now = new Date().getTime();

    if (now > expiration) {
      await localforage.removeItem(key);
      return null;
    }

    return storedItem.value;
  }

  private async _setItem(
    key: string,
    item: unknown,
    ttl: number = 1000 * 60 * 60
  ): Promise<void> {
    const now = new Date().getTime();
    const toStorage: StoredItem = {
      value: item,
      expiry: now + ttl,
    };
    await localforage.setItem(key, toStorage);
  }
}
