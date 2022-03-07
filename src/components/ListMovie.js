import { useEffect, useState } from 'react';
import '../styles/components-styles/_ListMovie.scss';
import { baseUrl } from '../components/Auxiliares';
import { apiKey } from '../components/Auxiliares';
import Item from '../components/Item';


const ListMovie = ({title, url}) => {
  const [peliculas,setPeliculas] = useState([])
  useEffect(()=> {
    fetch(`${baseUrl}movie/${url}?api_key=${apiKey}&language=es-AR&page=1`)
    .then(res => res.json())
    .then(data => setPeliculas(data.results))
    
  },[])
  console.log(peliculas)
  return (
    <div className="lista-movie">
      
      <h2>{title}</h2>

      {peliculas.map(pelicula => (
           <Item
           key={pelicula.id}
           img={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`}
           titleItem={pelicula.title}
           id={pelicula.id}
           />
      ))}

    </div>
  );
};

export default ListMovie;
