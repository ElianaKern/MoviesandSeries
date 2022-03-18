import '../styles/components-styles/_DescripcionMovie.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl, apiKey, urlBaseImg } from '../components/Auxiliares';

const DescripcionMovie = () => {
  const [pelicula, setPelicula] = useState([]);
  const params = useParams();
  console.log(pelicula);
  useEffect(() => {
    fetch(
      `${baseUrl}movie/${params.id}?api_key=${apiKey}&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPelicula(data));
  }, []);
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
            <div className='container-poster'>
            <img
              src={`${urlBaseImg}w500/${pelicula.poster_path}`}
              alt={`poster de ${pelicula.title}`}
              className="poster"
            />
            </div>
            <div className="container-descripcion">
              <h3>{pelicula.title}</h3>
              <p>
                Fecha de lanzamiento: {pelicula.release_date}. Duracion:{' '}
                {pelicula.runtime} minutos.
              </p>
              <h5>Reseña</h5>
              <p>{pelicula.overview}</p>
              <h5>Generos</h5>
              <p></p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
export default DescripcionMovie;
