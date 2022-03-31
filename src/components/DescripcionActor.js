import '../styles/components-styles/_DescripcionActor.scss';
import NoDisponible from '../assets/no-disponible.png';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  baseUrl,
  apiKey,
  lenguaje,
  paginacion,
  urlBaseImgCast,
} from '../components/Auxiliares';

const DescripcionActor = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(
      `${baseUrl}/person/${params.id}?${apiKey}&${lenguaje}=es-AR&${paginacion}=1`
    )
      .then((res) => res.json())
      .then((dataRes) => setData(dataRes));
  }, []);
  return (
    <section className="seccion-datos-actor">
      <div className="container-datos-actor">
        <div key={data.id} className="conteiner-img">
          <div className='container'>
            <img
              src={
                data.profile_path !== null
                  ? `${urlBaseImgCast}${data.profile_path}`
                  : NoDisponible
              }
              className="img-actor"
            />
          </div>
        </div>
        <div className="datos-actor">
          <div className="name">
            <h3>{data.name}</h3>
          </div>
          <div className="datos">
            <p>Nacimiento: {data.birthday}</p>
            <p>Lugar de Nacimiento: {data.place_of_birth}</p>
            <h4>Biografia:</h4>
            <p>{data.biography !== '' ? data.biography : 'No Disponible'}</p>
            {data.homepage !== null && <a href= {data.homepage}>Homepage </a>}
          </div>
        </div>
      </div>
    </section>
  );
};
export default DescripcionActor;
