import '../styles/components-styles/_Footer.scss';
import { FaRegEnvelope } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Hecho por Eliana Kern</p>
      <ul className="contacto-footer">
        <li>
          <a href="">
            <FaRegEnvelope />
          </a>
        </li>
        <li>
          <a href="">
              <AiFillGithub/>
          </a>
        </li>
        <li>
          <a href="">
              <AiFillLinkedin/>
          </a>
        </li>
      </ul>
    </footer>
  )
};

export default Footer;
