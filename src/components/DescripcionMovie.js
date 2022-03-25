import '../styles/components-styles/_DescripcionMovie.scss';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import {
  baseUrl,
  apiKey,
  urlBaseImg,
  tipoMovie,
  qParamsLenguaje,
  qParamsPagina,
} from '../components/Auxiliares';
import UseFetch from '../hooks/UseFetch';
import Elenco from './Elenco';

const DescripcionMovie = () => {
  const params = useParams();
  const pelicula = UseFetch(tipoMovie, params.id);
  const [verElenco,setVerElenco] = useState(false);
  const handleClick = () => {
    setVerElenco(true)
  }

  return (
    <section className="secccion-descripcion-movie">
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
                  <li key={dato.id}>{dato.name}</li>
                ))}
              </ul>
              <p>Productora :</p>
              {pelicula?.production_companies?.map((productora) => (
                <p key={productora.id}>{productora.name}</p>
              ))}
            <button onClick={handleClick}>Ver Elenco</button>
            </div>
          </div>
          {verElenco && <Elenco setVerElenco={setVerElenco}/>}
        </article>
      </div>
    </section>
  );
};
export default DescripcionMovie;
