"use client";
import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import * as SVG from "@/app/ui/assets/SVG";
import { MediaInterface } from "@/@types/types";
import Image from "next/image";
import Button from "../Button";
import Header from "../Header";
import { Swiper, SwiperSlide } from "swiper/react";
import PaginationTab from "../PaginationTab";

interface Props {
  data?: MediaInterface[];
}

const Hero: React.FC<Props> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentMedia =
    data && data.length > currentIndex ? data[currentIndex] : null;

  const maxLength = 400;
  let overview = currentMedia?.overview ?? "";

  if (overview.length > maxLength) {
    overview = overview.substring(0, maxLength) + "...";
  }

  return (
    <S.Container>
      <Header />

      <S.Wrapper>
        {currentMedia && (
          <>
            <S.Content>
              <S.Title>{currentMedia.title}</S.Title>
              <S.Row>
                <Image
                  src="/IMDB-Logo.png"
                  alt="Logo do IMDB"
                  width={35}
                  height={17}
                />
                <S.Votes>
                  {(currentMedia.vote_average * 10).toFixed()}/100
                </S.Votes>
              </S.Row>
              <S.Description>{currentMedia.overview}</S.Description>
              <Button
                text="Assistir trailer"
                startAdornment={<SVG.PlayIcon />}
              />
            </S.Content>

            <S.Background>
              <Swiper
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                style={{
                  height: 600,
                  position: "relative",
                  zIndex: 5,
                }}
              >
                {data?.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Image
                      src={item.background}
                      alt={currentMedia?.title}
                      quality={70}
                      fill
                      sizes="100vw"
                      priority
                      draggable={false}
                      style={{
                        opacity: 0.6,
                      }}
                    />
                  </SwiperSlide>
                ))}
                <PaginationTab
                  actualPage={currentIndex}
                  totalPages={data?.length ?? 0}
                />
              </Swiper>
            </S.Background>
          </>
        )}
      </S.Wrapper>
    </S.Container>
  );
};

export default Hero;
