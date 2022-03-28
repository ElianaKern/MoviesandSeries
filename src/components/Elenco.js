import '../styles/components-styles/_ListMovie.scss';
import '../styles/components-styles/_Elenco.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  baseUrl,
  tipoMovie,
  moviesCredits,
  apiKey,
  lenguaje,
  page,
  urlBaseImgCast,
} from '../components/Auxiliares';
import Item from './Item';
import NoDisponible from '../assets/no-disponible.png';

const Elenco = ({ setVerElenco }) => {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `${baseUrl}/${tipoMovie}/${params.id}/${moviesCredits}?${apiKey}&${lenguaje}=es-AR&${page}=1`
    )
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);

  console.log(data);

  const handleClick = () => {
    setVerElenco(false);
  };

  return (
    <div className="modal-container-elenco">
      <div className="container-list">
        <div className="title-list">
          <h2>Lista de Actores</h2>
        </div>
        <ul className="list">
          {data?.cast?.map((actor) => (
            <Item
              key={actor.id}
              img={
                actor.profile_path !== null
                  ? `${urlBaseImgCast}${actor.profile_path}`
                  : NoDisponible
              }
              titleItem={`Personaje: ${actor.character}`}
              idRuta={`/actor/${actor.id}`}
            />
          ))}
        </ul>
        <div className="div-close">
          <div className="close-elenco">
            <button onClick={handleClick}>X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elenco;
