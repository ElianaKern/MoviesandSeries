import '../styles/components-styles/_Nav.scss';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="link-nav">
            Home
          </Link>
        </li>
        <li>
          <Link to="/movie-new" className="link-nav">
            Nuevas Peliculas
          </Link>
        </li>
        <li>
          <Link to="/movie-popular" className="link-nav">
            Populares
          </Link>
        </li>
        <li>
          <Link to="/search" className="link-nav">
            Buscar
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
