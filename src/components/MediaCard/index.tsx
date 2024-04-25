import React from "react";
import * as S from "./styles";
import { MediaInterface } from "@/@types/types";

interface Props {
  data: MediaInterface;
}

const MediaCard: React.FC<Props> = ({ data }) => {
  return (
    <S.Container>
      <S.Image alt={data.title} src={data.poster} />
    </S.Container>
  );
};

export default MediaCard;
