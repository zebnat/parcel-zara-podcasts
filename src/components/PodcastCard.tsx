import React from "react";

export interface PodcastCardProps {
  id: string;
  thumbnail: string;
  title: string;
  author: string;
}

function PodcastCard(props: PodcastCardProps) {
  const { id, thumbnail, title, author } = props;
  const podcastUrl = `/episode/${id}`;

  return (
    <a href={podcastUrl}>
      <figure
        className="p-3 bg-white border border-gray-400 box-shadow 
                    flex flex-col justify-center items-center shadow"
      >
        <img
          className="rounded-full"
          alt={title}
          src={thumbnail}
          width="170"
          height="170"
        />
        <figcaption role="caption" className="uppercase font-bold text-md">
          {title}
        </figcaption>
        <p className="text-gray-600">Author: {author}</p>
      </figure>
    </a>
  );
}

export { PodcastCard };
