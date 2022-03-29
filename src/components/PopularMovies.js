import PresentacionTarjetas from './PresentacionTarjetas';
import { tipoMovie, moviesPopular } from './Auxiliares';
import UseFetch from '../hooks/UseFetch';

const PopularMovies = () => {
  const { results: peliculas = [] } = UseFetch(tipoMovie, moviesPopular);
  return (
    <PresentacionTarjetas titulo="Populares" peliculas={peliculas} />
  );
};
export default PopularMovies;
