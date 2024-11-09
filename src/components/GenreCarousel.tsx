import React, { Suspense } from "react";
import Carousel from "./Carousel";
import { fetchMoviesByGenres, getGenres } from "@/lib/getData";
import { Genre } from "@/@types/types";
import GenreCard from "./GenreCard";
import { Skeleton } from "./ui/skeleton";

interface Props {}
const GenreCarousel: React.FC<Props> = async () => {
  const genres: Genre[] = await getGenres();
  const movieList = await fetchMoviesByGenres(genres);

  return (
    <Carousel
      swiperName="genre"
      data={genres}
      renderCard={(genre) => <GenreCard data={genre} movies={movieList} />}
    />
  );
};

export default GenreCarousel;

export const GenreCarouselSkeleton = () => {
  return <Skeleton className="h-[300px] w-full" />;
};
