import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import MovieNew from './components/MovieNew';
import MoviePopular from './components/MoviePopular';
import Search from './components/Search';

const App = () => {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-new" element={<MovieNew />} />
        <Route path="/movie-popular" element={<MoviePopular />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
