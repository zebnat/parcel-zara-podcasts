import React from "react";
import { Link } from "react-router-dom";
import { PodcastEpisode } from "../domain/PodcastEpisode";

interface PodcastEpisodesProps {
  podcastId: string;
  items: PodcastEpisode[];
}

export function PodcastEpisodes(props: PodcastEpisodesProps) {
  const { podcastId, items } = props;

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const trClassNames = `border border-y-0`;
  return (
    <div className="grow">
      <div className="p-2 mb-4 box-shadow shadow-[0px_3px_6px_2px_rgba(0,0,0,0.2)] font-bold ">
        Episodes: {items.length}
      </div>
      <div className="p-2 mb-4 box-shadow shadow-[0px_3px_6px_2px_rgba(0,0,0,0.2)] flex">
        <table className="table-auto grow">
          <thead>
            <tr className="font-bold text-left">
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody className="border">
            {items.map((ep: PodcastEpisode, index: number) => (
              <tr
                key={ep.id}
                className={
                  trClassNames +
                  `${index % 2 == 0 ? " bg-blue-100 saturate-75" : ""}`
                }
              >
                <td className="p-2">
                  <Link
                    to={`/podcast/${podcastId}/episode/${ep.id}`}
                    className="text-blue-700"
                  >
                    {ep.name}
                  </Link>
                </td>
                <td>{formatDate(ep.date)}</td>
                <td>{ep.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
