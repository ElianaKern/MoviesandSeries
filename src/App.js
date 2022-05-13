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
import RutaNoEncontrada from './components/RutaNoEncontrada';
import Contexto from './contexto/Contexto';
import { useState } from 'react';
import NavBarLateral from './components/NavBarLateral';

const App = () => {
  const [tipo, setTipo] = useState('movie');
  const contexto = { tipo: tipo, setTipo: setTipo };
  return (
    <BrowserRouter>
    {/* esto deberia ser Context.Provider */}
      <Contexto.Provider value={contexto}>
        {window.innerWidth >= 700 ? <Nav /> : <NavBarLateral />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:tipo/new" element={<NewMovies />} />
          <Route path="/:tipo/popular" element={<PopularMovies />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:tipo/:id" element={<DescripcionMovie />} />
          <Route path="/actor/:id" element={<DescripcionActor />} />
          <Route path="*" element={<RutaNoEncontrada/>}/>
        </Routes>
        <Footer></Footer>
      </Contexto.Provider>
    </BrowserRouter>
  );
};

export default App;
