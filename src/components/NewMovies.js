import PresentacionTarjetas from './PresentacionTarjetas';
import { tipoMovie, moviesLanzamiento, tvLanzamiento } from './Auxiliares';
import UseFetch from '../hooks/UseFetch';
import { useContext } from 'react';
import Contexto from "../contexto/Contexto";


const NewMovies = () => {
  const valorTipo = useContext(Contexto).tipo
  const categoria = () => {
    if(valorTipo === "movie") {
      return moviesLanzamiento
    }
      else {
        return tvLanzamiento
      }
  }
  const { results: peliculas = [] } = UseFetch(valorTipo, categoria());
  

  return (
    <PresentacionTarjetas titulo="Ultimos Lanzamientos" peliculas={peliculas} />
  );
};
export default NewMovies;
