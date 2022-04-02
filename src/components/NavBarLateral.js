import '../styles/components-styles/_NavBarLateral.scss';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as ImIcons from 'react-icons/im';
import * as GoIcons from 'react-icons/go';
import * as VscIcons from 'react-icons/vsc';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { useContext } from 'react';
import Contexto from '../contexto/Contexto';
import Logo from '../assets/logo.png';

const NavBarLateral = () => {
  const contexto = useContext(Contexto);
  const handleClickTipo = (e) => {
    contexto.setTipo(e.target.value);
  };
  const [menu, setMenu] = useState(false);
  const mostrarBarraLateral = () => setMenu(!menu);

  const valorTipo = useContext(Contexto).tipo;
  const dataNavBarLateral = [
    {
      titulo: 'Home',
      ruta: '/',
      icono: <FaIcons.FaHome />,
      cName: 'nav-text',
      id: 0,
    },
    {
      titulo: 'Lanzamientos',
      ruta: `/${valorTipo}/new`,
      icono: <GoIcons.GoRocket />,
      cName: 'nav-text',
      id: 1,
    },
    {
      titulo: 'Populares',
      ruta: `/${valorTipo}/popular`,
      icono: <GoIcons.GoStar />,
      cName: 'nav-text',
      id: 2,
    },
    {
      titulo: 'Buscar',
      ruta: '/search',
      icono: <VscIcons.VscSearch />,
      cName: 'nav-text',
      id: 3,
    },
  ];
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className="navbar">
        <Link to="#" className="menu-hamburguesa">
          <FaIcons.FaBars onClick={mostrarBarraLateral} />
        </Link>
      </div>
      <nav className={menu ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={mostrarBarraLateral}>
          <li className="navbar-toggle">
            <div className="logo-menu">
              <img
                src={Logo}
                className="logo"
                alt="pochoclos mas bebida y tira de imagenes"
              ></img>
            </div>
            <Link to="#" className="menu-close">
              <FaIcons.FaRegWindowClose />
            </Link>
          </li>
          <Link to="/" className="link-nav">
            <li className="nav-text">
              <button onClick={handleClickTipo} value="movie">
                <ImIcons.ImVideoCamera className="icono" />
                Peliculas
              </button>
            </li>
          </Link>
          <Link to="/" className="link-nav">
            <li className="nav-text">
              <button onClick={handleClickTipo} value="tv">
                <ImIcons.ImTv className="icono" />
                Series
              </button>
            </li>
          </Link>
          {dataNavBarLateral.map((item) => {
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.ruta}>
                  {item.icono}
                  <span>{item.titulo}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
};
export default NavBarLateral;
