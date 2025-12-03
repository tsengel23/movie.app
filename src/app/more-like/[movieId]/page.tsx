"use client";

import { NavigationCard } from "@/app/_components/NavigationCard";
import { TitleCard } from "@/app/_components/TitleCard";
import { MovieCard } from "@/app/_components/MovieCard";

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
  movieId: string;
};

// const label: Record<string, string> = {
//   top_rated: "Top Rated",
//   upcoming: "Upcoming",
//   popular: "Popular",
//   more_like_this: "More like this",
// };

export default function CategoryPage() {
  const { movieId } = useParams<Params>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=${currentPage}`,
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
      setTotalPage(data.total_pages);
      setLoading(false);
    };

    getData();
  }, [movieId, currentPage]);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="w-screen flex flex-col items-center border border-red-600 relative">
      <NavigationCard />

      {/*  */}

      <div className=" w-fit h-fit grid grid-cols-5 border border-red-500 gap-8 mb-[52px]">
        <div className="col-span-5">
          <TitleCard title={"More like this"} />
        </div>
        {movies?.slice(0, 15).map((item) => {
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
        <PaginationMovie
          currentPage={currentPage}
          totalPage={totalPage}
          nextPage={nextPage}
          prevPage={prevPage}
          className=" "
        />
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
