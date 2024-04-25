import React from "react";
import * as S from "./styles";

import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <S.Container>
      <S.Title>
        The <br />
        Movie <br />
        Dictionary
      </S.Title>
      <SearchBar placeholder="Procure por algum filme ou série" />
    </S.Container>
  );
};

export default Header;
