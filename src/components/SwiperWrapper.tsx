/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef } from "react";
import SwiperCore from "swiper";
import { Swiper } from "swiper";
import { Navigation, Pagination } from "swiper/modules";

SwiperCore.use([Navigation, Pagination]);

interface Props {
  children: React.ReactNode;
  swiperName: string;
}

const SwiperWrapper: React.FC<Props> = ({ swiperName, children }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<Swiper | null>(null);

  const initializeSwiper = () => {
    if (swiperRef.current) {
      swiperRef.current.destroy(true, true);
    }

    if (containerRef.current) {
      swiperRef.current = new Swiper(containerRef.current, {
        slidesPerGroup: 1,
        breakpoints: {
          480: {
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerGroup: 2,
            pagination: {
              el: `.swiper-pagination-desktop.${swiperName}`,
              type: "bullets",
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
              },
            },
          },
        },
        slidesPerView: "auto",
        pagination: {
          el: `.swiper-pagination-mobile.${swiperName}`,
          type: "progressbar",
          renderProgressbar: function (className) {
            return '<span class="' + className + '"></span>';
          },
        },
        navigation: {
          nextEl: `.swiper-next-button.${swiperName}`,
          prevEl: `.swiper-prev-button.${swiperName}`,
        },
      });
    }
  };

  const handleResize = (event: Event) => {
    const e = event.target as Window;
    if (swiperRef.current) {
      if (e.innerWidth <= 1024) {
        if (swiperRef.current.pagination.bullets.length > 0) {
          initializeSwiper();
        }
      } else {
        if (swiperRef.current.pagination.bullets.length === 0) {
          initializeSwiper();
        }
      }
    }
  };

  useEffect(() => {
    initializeSwiper();

    window.addEventListener("resize", handleResize);

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="swiper">
      <div className="swiper-wrapper">{children}</div>
    </div>
  );
};

export default SwiperWrapper;
