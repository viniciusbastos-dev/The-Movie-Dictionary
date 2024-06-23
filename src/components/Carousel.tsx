import React, { Suspense } from "react";
import * as SVG from "@/assets/SVG";
import SwiperWrapper from "./SwiperWrapper";
import SliderWrapper from "./SliderWrapper";

interface Props {
  title: string;
  subtitle?: string;
  data: any[];
  renderCard: (item: any) => React.ReactNode;
  swiperName: string;
}

const CarouselData = ({ data, renderCard }: any) => {
  return (
    <>
      {data?.map((item: any, index: any) => (
        <SliderWrapper key={index}>{renderCard(item)}</SliderWrapper>
      ))}
    </>
  );
};

const Carousel: React.FC<Props> = ({
  title,
  subtitle,
  data,
  renderCard,
  swiperName,
}) => {
  return (
    <div className="mt-20">
      <div className="flex justify-between items-center gap-16 mb-20">
        <div>
          <h2 className="font-bold text-clg">{title}</h2>

          {subtitle && <p className="text-gray-60 text-csm">{subtitle}</p>}
        </div>

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
      </div>

      <SwiperWrapper swiperName={swiperName}>
        <Suspense
          fallback={<div className="text-center text-2xl">Carregando...</div>}
        >
          <CarouselData data={data} renderCard={renderCard} />
        </Suspense>
      </SwiperWrapper>

      <div className="lg:hidden relative mt-8 mx-auto w-20">
        <div className={`swiper-pagination-mobile ${swiperName}`} />
      </div>
    </div>
  );
};

export default Carousel;
