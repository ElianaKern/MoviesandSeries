import '../styles/components-styles/_Nav.scss';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <nav>
      <div className="logo-menu">
        <img src={Logo} className="logo"></img>
      </div>
      <ul>
        <li>
          <Link to="/" className="link-nav">
            Home
          </Link>
        </li>
        <li>
          <Link to="/movie-new" className="link-nav">
            Ultimos Lanzamientos
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
