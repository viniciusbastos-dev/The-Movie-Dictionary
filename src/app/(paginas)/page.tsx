import Image from "next/image";
import background from "@/assets/images/background.png";
import Carousel from "@/components/Carousel";
import { fetchMoviesByGenres, getGenres } from "@/lib/getData";
import { Genre } from "@/@types/types";
import GenreCard from "@/components/GenreCard";
import DeviceCard from "@/components/DeviceCard";
import { FAQData, devicesData } from "@/config/config";
import SectionContainer from "@/components/SectionContainer";
import SwiperNavigation from "@/components/SwiperNavigation";
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";

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
              sizes="100vw"
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

        <SectionContainer
          id="categorias"
          title="Explore nossa ampla variedade de categorias"
          subtitle="Seja procurando por uma comédia para te fazer rir, um
        drama para te fazer refletir, ou um documentário para aprender algo
        novo"
          rightComponent={<SwiperNavigation swiperName="genre" />}
        >
          <Carousel
            swiperName="genre"
            data={genres}
            renderCard={(genre) => (
              <GenreCard data={genre} movies={movieList} />
            )}
          />
        </SectionContainer>

        <SectionContainer
          title="Oferecemos uma experiência de streaming em diversos dispositivos."
          subtitle="Com o The Movie Dictionary, você pode desfrutar dos seus filmes e
              programas de TV favoritos a qualquer hora e em qualquer lugar.
              Nossa plataforma é compatível com uma ampla gama de dispositivos,
              garantindo que você nunca perca um momento de entretenimento."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-[30px] ">
            {devicesData.map((device, index) => (
              <DeviceCard key={index} data={device} />
            ))}
          </div>
        </SectionContainer>

        <SectionContainer
          title="Perguntas Frequentes"
          subtitle="Tem perguntas? Temos respostas! Confira nossa seção de FAQ para encontrar respostas às perguntas mais comuns sobre o The Movie Dictionary."
          rightComponent={
            <Button text="Faça uma pergunta" link href="/support" />
          }
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-0 ">
            <div>
              {FAQData.slice(0, 4).map((item, index) => (
                <Dropdown key={index} data={item} />
              ))}
            </div>
            <div>
              {FAQData.slice(4, 8).map((item, index) => (
                <Dropdown key={index} data={item} />
              ))}
            </div>
          </div>
        </SectionContainer>
      </main>
    </>
  );
}
