import "../styles/components-styles/_RutaNoEncontrada.scss";
import Error404 from "../assets/error-404.jpg";

const RutaNoEncontrada = () => {
    return (
       <div className="container-error-404">
           <div className="error-404">
               <img className="img-404" src={Error404} alt="astronauta con bandera error 404"/>
           </div>
       </div>
    )
}
export default RutaNoEncontrada;