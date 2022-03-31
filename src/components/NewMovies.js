import PresentacionTarjetas from './PresentacionTarjetas';
import { moviesLanzamiento, tvLanzamiento } from './Auxiliares';
import UseFetch from '../hooks/UseFetch';
import UsePaginado from '../hooks/UsePaginado';
import { useContext } from 'react';
import Contexto from "../contexto/Contexto";
import Paginado from './Paginado';



const NewMovies = () => {
  const { page, handleClickNext, handleClickPrev, handleClickFirstPage, handleClickLastPage } = UsePaginado()
  
  const valorTipo = useContext(Contexto).tipo
  const categoria = () => {
    if(valorTipo === "movie") {
      return moviesLanzamiento
    }
      else {
        return tvLanzamiento
      }
  }

  const { results: peliculas = [] } = UseFetch(valorTipo, categoria(),page);
  const totalPages= UseFetch(valorTipo, categoria(),page).total_pages
  return (
    <>
    <PresentacionTarjetas titulo="Ultimos Lanzamientos" peliculas={peliculas} />
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
export default NewMovies;
