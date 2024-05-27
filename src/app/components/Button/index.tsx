import React, { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}
const Button: React.FC<Props> = ({
  text,
  startAdornment,
  endAdornment,
  ...rest
}) => {
  return (
    <S.Container {...rest}>
      {startAdornment}
      {text}
      {endAdornment}
    </S.Container>
  );
};

export default Button;
