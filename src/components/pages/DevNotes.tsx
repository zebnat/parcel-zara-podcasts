import React from "react";
import { useLoadingContext } from "../../application/hooks/useLoadingContext";

export function DevNotes() {
  const { setLoading } = useLoadingContext();
  setLoading(false);
  return (
    <div className="w-full md:w-2/3 m-auto">
      <p className="text-2xl underline text-red-500 my-4">
        Información para quien corresponda:
      </p>
      <div className="text-sm flex flex-col gap-4">
        <p>
          El desarrollo en general de la mini aplicación y los requisitos se ha
          podido realizar correctamente sin demasiados inconvenientes, salvo un
          problema con los datos de API.
        </p>
        <p>
          Me encontré con algún problema con el Api de Itunes y el servicio
          crossOrigin.
        </p>
        <p>
          El servicio CrossOrigin está muy saturado, lo que hace que las
          peticiones vayan demasiado lentas.
        </p>
        <p>Por cada petición fallida, reintentará varias veces, hasta 5.</p>
        <p>
          La Api de detalles del Podcast proporcionada no devuelvía la
          descripción y probé diferentes opciones desde la documentación
          oficial. Debido a eso, decidí también de pedir el Feed RSS+XML (que si
          lo devuelve) y se recorre el dom del XML para encontrarla, pero no es
          una api consistente y podría faltar la información. En ese caso decidí
          mostrar NODATA.
        </p>
        <p>
          La petición al rss+xml se realiza SIN CrossOrigin (debido a la
          lentitud y tamaño considerable del documento). A veces, puede dar
          error cors y no estar disponible la información.
        </p>
        <p>
          Los episodios se piden desde una petición adicional a ese endpoint de
          API, únicamente no he visto que venga html en la descripción que
          devuelve esa api (aunque en los rss+xml sí tienen)
        </p>
        <p>Más allá de esto lo demás fue bastante bien.</p>
      </div>
    </div>
  );
}
