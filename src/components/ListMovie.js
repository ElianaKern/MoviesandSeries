import '../styles/components-styles/_ListMovie.scss';
import { useEffect, useState } from 'react';
import { baseUrl, apiKey, urlBaseImg } from '../components/Auxiliares';
import Item from '../components/Item';

const ListMovie = ({ title, url }) => {
  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}movie/${url}?api_key=${apiKey}&language=es-AR&page=1`)
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);

  return (
    <div className="container-list-movie">
      <div className="title-list">
        <h2>{title}</h2>
      </div>
      <ul className="list">
      {peliculas.map((pelicula) => (
        <Item
          key={pelicula.id}
          img={`${urlBaseImg}w200/${pelicula.poster_path}`}
          titleItem={pelicula.title}
          id={pelicula.id}
        />
      ))}
      </ul>
    </div>
  );
};

export default ListMovie;
