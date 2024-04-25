"use client";
import React, { InputHTMLAttributes, useState } from "react";
import * as S from "./styles";
import * as SVG from "@/assets/SVG";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchBar: React.FC<Props> = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <S.Container>
      <S.TextField
        placeholder="Procure por algum filme ou série"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <S.Pressable>
        <SVG.SearchIcon />
      </S.Pressable>
    </S.Container>
  );
};

export default SearchBar;
