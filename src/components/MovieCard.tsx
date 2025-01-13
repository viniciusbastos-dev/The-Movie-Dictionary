import React from "react";
import Image from "next/image";
import { Eye, Star } from "@phosphor-icons/react/dist/ssr";
import { formatNumber } from "@/lib/helpers";

interface Props {
  data: any;
}
const MovieCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-black-10 ~xs/lg:~p-3/5 border border-black-15 rounded-[10px] hover:scale-95 transition-all duration-300 inline-flex items-center flex-col">
      <div className="relative ~xs/lg:~h-48/72 ~xs/lg:~w-36/60 rounded-xl overflow-hidden mb-3">
        <Image
          src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
          alt={data?.title}
          fill
        />
      </div>
      <div className="w-full flex justify-between">
        <span className="inline-flex place-items-center gap-1 p-2 bg-black-8 border border-black-15 text-gray-60 rounded-3xl font-medium text-sm [&_svg]:shrink-0">
          <Star size={20} weight="fill" className="text-yellow-400" />{" "}
          {data.vote_average}
        </span>
        <span className="inline-flex place-items-center gap-1 p-2 bg-black-8 border border-black-15 text-gray-60 rounded-3xl font-medium text-sm [&_svg]:shrink-0">
          <Eye size={20} weight="bold" />
          {formatNumber(data.popularity)}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
