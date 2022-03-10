import '../styles/components-styles/_Item.scss';
import { Link } from 'react-router-dom';
import { GrNext } from "react-icons/gr";

const Item = ({ img, titleItem, id }) => {
  return (
      <li className='items'>
        <div className="img-item">
          <img src={img} />
        </div>
        <Link className="titulo-item" to={`/movie/${id}`}>
          <p>{titleItem}</p>
        </Link>
        <Link to={`/movie/${id}`}>
          <GrNext className='next'/>
        </Link>
        
      </li>
  );
};
export default Item;
