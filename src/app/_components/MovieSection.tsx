"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { MovieCard } from "./MovieCard";
import { TitleCard } from "./TitleCard";
import { useEffect, useState } from "react";
import { MovieCardSkeleton } from "./MovieCardSkeleton";

export type result = {
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
  results: result[];
  total_pages: number;
  total_results: number;
};

type MovieSectionProps = {
  categoryName: string;
  title: string;
};

export const MovieSection = (props: MovieSectionProps) => {
  const { categoryName, title } = props;
  const [movies, setMovies] = useState<result[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(
        `${process.env.TMDB_BASE_URL}/movie/${categoryName}?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          },
          next: { revalidate: 3600 }, // 1 цаг тутам шинэчлэнэ
        }
      );
      const data = (await res.json()) as Response;

      setMovies(data.results);
      setLoading(false);
    };
    getData();
  }, [categoryName]);

  if (loading) {
    return (
      // <div className=" ">
      //   <div className="flex justify-between mt-[52px] mx-20">
      //     <Skeleton className="w-[250px] h-8 border-2 border-red-500 rounded-full" />
      //     <Skeleton className="w-[165px] h-8 border-2 border-red-500 rounded-full" />
      //   </div>
      //   <div className="w-screen grid grid-cols-5 border gap-8 mt-[52px] mx-20 ">
      //     {new Array(10).fill(0).map((_, index) => (
      //       <MovieCardSkeleton key={index} />
      //     ))}
      //   </div>
      // </div>
      <div className=" w-screen px-20 h-fit grid grid-cols-5 gap-8 mt-[52px]">
        <div className="col-span-5">
          <div className="flex justify-between">
            <Skeleton className="w-[250px] h-8  rounded-full" />
            <Skeleton className="w-[165px] h-8  rounded-full" />
          </div>
        </div>

        {new Array(10).fill(0).map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className=" w-fit h-fit grid grid-cols-5  gap-8 mt-[52px] mx-20">
      <div className="col-span-5">
        <TitleCard title={title} href={`/category/${categoryName}`} />
      </div>
      {movies?.slice(0, 10).map((item) => {
        return (
          <MovieCard
            key={item.id}
            id={item.id}
            image={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
            rate={item.vote_average}
            title={item.title}
          />
        );
      })}
    </div>
  );
};
