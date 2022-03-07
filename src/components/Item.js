import { Link } from 'react-router-dom';
const Item = ({img, titleItem, id}) => {
    return (
        <div>
            <div><img src={img}/></div>
            <Link to={`/movie/${id}`}>
            <p>{titleItem}</p>
            <i>icono flecha</i>
            </Link>
        </div>
    )
}
export default Item;