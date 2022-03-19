import '../styles/components-styles/_Footer.scss';
import { hrefMail, hrefLinkedin, hrefGitHub } from './Auxiliares';
import { FaRegEnvelope } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Hecho por Eliana Kern</p>
      <ul className="contacto-footer">
        <li>
          <a href={hrefGitHub}>
            <AiFillGithub className="icono-footer" />
          </a>
        </li>
        <li>
          <a href={hrefMail}>
            <FaRegEnvelope className="icono-footer" />
          </a>
        </li>
        <li>
          <a href={hrefLinkedin}>
            <AiFillLinkedin className="icono-footer" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
