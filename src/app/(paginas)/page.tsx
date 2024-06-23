import Image from "next/image";
import background from "@/assets/images/background.png";
import Carousel from "@/components/Carousel";
import { fetchMoviesByGenres, getGenres } from "@/lib/getData";
import { Genre } from "@/@types/types";
import GenreCard from "@/components/GenreCard";
import DeviceCard from "@/components/DeviceCard";
import { devicesData } from "@/config/config";

export default async function Home() {
  const genres: Genre[] = await getGenres();
  const movieList = await fetchMoviesByGenres(genres);

  return (
    <>
      <main>
        <section className="relative text-center pb-20 mb-36">
          <div className=" h-[70vh] relative after:bg-gradient-to-b after:w-full after:block after:h-[70%] after:absolute after:bottom-0 before:bg-gradient-to-t  before:w-full before:block before:h-[70%] before:absolute from-transparent to-black-8">
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
            <p className="text-csm text-gray-60">
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

        <section id="categorias" className="mx-[8%] mb-20 lg:mb-32 xl:mb-36">
          <Carousel
            title="Explore nossa ampla variedade de categorias"
            subtitle="Seja procurando por uma comédia para te fazer rir, um drama para te
            fazer refletir, ou um documentário para aprender algo novo"
            swiperName="genre"
            data={genres}
            renderCard={(genre) => (
              <GenreCard data={genre} movies={movieList} />
            )}
          />
        </section>
        <section id="dispositivos" className="mx-[8%]  mb-20 lg:mb-32 xl:mb-36">
          <div className="flex flex-col gap-3 section-mb-clamp">
            <h2 className="title-clamped font-bold text-clg">
              Oferecemos uma experiência de streaming em diversos dispositivos.
            </h2>
            <p className="small-subtitle-clamped text-gray-60 text-csm">
              Com o The Movie Dictionary, você pode desfrutar dos seus filmes e
              programas de TV favoritos a qualquer hora e em qualquer lugar.
              Nossa plataforma é compatível com uma ampla gama de dispositivos,
              garantindo que você nunca perca um momento de entretenimento.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-[30px] ">
            {devicesData.map((device, index) => (
              <DeviceCard key={index} data={device} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
