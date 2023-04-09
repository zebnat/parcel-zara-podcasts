import React from "react";
import { useLoadingContext } from "../application/hooks/useLoadingContext";

interface PodcastEpisodeProps {
  name: string;
  descriptionHTML: string;
  playerUrl: string;
}

export function PodcastEpisode(props: PodcastEpisodeProps) {
  const { name, descriptionHTML, playerUrl } = props;

  const { setLoading } = useLoadingContext();
  setLoading(false);

  return (
    <div className="box-shadow shadow-[0px_3px_6px_2px_rgba(0,0,0,0.2)] flex flex-col gap-3 p-4">
      <div className="font-bold text-xl">{name}</div>
      <div
        className="customHTML italic"
        dangerouslySetInnerHTML={{ __html: descriptionHTML }}
      ></div>
      <audio controls className="w-full">
        <source src="horse.ogg" type="audio/ogg" />
        <source src={playerUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
