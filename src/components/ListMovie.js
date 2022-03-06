import { useEffect, useState } from 'react';
import '../styles/components-styles/_ListMovie.scss';
import { baseUrl } from './Auxiliares';
import { apiKey } from './Auxiliares';

const ListMovie = ({title, url}) => {
  const [peliculas,setPeliculas] = useState([])
  useEffect(()=> {
    fetch(`${baseUrl}movie/${url}?api_key=${apiKey}&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculas(data.results))
  },[])
  return (
    <div className="lista-movie">
      
      <h2>{title}</h2>

      {peliculas.map(pelicula => (
      <p key={pelicula.id}>{pelicula.title}</p>
      ))}

    </div>
  );
};

export default ListMovie;
