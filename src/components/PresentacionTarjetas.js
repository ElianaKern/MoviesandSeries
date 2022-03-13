import '../styles/components-styles/_PresentacionTarjetas.scss';
import { ImEyePlus } from 'react-icons/im';

const PresentacionTarjetas = ({ title, movies }) => {
  console.log(movies);
  return (
    <section className="container-presentacion-tarjetas">
      <h2>{title}</h2>
      <div className="container-tarjetas">
        {movies.map((movie) => (
          <div key={movie.id} className="tarjeta">
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            ></img>
            <div className="title-tarjeta">
              <h3>{movie.title}</h3>
            </div>
            <div className="icono-eye">
              <ImEyePlus className="eye" />
            </div>
          </div>
        ))}
      </div>
      <h4>PAGINADO</h4>
    </section>
  );
};
export default PresentacionTarjetas;
