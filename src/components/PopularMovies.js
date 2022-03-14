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
  console.log(peliculas);
  return (
    <PresentacionTarjetas title="Peliculas Populares" movies={peliculas} />
  );
 
};
export default PopularMovies;
