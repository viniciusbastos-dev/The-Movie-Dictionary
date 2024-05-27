import Hero from "./components/Hero";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

async function getData() {
  const res = await fetch(
    "https://the-movie-dictionary-api.vercel.app/api/trending/all/day"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <Hero data={data} />
    </main>
  );
}
