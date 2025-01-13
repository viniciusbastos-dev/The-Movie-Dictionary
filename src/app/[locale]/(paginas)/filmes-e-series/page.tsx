/* eslint-disable react-hooks/rules-of-hooks */
import MovieBanner from "@/components/MovieBanner";
import SectionContainer from "@/components/SectionContainer";
import React, { Suspense } from "react";
import { getTrending } from "./actions";
import SwiperNavigation from "@/components/SwiperNavigation";
import GenreCarousel, {
  GenreCarouselSkeleton,
} from "@/components/GenreCarousel";
import ToggleListView from "@/components/ToggleListView";
import MovieCarousel from "@/components/MovieCarousel";
import { useTranslations } from "next-intl";

interface Props {
  searchParams: Promise<{ type: string }>;
}

export const revalidate = 86000;

const MoviesPage: React.FC<Props> = async ({ searchParams }) => {
  const { type } = await searchParams;
  const mediaData = await getTrending();

  return (
    <main className="min-h-screen px-4 md:px-16 pt-[148px]">
      <MovieBanner data={mediaData} />

      <div className="mt-24 relative border-0 md:border md:p-10 border-black-15 rounded-xl ">
        <ToggleListView />

        <TypeTag type="movies" />

        <Wrapper title="categories" swiperName="genre">
          <Suspense fallback={<GenreCarouselSkeleton />}>
            <GenreCarousel />
          </Suspense>
        </Wrapper>

        <Wrapper title="trends" swiperName="filmes">
          <Suspense fallback={<GenreCarouselSkeleton />}>
            <MovieCarousel />
          </Suspense>
        </Wrapper>
      </div>

      <div className="~xs/xl:~py-20/36"></div>
    </main>
  );
};

const Wrapper = ({
  title,
  swiperName,
  children,
}: {
  title: string;
  swiperName: string;
  children: React.ReactNode;
}) => {
  const t = useTranslations("MoviesPage");
  return (
    <SectionContainer
      title={t(title)}
      rightComponent={<SwiperNavigation swiperName={swiperName} />}
      className="mt-6 mx-0 lg:mb-0 xl:mb-0"
    >
      {children}
    </SectionContainer>
  );
};

const TypeTag = ({ type }: { type: string }) => {
  const t = useTranslations("MoviesPage");

  return (
    <span className="hidden absolute -top-5 z-[1] md:inline-flex place-items-center bg-red-45 px-5 h-10 rounded-md font-semibold">
      {t(type)}
    </span>
  );
};

export default MoviesPage;
