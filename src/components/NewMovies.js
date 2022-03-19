import PresentacionTarjetas from './PresentacionTarjetas';
import { tipoMovie, moviesLanzamiento } from './Auxiliares';
import UseFetch from "../hooks/UseFetch";

const NewMovies = () => {
  const peliculas = UseFetch(`${tipoMovie},${moviesLanzamiento}`)
  return (
    <PresentacionTarjetas titulo="Ultimos Lanzamientos" peliculas={peliculas} />
  );
};
export default NewMovies;
