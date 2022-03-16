import '../styles/components-styles/_PresentacionTarjetas.scss';
import { ImEye } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { urlBaseImg } from '../components/Auxiliares';

const PresentacionTarjetas = ({ titulo, peliculas }) => {
  return (
    <section className="container-presentacion-tarjetas">
      <h2>{titulo}</h2>
      <div className="container-tarjetas">
        {peliculas.map((pelicula) => (
          <Link to={`/movie/${pelicula.id}`} key={pelicula.id} className="tarjeta">
            <img className="img-tarjeta"
              src={`${urlBaseImg}w200/${pelicula.poster_path}`}
            ></img>
            <div className="title-tarjeta">
              <h3>{pelicula.title}</h3>
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
