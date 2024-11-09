import React from "react";
import SwiperWrapper from "./SwiperWrapper";
import SliderWrapper from "./SliderWrapper";

interface Props {
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

const Carousel: React.FC<Props> = ({ data, renderCard, swiperName }) => {
  return (
    <>
      <SwiperWrapper swiperName={swiperName}>
        <CarouselData data={data} renderCard={renderCard} />
      </SwiperWrapper>
      <div className="lg:hidden relative mt-8 mx-auto w-20">
        <div className={`swiper-pagination-mobile ${swiperName}`} />
      </div>
    </>
  );
};

export default Carousel;
