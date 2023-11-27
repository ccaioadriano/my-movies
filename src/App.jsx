import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { MovieList } from './components/MovieList';
import { MoviesService } from './api/moviesService';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './views/Home';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
