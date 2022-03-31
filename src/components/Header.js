import '../styles/components-styles/_Header.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import {
  moviesLanzamiento,
  urlBaseImg,
  tvLanzamiento
} from '../components/Auxiliares';
import NoDisponible from '../assets/no-disponible.png';
import UseFetch from '../hooks/UseFetch';
import { useContext } from 'react';
import Contexto from "../contexto/Contexto";

const Header = () => {
  const valorTipo = useContext(Contexto).tipo
  const categoria = () => {
    if(valorTipo === "movie") {
      return moviesLanzamiento
    }
      else {
        return tvLanzamiento
      }
  }
  const { results: peliculas = [] } = UseFetch(valorTipo, categoria());
  const propsCarrousel = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
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
                <div className='modal-descripcion'>
                  <h3>{pelicula.title}</h3>
                  <p>{pelicula.overview}</p>
                </div>
                <Link to={`/${valorTipo}/${pelicula.id}`} className='ver-mas'>
                  <span>Ver mas...</span>
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
