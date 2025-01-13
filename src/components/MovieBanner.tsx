"use client";
import React from "react";
import BannerImage from "./BannerImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface Props {
  data: any;
}

const MovieBanner: React.FC<Props> = ({ data }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={0}
      loop
      autoplay
      className="mt-10"
    >
      {data?.map(
        (item: any) =>
          item?.backdrop_path && (
            <SwiperSlide
              key={item?.id}
              className="!w-screen swiper-remove-margin override-margin"
            >
              <BannerImage data={item} />
            </SwiperSlide>
          )
      )}
    </Swiper>
  );
};

export default MovieBanner;
