import React from "react";
import { Layout } from "../Layout";
import { useParams } from "react-router-dom";
import { PodcastPresentation } from "../PodcastPresentation";
import { PodcastEpisodes } from "../PodcastEpisodes";
import { PodcastEpisode as PodcastEpisodeComponent } from "../PodcastEpisode";
import { usePodcastData } from "../../application/hooks/usePodcastData";

export function PodcastDetails() {
  const { podcastId, episodeId } = useParams();

  const podcastData = usePodcastData(podcastId as string);

  return (
    <Layout>
      {null === podcastData ? (
        <div className="w-1/2 m-auto text-gray-500 text-center flex flex-col gap-10">
          <p className="font-bold text-xl mt-20">
            Loading Podcast details...{" "}
            <span className="text-xs">
              (Podcast details, Episodes api and RSS Xml Feed)
            </span>
          </p>
          <p className="text-2xl underline text-red-500">
            Información para quien corresponda:
          </p>
          <div className="text-sm flex flex-col gap-4">
            <p>
              El servicio CrossOrigin está muy pero muy saturado, lo que hace
              que las peticiones vayan demasiado lentas.
            </p>
            <p>Por cada petición fallida, reintentará varias veces.</p>
            <p>
              La Api de detalles del Podcast no contenía toda la información
              necesaria. Debido a eso se pide también el Feed RSS+XML y se
              realiza dom traversing, pero no es consistente.
            </p>
            <p>
              La petición al rss+xml se realiza SIN CrossOrigin (debido a la
              lentitud y tamaño considerable). A veces, puede dar error cors y
              no estar disponible la información. Probar con otros Podcast desde
              la colección.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap md:flex-nowrap	gap-20">
          <PodcastPresentation
            id={podcastData.id}
            name={podcastData.name}
            author={podcastData.author}
            description={podcastData.description as string}
            thumbnailUrl={podcastData.thumbnailUrl as string}
          />
          <div className="w-2/3 grow">
            {episodeId && podcastData.episodes !== undefined ? (
              <PodcastEpisodeComponent
                name={
                  podcastData.episodes.filter((ep) => ep.id === episodeId)[0]
                    .name
                }
                playerUrl={
                  podcastData.episodes.filter((ep) => ep.id === episodeId)[0]
                    .episodeUrl
                }
                descriptionHTML={
                  podcastData.episodes.filter((ep) => ep.id === episodeId)[0]
                    .description
                }
              />
            ) : (
              <PodcastEpisodes
                podcastId={podcastId as string}
                items={podcastData.episodes}
              />
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}
