import { MovieItem } from "./MovieItem";
import styled from 'styled-components';

const MovieContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  backgraound: #cecece;
`;

export function MovieList({ movies }) {
  return (

    <MovieContainer>

      {movies.map((movie) => {
        return <MovieItem movie={movie} key={movie.id}></MovieItem>;
      })}

    </MovieContainer>
  );
}
