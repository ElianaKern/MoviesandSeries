import PresentacionTarjetas from './PresentacionTarjetas';
import { useEffect, useState } from 'react';
import { baseUrl, apiKey, moviesPopular } from './Auxiliares';

const PopularMovies = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}movie/${moviesPopular}?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);

  return (
    <PresentacionTarjetas titulo="Peliculas Populares" peliculas={peliculas} />
  );
 
};
export default PopularMovies;
