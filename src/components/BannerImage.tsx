import React from "react";
import Image from "next/image";

interface Props {
  data: any;
}
const BannerImage: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-[calc(100vw-32px)] md:w-[calc(100vw-139px)] !h-[470px] lg:!h-[700px] border border-black-10 overflow-hidden rounded-xl text-center p-10 relative  flex flex-col items-center justify-end after:bg-gradient-to-t after:-z-[9] after:inset-0 after:w-full after:block after:h-[100%] after:absolute from-black-8 to-transparent">
      {data?.backdrop_path && (
        <Image
          src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
          alt={data?.title}
          fill
          className="-z-10 object-fit object-cover"
        />
      )}

      <h1 className="text-clg">{data?.title}</h1>
      <p className="hidden md:block text-gray-60">{data?.overview}</p>
    </div>
  );
};

export default BannerImage;
