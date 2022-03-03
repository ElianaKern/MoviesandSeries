import '../styles/_Nav.scss';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/movie-new">
        <div>Nuevas Peliculas</div>
      </Link>
      <Link to="/movie-popular">
        <div>Populares</div>
      </Link>
      <Link to="/search">
        <div>Buscar</div>
      </Link>
    </div>
  );
};

export default Nav;
