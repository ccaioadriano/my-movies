import { useEffect, useState } from 'react';
import { MovieList } from '../components/MovieList';
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
      <MovieList movies={movies} />
  );
}
