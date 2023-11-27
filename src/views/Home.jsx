import { useEffect, useState } from 'react';
import { MovieList } from '../components/MovieList';
import { MovieContainer } from '../styles/MovieContainer';
import { MoviesService } from '../api/moviesService';

export function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const { data } = await MoviesService.getMovies();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <MovieContainer>
      <MovieList movies={movies} />
    </MovieContainer>
  );
}
