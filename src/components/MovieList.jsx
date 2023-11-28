import { MovieItem } from "./MovieItem";
import styled from 'styled-components';

const MovieContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
