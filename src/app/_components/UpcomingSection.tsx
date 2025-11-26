"use client";
import { MovieCard } from "./MovieCard";
import { TitleCard } from "./TitleCard";
import { useEffect, useState } from "react";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type Response = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

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
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        {
          method: "GET",
          headers: {
            // Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
            Authorization:
              "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2ExNmNlNjA1MzAzNTk5MjIwNGYxMzI1ZDAwZGIwNiIsIm5iZiI6MTc2MzUyMTk5NS41MTcsInN1YiI6IjY5MWQzNWNiMTg0ZThlNTY0ZjJkNDE4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jl3UrTVIxBBbn3K1fvJ14YrplMU9UtuwKtkSW3lVa78",
            accept: "application/json",
          },
          next: { revalidate: 3600 }, // 1 цаг тутам шинэчлэнэ
        }
      );
      const data = (await res.json()) as Response;

      setMovies(data.results);
    };
    getData();
  });
  return (
    <div className=" w-fit h-fit grid grid-cols-5 border border-red-500 gap-8 mt-[52px]">
      <div className="col-span-5">
        <TitleCard title="Upcoming" href={`/category/upcoming`} />
      </div>
      {movies.slice(0, 10).map((item) => {
        return (
          <MovieCard
            key={item.id}
            image={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
            rate={item.vote_average}
            title={item.title}
          />
        );
      })}
    </div>
  );
};
