"use client";
import { MovieCard } from "./MovieCard";

const topRated = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/az/d/d1/Titanik_%28film%2C_1997%29.jpg",
    rate: "6.9/10",
    title: "Titanic",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81lIu0aTZnL._AC_UF1000,1000_QL80_.jpg",
    rate: "6.9/10",
    title: "One Flew Over the Cuckoo's Nest",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_.jpg",
    rate: "6.9/10",
    title: "Goodfellas",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png",
    rate: "6.9/10",
    title: "Star Wars: Rogue One",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Some_Like_It_Hot_%281959_poster%29.png/960px-Some_Like_It_Hot_%281959_poster%29.png",
    rate: "6.9/10",
    title: "Some Like It Hot",
  },
  {
    image:
      "https://play-lh.googleusercontent.com/xQEu8I9KM3xHdRqHoOFM6Jdo8Rhr6Xd5zmMDt9-CYsp-AwPvhZ1F5VTzeyNpw5_zbAbi9biVBi77ero86cWl",
    rate: "6.9/10",
    title: "The Apartment",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81-pdmu-6ML._AC_UF1000,1000_QL80_.jpg",
    rate: "6.9/10",
    title: "Jaws",
  },
  {
    image:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24674_p_v13_bc.jpg",
    rate: "6.9/10",
    title: "Gladiator",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81UTs3sC5hL._AC_UF894,1000_QL80_.jpg",
    rate: "6.9/10",
    title: "Pulp Fiction",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81AGqBcpYOL._AC_UF1000,1000_QL80_.jpg",
    rate: "6.9/10",
    title: "Jurassic Park",
  },
];

export const TopRatedSection = (props) => {
  return (
    <div className=" w-fit h-fit grid grid-cols-5 grid-rows-2 border border-red-500 gap-8">
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
