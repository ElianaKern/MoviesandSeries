import { useState, useEffect } from 'react';
import { baseUrl, apiKey, lenguaje, paginacion } from '../components/Auxiliares';
import { useContext } from 'react';
import Contexto from "../contexto/Contexto";

const UseFetch = (tipo, categoria, page) => {
  const contexto = useContext(Contexto);
  const [data, setData] = useState({});
  const [totalPages, setTotalPages] = useState(1)


  useEffect(() => {
    fetch(`${baseUrl}/${tipo}/${categoria}?${apiKey}&${lenguaje}=es-AR&${paginacion}=${page}`)
      .then((res) => res.json())
      .then(dataRes => {
        setData(dataRes);
        // setTotalPages(dataRes.total_pages)
      });
  }, [contexto, page]);

  return data;
};

export default UseFetch;
