import '../styles/components-styles/_NavBarLateral.scss';
import { Link } from 'react-router-dom';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from "react-icons/im";
import { useState } from 'react';
import { dataNavBarLateral } from './DataNavBarLateral';
import { IconContext } from 'react-icons';
import { useContext } from 'react';
import Contexto from '../contexto/Contexto';
import Logo from '../assets/logo.png';

const NavBarLateral = () => {
  const contexto = useContext(Contexto);
  console.log(contexto);
  const handleClickTipo = (e) => {
    contexto.setTipo(e.target.value);
    console.log(e.target.value);
  };

  const [menuHamburguesa, setMenuHamburguesa] = useState(false);
  const mostrarBarraLateral = () => setMenuHamburguesa(!menuHamburguesa);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={mostrarBarraLateral} />
          </Link>
        </div>
        <nav className={menuHamburguesa ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={mostrarBarraLateral}>
            <li className="navbar-toggle">
              <div className="logo-menu">
                <img
                  src={Logo}
                  className="logo"
                  alt="pochoclos mas bebida y tira de imagenes"
                ></img>
              </div>
              <Link to="#" className="menu-bars">
                <FaRegWindowClose />
              </Link>
            </li>
            <li className="nav-text">
              <button onClick={handleClickTipo} value="movie">
              <ImIcons.ImVideoCamera className='icono'/>Peliculas
              </button>
            </li>
            <li className="nav-text">
              <button onClick={handleClickTipo} value="tv">
              <ImIcons.ImTv className='icono'/>Series
              </button>
            </li>
            {dataNavBarLateral.map((item) => {
              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};
export default NavBarLateral;
