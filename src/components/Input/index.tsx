import React, { InputHTMLAttributes } from "react";
import * as S from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<Props> = ({ ...rest }) => {
  return (
    <S.Container>
      <S.TextField {...rest} />
    </S.Container>
  );
};

export default Input;
