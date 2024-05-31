"use client";

import React from "react";
import * as S from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { MediaInterface } from "@/@types/types";
import MediaCard from "../MediaCard";
import Link from "next/link";

interface Props {
  title: string;
  data: MediaInterface[];
  href: string;
}

const Carousel: React.FC<Props> = ({ title, data, href }) => {
  return (
    <S.Container>
      <S.Row>
        <S.Title>{title}</S.Title>
        <Link href={href}>Ver mais</Link>
      </S.Row>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        breakpoints={{
          640: {
            spaceBetween: 40,
          },
        }}
        centeredSlides
        centeredSlidesBounds
        className="media-swiper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={i} className="media-slide">
            <MediaCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
};

export default Carousel;
