import '../styles/components-styles/_Search.scss';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  baseUrl,
  search,
  tipoMovie,
  query,
  apiKey,
  lenguaje,
  page,
} from './Auxiliares';
import PresentacionTarjetas from './PresentacionTarjetas';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  const [valorDelInput, setValorDelInput] = useState('');
  const [resultados, setResultados] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    query: "diario de una pasion",
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
        `${baseUrl}/${search}/${tipoMovie}?${query}=${searchParams.get(
          'query'
        )}&${apiKey}&${lenguaje}=es-AR&${page}=1`
      )
        .then((res) => res.json())
        .then((data) => setResultados(data.results));
    }
  }, [searchParams]);

  return (
    <section className="seccion-busqueda">
      <div className="busqueda">
        <h2>Busca por nombre</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-busqueda">
            <input
              type="text"
              onChange={handleChange}
              value={valorDelInput}
              aria-label="introducir nombre"
            />
            <button type="submit" aria-label="buscar">
              <FaSearch className="lupa" />
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
