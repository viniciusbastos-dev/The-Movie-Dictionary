import React from "react";
import Image from "next/image";
import error404 from "@/assets/images/erro_404.png";

interface Props {}
const NotFound: React.FC<Props> = () => {
  return (
    <main className="h-screen flex flex-col gap-4 text-center items-center justify-center">
      <span className=" text-8xl font-bold text-red-60">404</span>

      <h1 className="text-4xl">
        <span className="text-red-60">Ops!</span> Página não encontrada.
      </h1>
      <Image src={error404} alt="Cachorro de óculos e vestido como humano" />
    </main>
  );
};

export default NotFound;
