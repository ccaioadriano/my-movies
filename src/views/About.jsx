import { useEffect, useState } from "react";
import { MoviesService } from "../api/moviesService";
import { useParams } from "react-router-dom";
export function About() {
  const params = useParams();

  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    const { data } = await MoviesService.getMovieDatails(params.id);
    setMovie(data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);
  
  return (
    <>
      <h1>{movie.title}</h1>
      {movie.overview}
    </>
  );
}
