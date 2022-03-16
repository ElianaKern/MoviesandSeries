import '../styles/components-styles/_Home.scss';
import ListMovie from "../components/ListMovie";
import Header from './Header';
import { moviesMejorPuntuada, moviesPopular } from './Auxiliares';

const Home = () => {
 
  return (
    <>
    <Header/>
    <section className="home">
      <ListMovie
        title="Peliculas Populares"
        url= {moviesPopular}
      />
        <ListMovie
        title="Peliculas Mejor Puntuadas"
        url= {moviesMejorPuntuada}
      />
    </section>
    </>
  );
};
export default Home;
