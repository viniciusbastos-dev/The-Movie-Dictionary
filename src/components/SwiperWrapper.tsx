"use client";
import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import SwiperCore, { Swiper } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

interface Props {
  children: React.ReactNode;
}

const SwiperWrapper: React.FC<Props> = ({ children }) => {
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (swiperRef.current) return; // Evita a inicialização múltipla

    swiperRef.current = new Swiper(".swiper", {
      slidesPerGroup: 1,
      breakpoints: {
        480: {
          slidesPerGroup: 2,
        },
        1280: {
          slidesPerGroup: 3,
        },
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination-genere",
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '"></span>';
        },
      },
      navigation: {
        nextEl: ".swiper-next-genere",
        prevEl: ".swiper-prev-genere",
      },
    });
  }, []);

  return (
    <div className="swiper">
      <div className="swiper-wrapper">{children}</div>
    </div>
  );
};

export default SwiperWrapper;
