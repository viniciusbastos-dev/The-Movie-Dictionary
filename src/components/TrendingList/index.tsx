import React from "react";
import * as S from "./styles";
import MediaCard from "../MediaCard";

interface Props {
  title: string;
  data: any[];
}

const TrendingList: React.FC<Props> = ({ title, data }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Carousel>
        {data.map((item) => (
          <MediaCard key={item.id} data={item} />
        ))}
      </S.Carousel>
    </S.Container>
  );
};

TrendingList.defaultProps = { title: "" };

export default TrendingList;
