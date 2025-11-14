"use client";
import { MovieCard } from "./MovieCard";

const upcoming = [
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
    rate: "6.9/10",
    title: "How To Train Your Dragon Live Action",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
    rate: "6.9/10",
    title: "How To Train Your Dragon Live Action",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
    rate: "6.9/10",
    title: "How To Train Your Dragon Live Action",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
    rate: "6.9/10",
    title: "How To Train Your Dragon Live Action",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
    rate: "6.9/10",
    title: "How To Train Your Dragon Live Action",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
    rate: "6.9/10",
    title: "How To Train Your Dragon Live Action",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
    rate: "6.9/10",
    title: "How To Train Your Dragon Live Action",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
    rate: "6.9/10",
    title: "How To Train Your Dragon Live Action",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
    rate: "6.9/10",
    title: "How To Train Your Dragon Live Action",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
    rate: "6.9/10",
    title: "How To Train Your Dragon Live Action",
  },
];

export const UpcomingSection = (props) => {
  return (
    <div className=" w-fit h-fit grid grid-cols-5 grid-rows-2 border border-red-500 gap-8">
      {upcoming.map((item, index) => {
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
