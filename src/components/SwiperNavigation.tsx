import React from "react";
import * as SVG from "@/assets/SVG";

interface Props {
  swiperName: string;
}

const SwiperNavigation: React.FC<Props> = ({ swiperName }) => {
  return (
    <div className="hidden lg:flex border-1 border-black-12 bg-black-6 p-3 rounded-[10px] gap-3 min-h-[72px]">
      <div
        className={`swiper-prev-button ${swiperName} cursor-pointer bg-black-10 rounded-md border-1 border-black-12 p-[10px]`}
      >
        <SVG.ArrowLeft />
      </div>

      <div
        className={`swiper-pagination-desktop ${swiperName} flex items-center`}
      />

      <div
        className={`swiper-next-button ${swiperName} cursor-pointer bg-black-10 rounded-md border-1 border-black-12 p-[10px]`}
      >
        <SVG.ArrowRight />
      </div>
    </div>
  );
};

export default SwiperNavigation;
