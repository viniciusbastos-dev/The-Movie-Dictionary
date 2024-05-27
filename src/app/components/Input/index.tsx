import React, { InputHTMLAttributes, ReactNode } from "react";
import * as S from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onClickAdornment?: () => void;
  width?: number;
}

const Input: React.FC<Props> = ({
  startAdornment,
  endAdornment,
  onClickAdornment,
  width,
  ...rest
}) => {
  return (
    <S.Container $width={width}>
      {startAdornment}
      <S.Field {...rest} />
      {onClickAdornment ? (
        <S.Pressable onClick={onClickAdornment}>{endAdornment}</S.Pressable>
      ) : (
        endAdornment
      )}
    </S.Container>
  );
};

export default Input;
