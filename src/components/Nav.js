import '../styles/components-styles/_Nav.scss';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Contexto from "../contexto/Contexto";

const Nav = () => {
  const contexto = useContext(Contexto);
  console.log(contexto)
  const handleChangeTipo = (e) => {
    contexto.setTipo(e.target.vale)
    console.log(e.target.value)
  }


  return (
    <nav>
      <div className="logo-menu">
        <img src={Logo} className="logo" alt="pochoclos mas bebida y tira de imagenes"></img>
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
        <select onChange={handleChangeTipo}>
          <option value="movie">Peliculas</option>
          <option value="tv">Series</option>
        </select>
      </ul>
    </nav>
  );
};

export default Nav;
