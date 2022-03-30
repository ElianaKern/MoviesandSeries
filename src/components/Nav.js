import '../styles/components-styles/_Nav.scss';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Contexto from '../contexto/Contexto';

const Nav = () => {
  const contexto = useContext(Contexto);
  console.log(contexto);
  const handleClickTipo = (e) => {
    contexto.setTipo(e.target.value);
    console.log(e.target.value);
  };

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
        <ul className='ul-nav'>
          <li className="li-nav"><button onClick={handleClickTipo} value="movie">Peliculas</button></li>
          <li className="li-nav"><button onClick={handleClickTipo} value="tv">Series</button></li>
          <Link to="/" className="li-nav">
            <li>Home</li>
          </Link>
          <Link to="/movie-new" className="li-nav">
            <li>Lanzamientos</li>
          </Link>
          <Link to="/movie-popular" className="li-nav">
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
