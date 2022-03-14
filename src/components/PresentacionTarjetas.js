import '../styles/components-styles/_PresentacionTarjetas.scss';
import { ImEye } from 'react-icons/im';
import { Link } from 'react-router-dom';

const PresentacionTarjetas = ({ title, movies }) => {
  return (
    <section className="container-presentacion-tarjetas">
      <h2>{title}</h2>
      <div className="container-tarjetas">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="tarjeta">
            <img className="img-tarjeta"
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            ></img>
            <div className="title-tarjeta">
              <h3>{movie.title}</h3>
            </div>
            <div className="icono-eye">
              <ImEye className="eye" />
            </div>
          </Link>
        ))}
      </div>
      <h4>PAGINADO</h4>
    </section>
  );
};
export default PresentacionTarjetas;
