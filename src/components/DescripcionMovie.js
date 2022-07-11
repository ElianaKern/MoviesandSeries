import '../styles/components-styles/_DescripcionMovie.scss';
import { ImEye } from 'react-icons/im';
import { BsStarFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { urlBaseImg } from '../components/Auxiliares';
import UseFetch from '../hooks/UseFetch';
import Elenco from './Elenco';
import { useContext } from 'react';
import Contexto from '../contexto/Contexto';
// import { useEffect } from 'react';
// import {
//   baseUrl,
//   apiKey,
//   lenguaje,
//   paginacion,
// } from '../components/Auxiliares';

const DescripcionMovie = () => {
  const valorTipo = useContext(Contexto).tipo;
  const params = useParams();
  const pelicula = UseFetch(valorTipo, params.id, 1);
  const [verElenco, setVerElenco] = useState(false);
  const handleClick = () => {
    setVerElenco(true);
  };
// no dejes codigo comentado en una entrega
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //     fetch(`${baseUrl}/${valorTipo}/${params.id}/videos?${apiKey}&${lenguaje}=es-AR&`)
  //        //api.themoviedb.org/3/tv/11250/videos?api_key=&language=en-US
  //     .then((res) => res.json())
  //       .then(dataRes => {
  //         setData(dataRes);
  //       });
  //   }, []);

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
            <div className="container">
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
            </div>
            <div className="puntuacion">
              <BsStarFill className='estrella'/>
              <h5>{pelicula.vote_average}<span> /10</span></h5>
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
              <h5>Elenco</h5>
              <button
                onClick={handleClick}
                className="icono-eye"
                aria-label="ver elenco"
              >
                <ImEye className="eye" />
              </button>
            </div>
          </div>
          {verElenco && <Elenco setVerElenco={setVerElenco} />}
        </article>
      </div>
    </section>
  );
};
export default DescripcionMovie;
/* <div className="container__video">
  <iframe
    title={`YouTube video player. Trailer von ${info.title}`}
    gyroscope="true"
    encrypted-media="true"
    frameBorder="0"
    src={`${URL_VIDEO}${filtrarTrailer.key}`}
    allowFullScreen
  />
</div>; */
