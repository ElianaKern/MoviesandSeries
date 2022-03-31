import '../styles/components-styles/_ListMovie.scss';
import '../styles/components-styles/_Elenco.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  baseUrl,
  credits,
  apiKey,
  lenguaje,
  paginacion,
  urlBaseImgCast,
} from '../components/Auxiliares';
import Item from './Item';
import NoDisponible from '../assets/no-disponible.png';
import { useContext } from 'react';
import Contexto from '../contexto/Contexto';

const Elenco = ({ setVerElenco }) => {
  const params = useParams();
  const [data, setData] = useState([]);
  const valorTipo = useContext(Contexto).tipo;
  useEffect(() => {
    fetch(
      `${baseUrl}/${valorTipo}/${params.id}/${credits}?${apiKey}&${lenguaje}=es-AR&${paginacion}=1`
    )
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);
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
