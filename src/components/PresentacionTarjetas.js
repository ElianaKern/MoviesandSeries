import '../styles/components-styles/_PresentacionTarjetas.scss';
import { ImEye } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { urlBaseImg } from '../components/Auxiliares';
import NoDisponible from "../assets/no-disponible.png"
console.log(NoDisponible)

const PresentacionTarjetas = ({ titulo, peliculas }) => {
  return (
    <section className="container-presentacion-tarjetas">
      <h2>{titulo}</h2>
      <div className="container-tarjetas">
        {peliculas.map((pelicula) => (
          <article className="tarjeta" key={pelicula.id}>
            <Link
              to={`/movie/${pelicula.id}`}
              className="link"
            >
              <img
                className="img-tarjeta" //aca tampoco me funcion NoDisponible///
                src={pelicula.poster_path !== null ? `${urlBaseImg}w200/${pelicula.poster_path}` : {NoDisponible}}
                alt={`poster de ${pelicula.title}`}
              ></img>
              <div className="title-tarjeta">
                <h3>{pelicula.title}</h3>
              </div>
              <div className="icono-eye">
                <ImEye className="eye" />
              </div>
            </Link>
          </article>
        ))}
      </div>
      <h4>PAGINADO</h4>
    </section>
  );
};
export default PresentacionTarjetas;
