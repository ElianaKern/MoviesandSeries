import PresentacionTarjetas from './PresentacionTarjetas';
import { tipoMovie, moviesPopular } from './Auxiliares';
import UseFetch from "../hooks/UseFetch";

const PopularMovies = () => {
  const peliculas = UseFetch(`${tipoMovie},${moviesPopular}`)
  return (
    <PresentacionTarjetas titulo="Peliculas Populares" peliculas={peliculas} />
  );
 
};
export default PopularMovies;
