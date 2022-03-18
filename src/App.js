import "./App.scss"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import NewMovies from './components/NewMovies';
import PopularMovies from './components/PopularMovies';
import Search from './components/Search';
import DescripcionMovie from './components/DescripcionMovie';
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-new" element={<NewMovies />} />
        <Route path="/movie-popular" element={<PopularMovies />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<DescripcionMovie />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
