import { Genre } from "@/@types/types";
import { fetchFromApi } from "../../utils/api";
import { getLocale } from "next-intl/server";

export async function getGenres() {
  const locale = await getLocale();
  const response = await fetchFromApi(`/genre/movie/list?language=${locale}`);
  const data = await response.json();

  return data?.genres?.slice(0, 10);
}

export async function getMoviesByGenre(genreId: number) {
  const locale = await getLocale();
  const response = await fetchFromApi(
    `/discover/movie?include_adult=false&include_video=false&language=${locale}&page=1&sort_by=popularity.desc&with_genres=${genreId}`
  );
  const data = await response.json();
  return data?.results?.slice(0, 4);
}

export async function fetchMoviesByGenres(genres: Genre[]) {
  const moviesByGenre = await Promise.all(
    genres.map(async (genre) => {
      const movies = await getMoviesByGenre(genre.id);
      return { [genre.name]: movies };
    })
  );

  return moviesByGenre;
}
