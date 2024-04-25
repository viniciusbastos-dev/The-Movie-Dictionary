import Header from "@/components/Header";
import TrendingList from "@/components/TrendingList";

export default function Home() {
  const movieList = [
    {
      id: 560016,
      original_title: "Monkey Man",
      overview:
        "Em Fúria Primitiva, um jovem (Dev Patel) é liberado da prisão. Ao se deparar com um mundo gerido pela ganância corporativista e pela inversão de valores morais, o herói improvável e ex-detento é tomado por uma intensa raiva, tomando atitudes que podem comprometer sua vida novamente. O jovem se vê buscando vingança daqueles que tiraram tudo dele há muitos anos.",
      media_type: "movie",
      adult: false,
      title: "Fúria Primitiva",
      original_language: "en",
      genre_ids: [28, 53, 80],
      popularity: 250.655,
      release_date: "03/04/2024",
      video: false,
      vote_average: 7.319,
      vote_count: 155,
      background:
        "https://image.tmdb.org/t/p/original/9NSXdVHeSfSHUv49OzLispFcpz1.jpg",
      poster:
        "https://image.tmdb.org/t/p/original/ziXIsqVTBrKajZpVEGKiSvot3gu.jpg",
    },
    {
      id: 934632,
      original_title: "Rebel Moon — Part Two: The Scargiver",
      overview:
        "Conforme os rebeldes se preparam para a batalha contra as forças implacáveis do Mundo-Mãe, laços são forjados, heróis emergem e lendas nascem.",
      media_type: "movie",
      adult: false,
      title: "Rebel Moon - Parte 2: A Marcadora de Cicatrizes",
      original_language: "en",
      genre_ids: [878, 28, 18],
      popularity: 1575.948,
      release_date: "19/04/2024",
      video: false,
      vote_average: 6.3,
      vote_count: 399,
      background:
        "https://image.tmdb.org/t/p/original/FUnAVgaTs5xZWXcVzPJNxd9qGA.jpg",
      poster:
        "https://image.tmdb.org/t/p/original/kkP50MUDBqt4JqDEwxk32wUHePk.jpg",
    },
    {
      id: 693134,
      original_title: "Dune: Part Two",
      overview:
        "A jornada de Paul Atreides continua. Ele está determinado a buscar vingança contra aqueles que destruíram sua família e seu lar. Com a ajuda de Chani e dos Fremen, ele embarca em uma jornada espiritual, mística e marcial. Se torna Muad'Dib, o líder messiânico dos Fremen, enquanto luta para evitar um futuro sombrio que ele testemunhou em visões. No entanto, suas ações inadvertidamente desencadeiam uma Guerra Santa em seu nome, que se espalha pelo universo conhecido. Enquanto enfrenta escolhas difíceis entre o amor por Chani e o destino de seu povo, Paul precisa usar suas habilidades e conhecimentos para evitar o terrível futuro que previu.",
      media_type: "movie",
      adult: false,
      title: "Duna: Parte Dois",
      original_language: "en",
      genre_ids: [878, 12],
      popularity: 1465.801,
      release_date: "27/02/2024",
      video: false,
      vote_average: 8.277,
      vote_count: 3298,
      background:
        "https://image.tmdb.org/t/p/original/8uVKfOJUhmybNsVh089EqLHUYEG.jpg",
      poster:
        "https://image.tmdb.org/t/p/original/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg",
    },
  ];
  const serieList = [
    {
      id: 126308,
      original_name: "Shōgun",
      overview:
        "Ambientada no Japão de 1600, o Senhor Yoshii Toranaga está lutando pela sua vida à medida que seus inimigos no Conselho dos Regentes se unem contra ele, quando um navio europeu misterioso é encontrado encalhado em um vilarejo de pescadores próximo.",
      media_type: "tv",
      adult: false,
      original_language: "en",
      genre_ids: [18, 10768],
      popularity: 1612.296,
      vote_average: 8.66,
      vote_count: 535,
      origin_country: ["US"],
      title: "Xógum: A Gloriosa Saga do Japão",
      background:
        "https://image.tmdb.org/t/p/original/5zmiBoMzeeVdQ62no55JOJMY498.jpg",
      poster:
        "https://image.tmdb.org/t/p/original/gaOb9hyCDUcbZiTYcHy7mIFmNo.jpg",
      release_date: "27/02/2024",
    },
    {
      id: 106379,
      original_name: "Fallout",
      overview:
        "Baseada em um dos maiores jogos de video game de todos os tempos, Fallout é uma história que demonstra os abastados e os desprivilegiados em um mundo em que praticamente não sobrou mais nada. 200 anos após o apocalipse, os nobres residentes de abrigos de luxo são forçados a retornar ao universo incrivelmente complexo, alegremente estranho e altamente violento que os aguarda na superfície.",
      media_type: "tv",
      adult: false,
      original_language: "en",
      genre_ids: [10759, 10765, 9648],
      popularity: 1837.223,
      vote_average: 8.417,
      vote_count: 631,
      origin_country: ["US"],
      title: "Fallout",
      background:
        "https://image.tmdb.org/t/p/original/4d0tMAk49gqbVwgvtQjCriBwyb8.jpg",
      poster:
        "https://image.tmdb.org/t/p/original/2uY8aYmc86UL4N86D2spkWzYKOd.jpg",
      release_date: "10/04/2024",
    },
    {
      id: 241259,
      original_name: "Baby Reindeer",
      overview:
        "Um comediante é gentil com uma mulher vulnerável, despertando uma obsessão sufocante que pode acabar com as vidas dos dois.",
      media_type: "tv",
      adult: false,
      original_language: "en",
      genre_ids: [18],
      popularity: 829.899,
      vote_average: 8.2,
      vote_count: 80,
      origin_country: ["GB"],
      title: "Bebê Rena",
      background:
        "https://image.tmdb.org/t/p/original/tTGhI7lqd4frPS6XzR0d5gcXTMc.jpg",
      poster:
        "https://image.tmdb.org/t/p/original/fJQhUBShLBPSKNzcGg1tf0kHMyo.jpg",
      release_date: "11/04/2024",
    },
  ];

  return (
    <>
      <Header />
      <TrendingList title="Filmes Populares" data={movieList} />
      <TrendingList title="Séries Populares" data={serieList} />
    </>
  );
}
