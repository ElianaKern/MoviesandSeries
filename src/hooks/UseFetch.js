import { useState, useEffect } from "react";
import { baseUrl, apiKey, qParamsLenguaje } from "../components/Auxiliares";

const useFetchPeliculas = (tipo, categoria) => {
  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    fetch(`${baseUrl}/${tipo}/${categoria}?${apiKey}${qParamsLenguaje}=es-AR`)
    .then(res=> res.json())
    .then(data => setPeliculas(data.results))
  }, [])
  
  return peliculas
}

export default useFetchPeliculas