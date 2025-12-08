"use client";
import { MovieCard } from "./MovieCard";
import { TitleCard } from "./TitleCard";
import { useEffect, useState } from "react";

// const upcoming = [
//   {
//     image:
//       "https://m.media-amazon.com/images/M/MV5BZDYxY2I1OGMtN2Y4MS00ZmU1LTgyNDAtODA0MzAyYjI0N2Y2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
//     rate: 6.9,
//     title: "Avatar: Fire and Ash",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/M/MV5BODA5Y2M0NjctNWQzMy00ODRhLWE0MzUtYmE1YTAzZjYyYmQyXkEyXkFqcGc@._V1_.jpg",
//     rate: 6.9,
//     title: "How To Train Your Dragon",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/M/MV5BNTdjZGUxMTItNjRkNS00N2VhLWE4MjMtMjVhODMwMGIxNjUwXkEyXkFqcGc@._V1_.jpg",
//     rate: 6.9,
//     title: "Predator: Badlands",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/M/MV5BYzYzNDYxMTQtMTU4OS00MTdlLThhMTQtZjI4NGJmMTZmNmRiXkEyXkFqcGc@._V1_.jpg",
//     rate: 6.9,
//     title: "Frankenstein",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/M/MV5BYjg1Mjc3MjQtMTZjNy00YWVlLWFhMWEtMWI3ZTgxYjJmNmRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
//     rate: 6.9,
//     title: "Zootopia 2",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/M/MV5BMzc3OWFhZWItMTE2Yy00N2NmLTg1YTktNGVlNDY0ODQ5YjNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
//     rate: 6.9,
//     title: "Final Destination Bloodlines",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/M/MV5BOGQ3YWUzYjEtMTJiYy00ZjQ0LWI0YjktYjhiNGVhNGExYTM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
//     rate: 6.9,
//     title: "Demon Slayer: Kimetsu No Yaiba The Movie: Infinity Castle",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/M/MV5BYzk0NjE4NzYtZjc5Ni00MTkxLTgyY2QtZjliOTA5N2U2YzM1XkEyXkFqcGc@._V1_.jpg",
//     rate: 6.9,
//     title: "Tron: Ares",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/M/MV5BMGNiN2RlZTMtMTkyZC00YjkwLTgyY2QtMDg1ZDNhODQwNWM4XkEyXkFqcGc@._V1_.jpg",
//     rate: 6.9,
//     title: "Avengers: Doomsday",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/M/MV5BYTNmODkxN2MtMzJlNC00ODc4LWFhNjctMTIzZTk5ODc0MjExXkEyXkFqcGc@._V1_.jpg",
//     rate: 6.9,
//     title: "The Twits",
//   },
// ];

type UpcomingSectionProps = {};
export const UpcomingSection = (props: UpcomingSectionProps) => {
  const [movies, setMovies] = useState<result[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `${process.env.TMDB_BASE_URL}/movie/upcoming?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          },
          next: { revalidate: 3600 }, // 1 цаг тутам шинэчлэнэ
        }
      );
      const data = (await res.json()) as movieRes;

      setMovies(data.results);
    };
    getData();
  });
  return (
    <div className=" w-fit h-fit grid grid-cols-5  gap-8 mt-[52px] mx-20">
      <div className="col-span-5">
        <TitleCard title="Upcoming" href={`/category/upcoming`} />
      </div>
      {movies?.slice(0, 10).map((item) => {
        return (
          <MovieCard
            key={item.id}
            image={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
            rate={item.vote_average}
            title={item.title}
            id={item.id}
          />
        );
      })}
    </div>
  );
};
