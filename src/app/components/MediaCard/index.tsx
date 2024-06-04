"use client";

import React, { useState } from "react";
import * as S from "./styles";
import Image from "next/image";
import { MediaInterface } from "@/@types/types";
import { HeartIcon } from "@/app/ui/assets/SVG";

interface Props {
  data: MediaInterface;
}

const MediaCard: React.FC<Props> = ({ data }) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <S.Container>
      <S.FavoriteButton
        favorite={favorite}
        onClick={() => setFavorite(!favorite)}
      >
        <HeartIcon />
      </S.FavoriteButton>

      <Image
        src={data.poster}
        alt={`Poster de ${data.title}`}
        layout="responsive"
        width={250}
        height={370}
        style={{ maxHeight: 370 }}
        loading="lazy"
      />
      <S.Body>
        <S.ReleaseDate>{data.release_date}</S.ReleaseDate>
        <S.Title>{data.title}</S.Title>
        <S.Row>
          {data.vote_average > 0 && (
            <>
              <Image
                src="/IMDB-Logo.png"
                alt="Logo do IMDB"
                width={35}
                height={17}
                loading="lazy"
              />
              <S.Votes>{(data.vote_average * 10).toFixed(1)} / 100</S.Votes>
            </>
          )}
        </S.Row>
      </S.Body>
    </S.Container>
  );
};

export default MediaCard;
