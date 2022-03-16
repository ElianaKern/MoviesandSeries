import PresentacionTarjetas from './PresentacionTarjetas';
import { useEffect, useState } from 'react';
import { baseUrl, apiKey, moviesLanzamiento } from './Auxiliares';

const NewMovies = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}movie/${moviesLanzamiento}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);
 
  return (
    <PresentacionTarjetas titulo="Ultimos Lanzamientos" peliculas={peliculas} />
  );
};
export default NewMovies;
