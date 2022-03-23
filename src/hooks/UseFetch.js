import { useState, useEffect } from 'react';
import { baseUrl, apiKey, lenguaje, page } from '../components/Auxiliares';

const UseFetch = (tipo, categoria) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${baseUrl}/${tipo}/${categoria}?${apiKey}&${lenguaje}=es-AR&${page}=1`)
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);

  return data;
};

export default UseFetch;
