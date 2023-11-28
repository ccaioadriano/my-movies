import { Link } from "react-router-dom";
export function MovieItem({movie}) {
  return (
    <li key={movie.id}>
      <Link to={`/sobre/${movie.id}`}>
        {movie.title}
      </Link>
    </li>
  );
}
