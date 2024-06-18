import { fetchFromApi } from "../../utils/api";

export async function getGenres() {
  const response = await fetchFromApi("/genre/movie/list?language=pt-BR");
  const data = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return data.genres;
}

export async function getMoviesByGenre(genreId: number) {
  const response = await fetchFromApi(
    `/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&with_genres=${genreId}`
  );
  const data = await response.json();
  return data.results.slice(0, 4);
}

export async function fetchMoviesByGenres(
  genres: { id: number; name: string }[]
) {
  const moviesByGenre = await Promise.all(
    genres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre.id);
      return { [genre.name]: movies };
    })
  );

  return moviesByGenre;
}
