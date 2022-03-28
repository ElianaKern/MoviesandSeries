import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import NewMovies from './components/NewMovies';
import PopularMovies from './components/PopularMovies';
import Search from './components/Search';
import DescripcionMovie from './components/DescripcionMovie';
import DescripcionActor from './components/DescripcionActor';
import Footer from './components/Footer';
import Contexto from './contexto/Contexto';
import { useState } from 'react';

const App = () => {
  const [tipo, setTipo] = useState("movie");
  const contexto = { tipo: tipo, setTipo: setTipo };
  console.log(contexto)
  return (
    <BrowserRouter>
      <Contexto.Provider value={contexto}>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie-new" element={<NewMovies />} />
          <Route path="/movie-popular" element={<PopularMovies />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<DescripcionMovie />} />
          <Route path="/actor/:id" element={<DescripcionActor />} />
        </Routes>
        <Footer></Footer>
      </Contexto.Provider>
    </BrowserRouter>
  );
};

export default App;
