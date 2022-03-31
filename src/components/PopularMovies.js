import PresentacionTarjetas from './PresentacionTarjetas';
import { popular } from './Auxiliares';
import UseFetch from '../hooks/UseFetch';
import UsePaginado from '../hooks/UsePaginado';
import { useContext } from 'react';
import Contexto from '../contexto/Contexto';
import Paginado from './Paginado';

const PopularMovies = () => {
  const { page, handleClickNext, handleClickPrev, handleClickFirstPage, handleClickLastPage } = UsePaginado()
  const valorTipo = useContext(Contexto).tipo;
  const { results: peliculas = [] } = UseFetch(valorTipo, popular, page);
  const totalPages= UseFetch(valorTipo, popular, page).total_pages

  return (
    <>
    <PresentacionTarjetas titulo="Populares" peliculas={peliculas} />
    <Paginado
        handleClickPrev={handleClickPrev}
        handleClickNext={handleClickNext}
        handleClickFirstPage={handleClickFirstPage}
        handleClickLastPage={handleClickLastPage}
        page={page}
        totalPages={totalPages}
     />
     </>
  );
};
export default PopularMovies;
