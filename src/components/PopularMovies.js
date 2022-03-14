import '../styles/components-styles/_PopularMovies.scss';
import PresentacionTarjetas from './PresentacionTarjetas';
import { useEffect, useState } from 'react';
import { baseUrl } from './Auxiliares';
import { apiKey } from './Auxiliares';


const PopularMovies = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}movie/popular?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);
  console.log(peliculas);
  return (
    <PresentacionTarjetas title="Peliculas Populares" movies={peliculas} />
  );
 
};
export default PopularMovies;
