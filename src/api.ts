const API_KEY = "454f597cdee2f722480c9fda4efff275";
const BASE_PATH = "https://api.themoviedb.org/3";
export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key}=${API_KEY}`).then(
    (response) => response.json()
  );
}
