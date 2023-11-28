import axios from 'axios';

const url = 'https://api.themoviedb.org/3';
const API_KEY = `7f8ede9181de25e0d4533e1ed4740bf2`;

const withBaseUrl = (path) => `${url}/${path}?api_key=${API_KEY}`;

export class MoviesService {
  static getMovies() {
    return axios(withBaseUrl(`movie/popular`));
  }

  static getMovieDatails(id_movie) {
    return axios(withBaseUrl(`movie/${id_movie}`))
  }
}
