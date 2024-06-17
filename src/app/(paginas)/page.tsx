import Image from "next/image";
import background from "@/assets/images/background.png";

export default function Home() {
  return (
    <>
      <main className="">
        <section className="relative text-center pb-20">
          <div className=" h-[70vh] w-screen relative  after:bg-gradient-to-b after:w-screen after:block after:h-[70%] after:absolute after:bottom-0 before:bg-gradient-to-t  before:w-screen before:block before:h-[70%] before:absolute from-dark-opaque to-dark">
            <Image
              src={background}
              alt="Imagem com vários filmes e séries em quadrados."
              layout="fill"
              priority
              className="object-cover object-center -z-10"
            />
          </div>
          <div className="absolute bottom-0 px-[12%]">
            <h1 className="title-header-clamped font-bold">
              The Best Streaming Experience
            </h1>
            <p className="description-header-clamped text-grey60">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
