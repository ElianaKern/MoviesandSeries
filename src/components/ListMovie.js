import '../styles/components-styles/_ListMovie.scss';
import { urlBaseImg, tipoMovie } from '../components/Auxiliares';
import Item from '../components/Item';
import UseFetch from '../hooks/UseFetch';
import NoDisponible from "../assets/no-disponible.png";
import { useContext } from 'react';
import Contexto from "../contexto/Contexto";

const ListMovie = ({ title, categoria }) => {
  const valorTipo = useContext(Contexto).tipo
  const { results: peliculas = [] } = UseFetch(valorTipo, categoria);
 
  return (
    <div className="container-list">
      <div className="title-list">
        <h2>{title}</h2>
      </div>
      <ul className="list">
        {peliculas.map((pelicula) => (
          <Item
            key={pelicula.id}
            img={pelicula.poster_path !== null ? `${urlBaseImg}w200/${pelicula.poster_path}` : NoDisponible }
            titleItem={pelicula.title? pelicula.title : pelicula.name}
            idRuta={ `/${valorTipo}/${pelicula.id}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListMovie;
