import '../styles/components-styles/_Search.scss';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  baseUrl,
  search,
  query,
  apiKey,
  lenguaje,
  paginacion,
} from './Auxiliares';
import PresentacionTarjetas from './PresentacionTarjetas';
import { FaSearch } from 'react-icons/fa';
import { useContext } from 'react';
import Contexto from '../contexto/Contexto';

const Search = () => {
  const valorTipo = useContext(Contexto).tipo;
  const [valorDelInput, setValorDelInput] = useState('');
  const [resultados, setResultados] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "la niñera",
  });

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: valorDelInput });
  };

  useEffect(() => {
    if (searchParams.get('query')) {
      fetch(
        `${baseUrl}/${search}/${valorTipo}?${query}=${searchParams.get(
          'query'
        )}&${apiKey}&${lenguaje}=es-AR&${paginacion}=1`
      )
        .then((res) => res.json())
        .then((data) => setResultados(data.results));
    }
  }, [searchParams,valorTipo]);
///${baseUrl}/search/multi?api_key=<<api_key>>&language=en-US&page=1
  return (
    <section className="seccion-busqueda">
      <div className="busqueda">
        <h2>Busca Series o Peliculas por nombre</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-busqueda">
            <input
              type="text"
              onChange={handleChange}
              value={valorDelInput}
              aria-label="introducir nombre"
            />
            <button type="submit" aria-label="buscar">
              <FaSearch className="lupa"/>
            </button>
          </div>
        </form>
      </div>
      <PresentacionTarjetas
        titulo="Resultados de Busqueda"
        peliculas={resultados}
      />
    </section>
  );
};
export default Search;
