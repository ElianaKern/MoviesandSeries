import '../styles/components-styles/_Item.scss';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';

const Item = ({ img, titleItem, id }) => {
  return (
      <li className='items'>
        <Link className="img-item" to={`/movie/${id}`}>
          <img src={img} alt={`poster de ${titleItem}`}/>
        </Link>
        <Link className="titulo-item" to={`/movie/${id}`}>
          <p>{titleItem}</p>
        </Link>
        <Link to={`/movie/${id}`}>
          <MdArrowForwardIos className='next'/>
        </Link>
        
      </li>
  );
};
export default Item;
