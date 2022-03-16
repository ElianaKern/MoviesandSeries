import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '../styles/components-styles/_Header.scss';
import { useEffect, useState } from 'react';
import {
  baseUrl,
  apiKey,
  urlBaseImg,
  moviesLanzamiento,
} from '../components/Auxiliares';
import { Link } from 'react-router-dom';

const Header = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch(
      `${baseUrl}movie/${moviesLanzamiento}?api_key=${apiKey}&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);

  const propsCarrousel = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    /*autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,*/
  };

  return (
    <header>
      <Slider {...propsCarrousel}>
        {peliculas.map((pelicula) => (
          <div className="container-img-header">
            <img
              src={`${urlBaseImg}original/${pelicula.backdrop_path}`}
              className="img-carrousel"
              key={pelicula.id}
            />
            <div className="modal-container">
              <div className="modal-pelicula">
                <h3>{pelicula.title}</h3>
                <p>{pelicula.overview}</p>
                <Link to={`/movie/${pelicula.id}`}>
                  <button>
                    <span>Ver mas...</span>
                  </button>
                </Link>
              </div>
            </div>
            
          </div>
        ))}
      </Slider>
    </header>
  );
};
export default Header;
