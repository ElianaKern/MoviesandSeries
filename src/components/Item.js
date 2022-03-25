import '../styles/components-styles/_Item.scss';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';

const Item = ({ img, titleItem, idRuta }) => {
  return (
    <Link className='link' to={idRuta}> {/*/ver cual dejo /<Link className='link' to={id ? `/movie/${id}` : ''}> // */}
      <li className='items'>
        <span className="img-item">
          <img src={img} alt={`poster de ${titleItem}`}/>
        </span>
        <span className="titulo-item">
          <span>{titleItem}</span>
        </span>
        <span>
          <MdArrowForwardIos className='next'/>
        </span>   
      </li>
    </Link>
  );
};
export default Item;

//<Link className='link' to={id ? `/movie/${id}` : ''}> //