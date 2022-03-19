import '../styles/components-styles/_Header.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { moviesLanzamiento, tipoMovie, urlBaseImg } from '../components/Auxiliares';
import UseFetch from "../hooks/UseFetch";

const Header = () => {
  const peliculas = UseFetch(`${tipoMovie}, ${moviesLanzamiento}`)

  const propsCarrousel = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <header>
      <Slider {...propsCarrousel}>
        {peliculas.map((pelicula) => (
          <div className="container-img-header" key={pelicula.id}>
            <img
              src={`${urlBaseImg}original/${pelicula.backdrop_path}`}
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
