import '../styles/components-styles/_DescripcionMovie.scss';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { urlBaseImg } from '../components/Auxiliares';
import UseFetch from '../hooks/UseFetch';
import Elenco from './Elenco';
import { useContext } from 'react';
import Contexto from '../contexto/Contexto';

const DescripcionMovie = () => {
  const valorTipo = useContext(Contexto).tipo;
  const params = useParams();
  const pelicula = UseFetch(valorTipo, params.id, 1);
  const [verElenco, setVerElenco] = useState(false);
  const handleClick = () => {
    setVerElenco(true);
  };
  return (
    <section
      className="secccion-descripcion-movie"
      style={{
        backgroundImage: `url(${urlBaseImg}original/${pelicula.backdrop_path})`,
      }}
    >
      <div className="background-opacity">
        <article className="container-poster-descripcion">
          <div className="container-poster">
            <div className='container'>
              <img
                src={`${urlBaseImg}w500/${pelicula.poster_path}`}
                alt={
                  `poster de ${pelicula.title}`
                    ? `poster de ${pelicula.title}`
                    : `poster de ${pelicula.name}`
                }
                className="poster"
              />
            </div>
          </div>
          <div className="container-descripcion">
            <div>
              <h3>{pelicula.title ? pelicula.title : pelicula.name}</h3>
            </div>
            <div>
              <p>Fecha de lanzamiento: {pelicula.release_date} </p>
              <p>Duracion : {pelicula.runtime} minutos.</p>
              <p>Puntuacion : {pelicula.vote_average}</p>
            </div>
            <div>
              <h5>Reseña :</h5>
              <p>{pelicula.overview}</p>
            </div>
            <div>
              <ul>
                <h6>Generos :</h6>
                {pelicula?.genres?.map((dato) => (
                  <li key={dato.id}>{dato.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h6>Productora :</h6>
              {pelicula?.production_companies?.map((productora) => (
                <p key={productora.id}>{productora.name}</p>
              ))}
            </div>
            <div>
              <button onClick={handleClick}>Ver Elenco</button>
            </div>
          </div>
          {verElenco && <Elenco setVerElenco={setVerElenco} />}
        </article>
      </div>
    </section>
  );
};
export default DescripcionMovie;
