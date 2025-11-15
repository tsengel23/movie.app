"use client";

import { MovieCard } from "./MovieCard";
const popular = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    rate: "6.9/10",
    title: "The Shawshank Redemption",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg",
    rate: "6.9/10",
    title: "The Godfather",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMDQ5MWU2YWUtNTQ4OC00Njk5LWI0NzctMjM4OGZiNmZmNGViXkEyXkFqcGc@._V1_.jpg",
    rate: "6.9/10",
    title: "The Dark Knight",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
    rate: "6.9/10",
    title: "12 Angry Men",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg",
    rate: "6.9/10",
    title: "The Lord of the Rings: The Return of the King",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rate: "6.9/10",
    title: "Interstellar",
  },
  {
    image:
      "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/se7en_2.png",
    rate: "6.9/10",
    title: "Seven",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/It%27s_a_Wonderful_Life_%281946_poster%29.jpeg/960px-It%27s_a_Wonderful_Life_%281946_poster%29.jpeg",
    rate: "6.9/10",
    title: "It's a Wonderful Life",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYzc0ODMyMzctZTA5Zi00MGZhLWE0NTItZjJhOTE3OWMxZjBlXkEyXkFqcGc@._V1_.jpg",
    rate: "6.9/10",
    title: "Seven Samurai",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rate: "6.9/10",
    title: "The Silence of the Lambs",
  },
];

export const PopularSection = () => {
  return (
    <div className=" w-fit h-fit grid grid-cols-5 grid-rows-2 border border-red-500 gap-8">
      {popular.map((item, index) => {
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
