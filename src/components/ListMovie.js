import '../styles/components-styles/_ListMovie.scss';
import { urlBaseImg, tipoMovie} from '../components/Auxiliares';
import Item from '../components/Item';
import UseFetch from "../hooks/UseFetch";

const ListMovie = ({ title, categoria }) => {
  const peliculas = UseFetch(`${tipoMovie},${categoria}`)

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
