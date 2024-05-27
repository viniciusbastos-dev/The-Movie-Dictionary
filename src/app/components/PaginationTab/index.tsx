"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as S from "./styles";
import { useSwiper, useSwiperSlide } from "swiper/react";

interface Props {
  actualPage: number;
  totalPages: number;
}

const PaginationTab: React.FC<Props> = ({ actualPage, totalPages }) => {
  const slider = useSwiper();

  const handleClick = (newIndex: number) => {
    slider.slideTo(newIndex);
  };

  return (
    <S.Container>
      {Array.from({ length: totalPages }, (_, i) => (
        <S.PageNumber
          key={i}
          $active={i === actualPage}
          onClick={() => handleClick(i)}
        >
          <S.Span>{i + 1}</S.Span>
        </S.PageNumber>
      ))}
    </S.Container>
  );
};

export default PaginationTab;
