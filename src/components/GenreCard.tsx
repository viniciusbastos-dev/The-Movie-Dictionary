import { ArrowRight } from "@/assets/SVG";
import React from "react";
import Image from "next/image";

interface Props {
  data: {
    id: number;
    name: string;
  };
  movies: any;
}

const GenreCard: React.FC<Props> = ({ data, movies }) => {
  const genreMovies = movies.find((genre: any) => genre[data?.name]);

  return (
    <div className=" bg-black-10 w-fit rounded-[10px] border border-black-15 hover:scale-95 transition duration-300 cursor-pointer p-5 lg:p-6 xl:p-[30px]">
      <div className="image-fade grid grid-cols-2 gap-1 relative after:bg-gradient-to-b from-transparent to-black-10 ">
        {genreMovies[data?.name].map((item: any) => (
          <div className="relative card-image-clamp" key={item.id}>
            <Image
              alt={`Poster do filme ${item.title}`}
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              className="object-cover object-center rounded-lg"
              loading="lazy"
              sizes="(max-width: 600px) 60px, (max-width: 1200px) 12vw, 120px"
              fill
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-semibold small-subtitle-clamped">{data?.name}</h3>
        <ArrowRight />
      </div>
    </div>
  );
};

export default GenreCard;
