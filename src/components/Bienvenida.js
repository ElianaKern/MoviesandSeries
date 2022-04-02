import "../styles/components-styles/_Bienvenida.scss"

const Bienvenida = () => {
    const [menuHamburguesa, setMenuHamburguesa] = useState(false);
    const mostrarBarraLateral = () => setMenuHamburguesa(!menuHamburguesa);
    return(
        <div className="cortina">
         <h2>Gracias por visitar mi buscador de Movies and Series!!!</h2>
      </div>
    )
    ///tengo que convertir a los pochoclos en un link o hacerle onclick y se muestre la cortina
}