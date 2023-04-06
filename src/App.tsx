import React from "react";

import { StatusIndicator } from "./components/StatusIndicator";
import { PodcastCard } from "./components/PodcastCard";
import { PodcastCardCollection } from "./components/PodcastCardCollection";

function App() {
  return (
    <div className="bg-gray-100 text-black px-10 py-5 min-h-screen">
      <div className="w-full xl:w-3/4 m-auto flex flex-col">
        <header className="flex justify-between">
          <a className="text-blue-500 text-2xl font-bold" href="/">
            Podcaster
          </a>
          <StatusIndicator loading={true} />
        </header>
        <main className="my-10 grow">
          <PodcastCardCollection
            items={[
              {
                id: "423234324",
                name: "SONG EXPLODER",
                thumbnailUrl:
                  "https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png",
                author: "Jordi",
              },
              {
                id: "423234324",
                name: "MUSIC ON FIRE PODCAST",
                thumbnailUrl:
                  "https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png",
                author: "Jordi",
              },
              {
                id: "423234324",
                name: "song of the day",
                thumbnailUrl:
                  "https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png",
                author: "Jordi",
              },
              {
                id: "423234324",
                name: "all songs considered",
                thumbnailUrl:
                  "https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/170x170bb.png",
                author: "Jordi",
              },
            ]}
          />
        </main>
        <footer>By Daniel DR</footer>
      </div>
    </div>
  );
}

export { App };
