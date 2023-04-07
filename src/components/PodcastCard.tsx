import React from "react";
import { Link } from "react-router-dom";

export interface PodcastCardProps {
  id: string;
  thumbnail: string;
  title: string;
  author: string;
}

function PodcastCard(props: PodcastCardProps) {
  const { id, thumbnail, title, author } = props;
  const podcastUrl = `/podcast/${id}`;

  return (
    <Link to={podcastUrl}>
      <figure
        className="p-3 bg-white border border-gray-400 box-shadow min-h-[100px]
                    shadow-[-1px_3px_3px_0px_rgba(0,0,0,0.3)] mb-20"
      >
        <div className="flex flex-col justify-center items-center pt-20 relative">
          <img
            className="rounded-full absolute -top-[80px]"
            alt={title}
            src={thumbnail}
            width="160"
            height="160"
          />
          <figcaption
            role="caption"
            className="uppercase font-bold text-md text-center"
          >
            {title}
          </figcaption>
          <p className="text-gray-600">Author: {author}</p>
        </div>
      </figure>
    </Link>
  );
}

export { PodcastCard };
