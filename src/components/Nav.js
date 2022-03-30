import '../styles/components-styles/_Nav.scss';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Contexto from '../contexto/Contexto';

const Nav = () => {
  const contexto = useContext(Contexto);
  const handleClickTipo = (e) => {
    contexto.setTipo(e.target.value);
  };
  const valorTipo = useContext(Contexto).tipo;
  return (
    <>
      <nav>
        <div className="logo-menu">
          <img
            src={Logo}
            className="logo"
            alt="pochoclos mas bebida y tira de imagenes"
          ></img>
        </div>
        <ul className="ul-nav">
          {/*acá Nace el valor que cobra valorTipo => "movie" o "tv" y lo uso para los Fetch con el contexto en todo mi proyecto*/}
          <Link to="/" className="li-nav">
            <li>
              <button onClick={handleClickTipo} value="movie">
                Peliculas
              </button>
            </li>
          </Link>
          <Link to="/" className="li-nav">
            <li>
              <button onClick={handleClickTipo} value="tv">
                Series
              </button>
            </li>
          </Link>
          <Link to="/" className="li-nav">
            <li>Home</li>
          </Link>
          <Link to={`/${valorTipo}/new`} className="li-nav">
            <li>Lanzamientos</li>
          </Link>
          <Link to={`/${valorTipo}/popular`} className="li-nav">
            <li>Populares</li>
          </Link>
          <Link to="/search" className="li-nav">
            <li>Buscar</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
