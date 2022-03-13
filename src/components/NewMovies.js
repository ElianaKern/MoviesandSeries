import '../styles/components-styles/_NewMovies.scss';
import PresentacionTarjetas from './PresentacionTarjetas';
import { useEffect, useState } from 'react';
import { baseUrl } from './Auxiliares';
import { apiKey } from './Auxiliares';

const NewMovies = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}movie/now_playing?api_key=${apiKey}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);
  console.log(peliculas);
  return (
    <PresentacionTarjetas title="Ultimos Lanzamientos" movies={peliculas} />
  );
};
export default NewMovies;
