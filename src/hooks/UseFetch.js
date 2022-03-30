import { useState, useEffect } from 'react';
import { baseUrl, apiKey, lenguaje, page } from '../components/Auxiliares';
import { useContext } from 'react';
import Contexto from "../contexto/Contexto";

const UseFetch = (tipo, categoria) => {
  const contexto = useContext(Contexto);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${baseUrl}/${tipo}/${categoria}?${apiKey}&${lenguaje}=es-AR&${page}=1`)
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, [contexto]);

  return data;
};

export default UseFetch;
