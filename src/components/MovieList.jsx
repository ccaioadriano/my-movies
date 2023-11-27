import { MovieContainer } from '../styles/MovieContainer';
import { MovieItem } from './MovieItem';

export function MovieList({ movies }) {
  
  return (
    <section>
      <ul>
        {movies.map((m) => {
          return <MovieItem title={m.title} key={m.id} />;
        })}
      </ul>
    </section>
  );
}
