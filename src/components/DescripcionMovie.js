import '../styles/components-styles/_DescripcionMovie.scss';
import { useParams } from 'react-router-dom';
import {
  baseUrl,
  apiKey,
  urlBaseImg,
  tipoMovie,
  qParamsLenguaje,
  qParamsPagina,
} from '../components/Auxiliares';
import UseFetch from '../hooks/UseFetch';

const DescripcionMovie = () => {
  const params = useParams();
  const pelicula = UseFetch(tipoMovie, params.id);
  return (
    <section className="secccion-descripcion-movie" key={pelicula.id}>
      <div
        className="container-background-img"
        style={{
          backgroundImage: `url(${urlBaseImg}original/${pelicula.backdrop_path})`,
        }}
      >
        <article className="container-poster-descripcion">
          <div className="container">
            <div className="container-poster">
              <img
                src={`${urlBaseImg}w500/${pelicula.poster_path}`}
                alt={`poster de ${pelicula.title}`}
                className="poster"
              />
            </div>
            <div className="container-descripcion">
              <h3>{pelicula.title}</h3>
              <p>Fecha de lanzamiento: {pelicula.release_date} </p>
              <p>Duracion : {pelicula.runtime} minutos.</p>
              <p>Puntuacion : {pelicula.vote_average}</p>
              <h5>Reseña</h5>
              <p>{pelicula.overview}</p>
              <ul>
                <p>Generos :</p>
                {pelicula?.genres?.map((dato) => (
                  <li>{dato.name}</li>
                ))}
              </ul>
              <p>Productora :</p>
              {pelicula?.production_companies?.map((productora) => (
                <p>{productora.name}</p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
export default DescripcionMovie;
