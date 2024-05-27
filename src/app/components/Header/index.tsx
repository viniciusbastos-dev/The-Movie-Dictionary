"use client";
import React from "react";
import * as S from "./styles";
import Input from "../Input";
import { SearchIcon } from "@/app/ui/assets/SVG";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import hamburguerMenu from "@/app/ui/lottie/hamburguerMenu.json";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isToggled, setIsToggled] = React.useState(false);
  const menuButtonRef = React.useRef<LottieRefCurrentProps | null>(null);

  const handleMenu = () => {
    if (menuButtonRef.current) {
      menuButtonRef.current.setDirection(isToggled ? -1 : 1);
      menuButtonRef.current.play();
    }
    setIsToggled(!isToggled);
  };

  return (
    <S.Container>
      <S.LeftRow>
        <Image
          src="/tv.png"
          alt="Logo The Movie Dictionary"
          width={50}
          height={50}
          draggable={false}
        />
        <S.Title>The Movie Dictionary</S.Title>
      </S.LeftRow>

      <Input
        placeholder="Busque algum show..."
        width={525}
        endAdornment={<SearchIcon />}
      />

      <S.RightRow>
        <Link href="/login">Entrar</Link>
        <S.Pressable onClick={() => handleMenu()}>
          <Lottie
            lottieRef={menuButtonRef}
            animationData={hamburguerMenu}
            style={{ width: 20, height: 20 }}
            loop={false}
            autoplay={false}
          />
        </S.Pressable>
      </S.RightRow>
    </S.Container>
  );
};

export default Header;
