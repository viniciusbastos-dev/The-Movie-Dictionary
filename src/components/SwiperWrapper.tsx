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

  const initializeSwiper = () => {
    if (swiperRef.current) swiperRef.current.destroy();

    swiperRef.current = new Swiper(".swiper", {
      slidesPerGroup: 1,
      breakpoints: {
        480: {
          slidesPerGroup: 2,
        },
        1024: {
          slidesPerGroup: 2,
          pagination: {
            el: ".swiper-desktop",
            type: "bullets",
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          },
        },
        1280: {
          slidesPerGroup: 3,
          pagination: {
            el: ".swiper-desktop",
            type: "bullets",
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          },
        },
      },
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-mobile",
        type: "progressbar",
        renderProgressbar: function (className) {
          return '<span class="' + className + '"></span>';
        },
      },
      navigation: {
        nextEl: ".swiper-next-button",
        prevEl: ".swiper-prev-button",
      },
    });
  };

  useEffect(() => {
    initializeSwiper(); // Initial setup

    const handleResize = () => {
      initializeSwiper(); // Re-initialize on resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (swiperRef.current) swiperRef.current.destroy(); // Cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="swiper">
      <div className="swiper-wrapper">{children}</div>
    </div>
  );
};

export default SwiperWrapper;
