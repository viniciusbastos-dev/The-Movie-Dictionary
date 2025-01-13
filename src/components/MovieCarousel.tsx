import React from "react";
import Carousel from "./Carousel";
import { getTrending } from "@/app/[locale]/(paginas)/filmes-e-series/actions";
import MovieCard from "./MovieCard";

interface Props {}
const MovieCarousel: React.FC<Props> = async () => {
  const data = await getTrending();

  return (
    <Carousel
      swiperName="filmes"
      data={data}
      renderCard={(movie) => <MovieCard data={movie} />}
    />
  );
};

export default MovieCarousel;
