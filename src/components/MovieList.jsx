import { MovieItem } from "./MovieItem";

export function MovieList({ movies }) {
  return (
    <section>
      <ul>
        {movies.map((movie) => {
          return <MovieItem movie={movie} key={movie.id}></MovieItem>;
        })}
      </ul>
    </section>
  );
}
