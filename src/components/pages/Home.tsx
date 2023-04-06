import React from "react";
import { PodcastCardCollection } from "../PodcastCardCollection";
import { Layout } from "../Layout";

export function Home() {
  return (
    <Layout>
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
    </Layout>
  );
}
