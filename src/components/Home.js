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
        title="Populares"
        categoria= {moviesPopular}
      />
        <ListMovie
        title="Mejor Puntuadas"
        categoria= {moviesMejorPuntuada}
      />
    </section>
    </>
  );
};
export default Home;
