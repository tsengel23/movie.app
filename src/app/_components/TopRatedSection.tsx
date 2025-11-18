"use client";
import { MovieCard } from "./MovieCard";
import { TitleCard } from "./TitleCard";

const topRated = [
  {
    image: "https://wallpapercave.com/wp/wp2563744.jpg",
    rate: 6.9,
    title: "Titanic",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81lIu0aTZnL._AC_UF1000,1000_QL80_.jpg",
    rate: 6.9,
    title: "One Flew Over the Cuckoo's Nest",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_.jpg",
    rate: 6.9,
    title: "Goodfellas",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png",
    rate: 6.9,
    title: "Star Wars: Rogue One",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Some_Like_It_Hot_%281959_poster%29.png/960px-Some_Like_It_Hot_%281959_poster%29.png",
    rate: 6.9,
    title: "Some Like It Hot",
  },
  {
    image:
      "https://image.tmdb.org/t/p/original/hhSRt1KKfRT0yEhEtRW3qp31JFU.jpg",
    rate: 6.9,
    title: "The Apartment",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81-pdmu-6ML._AC_UF1000,1000_QL80_.jpg",
    rate: 6.9,
    title: "Jaws",
  },
  {
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24674_p_v13_bc.jpg",
    rate: 6.9,
    title: "Gladiator",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81UTs3sC5hL._AC_UF894,1000_QL80_.jpg",
    rate: 6.9,
    title: "Pulp Fiction",
  },
  {
    image: "https://cdn.wallpapersafari.com/60/72/Y2VgdX.jpg",
    rate: 6.9,
    title: "Jurassic Park",
  },
];

type TopRatedSectionProps = {};

export const TopRatedSection = (props: TopRatedSectionProps) => {
  return (
    <div className=" w-fit h-fit grid grid-cols-5 border border-red-500 gap-8 mb-[52px]">
      <div className="col-span-5">
        <TitleCard text="Top Rated" title="See more" />
      </div>
      {topRated.map((item, index) => {
        return (
          <MovieCard
            key={index}
            image={item.image}
            rate={item.rate}
            title={item.title}
          />
        );
      })}
    </div>
  );
};
