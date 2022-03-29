import PresentacionTarjetas from './PresentacionTarjetas';
import { tipoMovie, moviesLanzamiento, tvLanzamiento } from './Auxiliares';
import UseFetch from '../hooks/UseFetch';
import { useContext } from 'react';
import Contexto from "../contexto/Contexto";


const NewMovies = () => {
  const valorCategoria = useContext(Contexto).tipo

  const categoria = () => {
    if(valorCategoria === "movie") {
      return moviesLanzamiento
    }
      else {
        return tvLanzamiento
      }
  }
  const { results: peliculas = [] } = UseFetch(tipoMovie, categoria());
  

  return (
    <PresentacionTarjetas titulo="Ultimos Lanzamientos" peliculas={peliculas} />
  );
};
export default NewMovies;
