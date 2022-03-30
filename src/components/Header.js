import '../styles/components-styles/_Header.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import {
  moviesLanzamiento,
  tipoMovie,
  urlBaseImg,
  tvLanzamiento
} from '../components/Auxiliares';
import NoDisponible from '../assets/no-disponible.png';
import UseFetch from '../hooks/UseFetch';
import { useContext } from 'react';
import Contexto from "../contexto/Contexto";

const Header = () => {
  const valorCategoria = useContext(Contexto).tipo

  const categoria = () => {
    if(valorCategoria === "movie") {
      return moviesLanzamiento
    }
      else {
        return tvLanzamiento
      }
  }
  const { results: peliculas = [] } = UseFetch(tipoMovie, categoria());
  const propsCarrousel = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <header>
      <Slider {...propsCarrousel}>
        {peliculas.map((pelicula) => (
          <div className="container-img-header" key={pelicula.id}>
            <img
              src={pelicula.backdrop_path !== null ? `${urlBaseImg}original/${pelicula.backdrop_path}` : NoDisponible}
              className="img-carrousel"
              alt={`poster de ${pelicula.title}`}
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
