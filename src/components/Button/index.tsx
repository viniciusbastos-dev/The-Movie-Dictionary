import React, { ButtonHTMLAttributes } from "react";
import * as S from "./styles";
import { CircularProgress } from "@mui/material";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<Props> = ({ text, loading, disabled, ...rest }) => {
  return (
    <S.Container {...rest} disabled={disabled}>
      {!loading ? text : <CircularProgress size={25} color="inherit" />}
    </S.Container>
  );
};

Button.defaultProps = {
  text: "",
};

export default Button;
