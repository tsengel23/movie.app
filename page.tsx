"use client";

import { NavigationCard } from "@/app/_components/NavigationCard";
import { TitleCard } from "@/app/_components/TitleCard";
import { MovieCard } from "@/app/_components/MovieCard";
// import { PreviousNext } from "@/app/_components/PreviousNext";
import { Footer } from "@/app/_components/Footer";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PaginationMovie } from "@/app/_components/PaginationMovie";

//
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

type Params = {
  categoryName: string;
};

const label: Record<string, string> = {
  top_rated: "Top Rated",
  upcoming: "Upcoming",
  popular: "Popular",
  // more_like_this: "More like This",
};

export default function CategoryPage() {
  const { categoryName } = useParams<Params>();

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${categoryName}?language=en-US&page=1`,
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
    <div className="w-screen flex flex-col items-center border border-red-600 relative">
      <NavigationCard />

      {/*  */}

      <div className=" w-fit h-fit grid grid-cols-5 border border-red-500 gap-8 mb-[52px]">
        <div className="col-span-5">
          <TitleCard title={label[categoryName]} />
        </div>
        {movies?.map((item) => {
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
      <div className="w-7xl flex justify-end border">
        {/* <PaginationMovie /> */}
      </div>

      {/*  */}

      <Footer />
    </div>
  );
}

{
  /* <MovieSection title={categoryName} categoryName={categoryName} />; */
}
// absolute top-[85%] right-[15%]
