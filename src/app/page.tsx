import Hero from "./components/Hero";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Carousel from "./components/Carousel";

async function getData() {
  const res = await fetch(
    "https://the-movie-dictionary-api.vercel.app/api/trending/all/day",
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getMovieData() {
  const res = await fetch(
    "https://the-movie-dictionary-api.vercel.app/api/trending/movie/day",
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getSerieData() {
  const res = await fetch(
    "https://the-movie-dictionary-api.vercel.app/api/trending/tv/day",
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const movieData = await getMovieData();
  const serieData = await getSerieData();

  return (
    <>
      <Hero data={data} />
      <main>
        <section>
          <Carousel title="Filmes em alta" data={movieData} />
          <Carousel title="Séries em alta" data={serieData} />
        </section>
      </main>
    </>
  );
}
