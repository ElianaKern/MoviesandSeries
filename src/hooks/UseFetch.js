import { useState, useEffect } from 'react';
import { baseUrl, apiKey, qParamsLenguaje } from '../components/Auxiliares';

const UseFetch = (tipo, categoria) => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`${baseUrl}/${tipo}/${categoria}?${apiKey}${qParamsLenguaje}=es-AR`)
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);

  return data;
};

export default UseFetch;
