import PresentacionTarjetas from './PresentacionTarjetas';
import { popular } from './Auxiliares';
import UseFetch from '../hooks/UseFetch';
import { useContext } from 'react';
import Contexto from '../contexto/Contexto';

const PopularMovies = () => {
  const valorTipo = useContext(Contexto).tipo;
  const { results: peliculas = [] } = UseFetch(valorTipo, popular);
  return (
    <PresentacionTarjetas titulo="Populares" peliculas={peliculas} />
  );
};
export default PopularMovies;
