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
// const popular = [
//   {
//     image:
//       "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
//     rate: 6.9,
//     title: "The Shawshank Redemption",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg",
//     rate: 6.9,
//     title: "The Godfather",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/M/MV5BMDQ5MWU2YWUtNTQ4OC00Njk5LWI0NzctMjM4OGZiNmZmNGViXkEyXkFqcGc@._V1_.jpg",
//     rate: 6.9,
//     title: "The Dark Knight",
//   },
//   {
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
//     rate: 6.9,
//     title: "12 Angry Men",
//   },
//   {
//     image:
//       "https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg",
//     rate: 6.9,
//     title: "The Lord of the Rings: The Return of the King",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_U00_.jpg",
//     rate: 6.9,
//     title: "Interstellar",
//   },
//   {
//     image:
//       "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/se7en_2.png",
//     rate: 6.9,
//     title: "Seven",
//   },
//   {
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/It%27s_a_Wonderful_Life_%281946_poster%29.jpeg/960px-It%27s_a_Wonderful_Life_%281946_poster%29.jpeg",
//     rate: 6.9,
//     title: "It's a Wonderful Life",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/M/MV5BYzc0ODMyMzctZTA5Zi00MGZhLWE0NTItZjJhOTE3OWMxZjBlXkEyXkFqcGc@._V1_.jpg",
//     rate: 6.9,
//     title: "Seven Samurai",
//   },
//   {
//     image:
//       "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_FMjpg_U00_.jpg",
//     rate: 6.9,
//     title: "The Silence of the Lambs",
//   },
// ];

type PopularSectionProps = {};

export const PopularSection = (props: PopularSectionProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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
        <TitleCard title="popular" href={`/category/popular`} />
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
