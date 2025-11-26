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
// const topRated = [
//   {
//     image: "https://wallpapercave.com/wp/wp2563744.jpg",
//     rate: 6.9,
//     title: "Titanic",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/I/81lIu0aTZnL._AC_UF1000,1000_QL80_.jpg",
//     rate: 6.9,
//     title: "One Flew Over the Cuckoo's Nest",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/M/MV5BN2E5NzI2ZGMtY2VjNi00YTRjLWI1MDUtZGY5OWU1MWJjZjRjXkEyXkFqcGc@._V1_.jpg",
//     rate: 6.9,
//     title: "Goodfellas",
//   },
//   {
//     image:
//       "https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png",
//     rate: 6.9,
//     title: "Star Wars: Rogue One",
//   },
//   {
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Some_Like_It_Hot_%281959_poster%29.png/960px-Some_Like_It_Hot_%281959_poster%29.png",
//     rate: 6.9,
//     title: "Some Like It Hot",
//   },
//   {
//     image:
//       "https://image.tmdb.org/t/p/original/hhSRt1KKfRT0yEhEtRW3qp31JFU.jpg",
//     rate: 6.9,
//     title: "The Apartment",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/I/81-pdmu-6ML._AC_UF1000,1000_QL80_.jpg",
//     rate: 6.9,
//     title: "Jaws",
//   },
//   {
//     image:
//       "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24674_p_v13_bc.jpg",
//     rate: 6.9,
//     title: "Gladiator",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/I/81UTs3sC5hL._AC_UF894,1000_QL80_.jpg",
//     rate: 6.9,
//     title: "Pulp Fiction",
//   },
//   {
//     image: "https://cdn.wallpapersafari.com/60/72/Y2VgdX.jpg",
//     rate: 6.9,
//     title: "Jurassic Park",
//   },
// ];

type TopRatedSectionProps = {};

export const TopRatedSection = (props: TopRatedSectionProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
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
        <TitleCard title="Top Rated" href={`/category/topRated`} />
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
