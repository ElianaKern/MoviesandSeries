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
        <Link to="/" className="link-nav">
          <li>Home</li>
        </Link>

        <Link to="/movie-new" className="link-nav">
          <li>Lanzamientos</li>
        </Link>

        <Link to="/movie-popular" className="link-nav">
          <li>Populares</li>
        </Link>

        <Link to="/search" className="link-nav">
          <li>Buscar</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
