import Image from "next/image";
import background from "@/assets/images/background.png";
import DeviceCard from "@/components/DeviceCard";
import { FAQData, devicesData } from "@/config/config";
import SectionContainer from "@/components/SectionContainer";
import SwiperNavigation from "@/components/SwiperNavigation";
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import GenreCarousel, {
  GenreCarouselSkeleton,
} from "@/components/GenreCarousel";
import { Suspense } from "react";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

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
              quality={100}
              className="object-cover object-center -z-10"
              sizes="(max-width: 360px) 100vw, (max-width: 1920px) 100vw, 100vw"
            />
          </div>
          <div className="absolute bottom-0 px-[12%]">
            <h1 className="title-header-clamped font-bold">{t("title")}</h1>
            <p className="text-csm text-gray-60">{t("subtitle")}</p>
          </div>
        </section>

        <SectionContainer
          id="categorias"
          title={t("exploreTitle")}
          subtitle={t("exploreSubtitle")}
          rightComponent={<SwiperNavigation swiperName="genre" />}
        >
          <Suspense fallback={<GenreCarouselSkeleton />}>
            <GenreCarousel />
          </Suspense>
        </SectionContainer>

        <SectionContainer
          id="dispositivos"
          title={t("devicesTitle")}
          subtitle={t("devicesSubtitle")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xxl:grid-cols-3 gap-[30px] ">
            {devicesData?.map((device, index) => (
              <DeviceCard key={index} data={device} />
            ))}
          </div>
        </SectionContainer>

        <SectionContainer
          id="faq"
          title={t("faqTitle")}
          subtitle={t("faqSubtitle")}
          rightComponent={<Button text={t("faqLink")} link href="/support" />}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-0 ">
            <div>
              {FAQData?.slice(0, 4)?.map((item, index) => (
                <Dropdown key={index} data={item} />
              ))}
            </div>
            <div>
              {FAQData?.slice(4, 8)?.map((item, index) => (
                <Dropdown key={index} data={item} />
              ))}
            </div>
          </div>
        </SectionContainer>
      </main>
    </>
  );
}
