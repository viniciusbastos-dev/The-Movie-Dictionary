import React from "react";
import Button from "./Button";
import { fetchFromApi } from "../../utils/api";
import Image from "next/image";

const getTrendingMovies = async () => {
  const response = await fetchFromApi("/trending/all/day?language=pt-BR");
  const data = await response.json();
  return data?.results?.slice(0, 4);
};

const MovieBanner = async () => {
  const bannerList = await getTrendingMovies();
  return (
    <div className="text-center p-10 mt-10 relative h-[470px] flex flex-col items-center justify-end after:bg-gradient-to-t after:-z-[9] after:inset-0 after:w-full after:block after:h-[100%] after:absolute from-black-8 to-transparent">
      <Image
        src={`https://image.tmdb.org/t/p/original${bannerList[0].backdrop_path}`}
        alt={bannerList[0].title}
        fill
        className="-z-10 object-fit object-cover "
      />

      <h1 className="text-clg"></h1>
      <p className="hidden md:block text-gray-60">
        With the help of remaining allies, the Avengers must assemble once more
        in order to undo Thanos's actions and undo the chaos to the universe, no
        matter what consequences may be in store, and no matter who they face...
        Avenge the fallen.
      </p>
      <Button text="Play Now" className="mt-6" />
    </div>
  );
};

export default MovieBanner;
