import '../styles/components-styles/_Home.scss';
import ListMovie from "../components/ListMovie";


const Home = () => {
 
  return (
    <div className="home">
      <ListMovie
        title="Peliculas Populares"
        url="popular"
      />
        <ListMovie
        title="Peliculas Mejor Puntuadas"
        url="top_rated"
      />
    </div>
  );
};
export default Home;
