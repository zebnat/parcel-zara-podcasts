import React from "react";
import { Link } from "react-router-dom";

interface PodcastPresentationProps {
  id: string;
  name: string;
  author: string;
  description: string;
  thumbnailUrl: string;
}

export function PodcastPresentation(props: PodcastPresentationProps) {
  const { name, author, thumbnailUrl, description, id } = props;

  return (
    <Link
      to={`/podcast/${id}`}
      className="rounded-sm box-shadow shadow-[0px_3px_6px_2px_rgba(0,0,0,0.2)]
    w-full sm:w-1/3 p-4 flex flex-col gap-6 justify-center"
    >
      <img
        className="rounded-md m-auto"
        alt={name}
        src={thumbnailUrl}
        width="170"
        height="170"
      />
      <div className="flex flex-col gap-1 py-4 border-y-2">
        <span className="capitalize font-bold text-xl text-left">{name}</span>
        <span className="capitalize italic text-gray-500 text-lg text-left">
          By {author}
        </span>
      </div>

      <div className="flex flex-col">
        <span className="font-bold">Description:</span>
        <p className="italic">{description}</p>
      </div>
    </Link>
  );
}
