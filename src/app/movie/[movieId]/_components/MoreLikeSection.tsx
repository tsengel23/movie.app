"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
// import { TitleCard } from "./TitleCard";
// import { MovieCard } from "./MovieCard";
import { MovieCard } from "@/app/_components/MovieCard";
import { TitleCard } from "@/app/_components/TitleCard";
import { useParams } from "next/navigation";

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

// yaagaad params ashiglaad bgaag bagshaas asuuya. ymr tohioldold ashiglah ni zohimjtoi ve?

type Params = {
  movieId: string;
};

type MoreLikeSectionProps = {};
export const MoreLikeSection = (props: MoreLikeSectionProps) => {
  //
  const { movieId } = useParams<Params>();
  //
  const [movies, setMovies] = useState<result[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `${process.env.TMDB_BASE_URL}/movie/${movieId}/similar?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          },
          next: { revalidate: 3600 },
        }
      );
      const data = (await res.json()) as Response;
      setMovies(data.results);
    };
    getData();
  });
  return (
    <div className=" w-fit h-fit grid grid-cols-5  gap-8 mt-8 mx-20">
      <div className="col-span-5">
        <TitleCard title="More like this" href={`/more-like/${movieId}`} />
      </div>
      {movies?.slice(0, 5).map((item) => {
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
