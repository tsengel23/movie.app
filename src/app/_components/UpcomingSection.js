"use client";
import { MovieCard } from "./MovieCard";
import { TitleCard } from "./TitleCard";

const upcoming = [
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BZDYxY2I1OGMtN2Y4MS00ZmU1LTgyNDAtODA0MzAyYjI0N2Y2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rate: "6.9/10",
    title: "Avatar: Fire and Ash",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BODA5Y2M0NjctNWQzMy00ODRhLWE0MzUtYmE1YTAzZjYyYmQyXkEyXkFqcGc@._V1_.jpg",
    rate: "6.9/10",
    title: "How To Train Your Dragon",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BNTdjZGUxMTItNjRkNS00N2VhLWE4MjMtMjVhODMwMGIxNjUwXkEyXkFqcGc@._V1_.jpg",
    rate: "6.9/10",
    title: "Predator: Badlands",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYzYzNDYxMTQtMTU4OS00MTdlLThhMTQtZjI4NGJmMTZmNmRiXkEyXkFqcGc@._V1_.jpg",
    rate: "6.9/10",
    title: "Frankenstein",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYjg1Mjc3MjQtMTZjNy00YWVlLWFhMWEtMWI3ZTgxYjJmNmRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rate: "6.9/10",
    title: "Zootopia 2",
  },
  {
    image:
      "https://m.media-amazon.com/images/I/816P2J1czEL._AC_UF1000,1000_QL80_.jpg",
    rate: "6.9/10",
    title: "Final Destination Bloodlines",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BOGQ3YWUzYjEtMTJiYy00ZjQ0LWI0YjktYjhiNGVhNGExYTM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rate: "6.9/10",
    title: "Demon Slayer: Kimetsu No Yaiba The Movie: Infinity Castle",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYzk0NjE4NzYtZjc5Ni00MTkxLTgyY2QtZjliOTA5N2U2YzM1XkEyXkFqcGc@._V1_.jpg",
    rate: "6.9/10",
    title: "Tron: Ares",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMGNiN2RlZTMtMTkyZC00YjkwLTgyY2QtMDg1ZDNhODQwNWM4XkEyXkFqcGc@._V1_.jpg",
    rate: "6.9/10",
    title: "Avengers: Doomsday",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYTNmODkxN2MtMzJlNC00ODc4LWFhNjctMTIzZTk5ODc0MjExXkEyXkFqcGc@._V1_.jpg",
    rate: "6.9/10",
    title: "The Twits",
  },
];

export const UpcomingSection = (props) => {
  return (
    <div className=" w-fit h-fit grid grid-cols-5 border border-red-500 gap-8 mb-[52px]">
      <div className="col-span-5">
        <TitleCard text="Upcoming" title="See more" />
      </div>
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
