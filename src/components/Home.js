import '../styles/components-styles/_Home.scss';
import ListMovie from "../components/ListMovie";
import Header from './Header';
import { mejorPuntuada, popular } from './Auxiliares';

const Home = () => {
 
  return (
    <>
    <Header/>
    <section className="home">
      <ListMovie
        title="Populares"
        categoria= {popular}
      />
        <ListMovie
        title="Mejor Puntuadas"
        categoria= {mejorPuntuada}
      />
    </section>
    </>
  );
};
export default Home;
