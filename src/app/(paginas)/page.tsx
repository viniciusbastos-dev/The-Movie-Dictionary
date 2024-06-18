import Image from "next/image";
import background from "@/assets/images/background.png";
import GenreCard from "@/components/GenreCard";
import * as SVG from "@/assets/SVG";
import SwiperWrapper from "@/components/SwiperWrapper";
import { Suspense } from "react";
import { fetchMoviesByGenres, getGenres } from "@/lib/getData";
import GenreCarouselSlider from "@/components/GenereCarouselSlider";

async function GenreCarousel() {
  const genres: { id: number; name: string }[] = await getGenres();
  const movies = await fetchMoviesByGenres(genres);
  return (
    <>
      {genres.slice(0, 10).map((genre) => (
        <GenreCarouselSlider key={genre.id}>
          <GenreCard data={genre} movies={movies} />
        </GenreCarouselSlider>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <>
      <main>
        <section className="relative text-center pb-20 mb-36">
          <div className=" h-[70vh] relative after:bg-gradient-to-b after:w-full after:block after:h-[70%] after:absolute after:bottom-0 before:bg-gradient-to-t  before:w-full before:block before:h-[70%] before:absolute from-black08-opaque to-black08">
            <Image
              src={background}
              alt="Imagem com vários filmes e séries em quadrados."
              fill
              priority
              className="object-cover object-center -z-10"
            />
          </div>
          <div className="absolute bottom-0 px-[12%]">
            <h1 className="title-header-clamped font-bold">
              Bem-vindo ao The Movie Dictionary
            </h1>
            <p className="subtitle-clamped text-grey60">
              The Movie Dictionary é o seu guia definitivo para informações
              sobre filmes e séries. Descubra tudo sobre seus filmes e séries
              favoritos, desde detalhes de produção até curiosidades dos
              bastidores. Explore uma vasta coleção de títulos, incluindo
              clássicos do cinema, lançamentos recentes, e séries populares.
              Encontre resenhas detalhadas, listas de elenco, e muito mais para
              expandir seu conhecimento cinematográfico.
            </p>
          </div>
        </section>

        <section className="px-[8%]">
          <div className="flex justify-between items-center gap-16">
            <div>
              <h2 className="font-bold category-title-clamped">
                Explore nossa ampla variedade de categorias
              </h2>
              <p className="text-grey60 subtitle-clamped">
                Seja procurando por uma comédia para te fazer rir, um drama para
                te fazer refletir, ou um documentário para aprender algo novo
              </p>
            </div>

            <div className="hidden md:flex border-[1px] border-black12 bg-black06 p-3 rounded-[10px] gap-3 min-h-[72px]">
              <div className="swiper-prev-genere bg-black10 rounded-md border-[1px] border-black12 p-[10px]">
                <SVG.ArrowLeft />
              </div>
              <div className="swiper-pagination-genere flex items-center"></div>
              <div className="swiper-next-genere bg-black10 rounded-md border-[1px] border-black12 p-[10px] ">
                <SVG.ArrowRight />
              </div>
            </div>
          </div>

          <div className="min-h-[300px] my-20">
            <SwiperWrapper>
              <Suspense fallback={<div>Carregando...</div>}>
                <GenreCarousel />
              </Suspense>
            </SwiperWrapper>
          </div>
        </section>
      </main>
    </>
  );
}
