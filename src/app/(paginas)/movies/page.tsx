import MovieBanner from "@/components/MovieBanner";
import React from "react";

interface Props {}

const MoviesPage: React.FC<Props> = () => {
  return (
    <main className="min-h-screen px-4 md:px-[8%] pt-36">
      <MovieBanner />
    </main>
  );
};

export default MoviesPage;
