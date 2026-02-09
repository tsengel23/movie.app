"use client";

import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";

import { Cast } from "./_components/Cast";
import { VideoDetail } from "./_components/VideoDetail";
import { CastCrew } from "./_components/CastCrew";
import { MovieTrailer } from "./_components/MovieTrailer";
import { MoreLikeSection } from "./_components/MoreLikeSection";
// import { MoreLikeSection } from "@/app/_components/MoreLikeSection";

type Params = {
  movieId: string;
};

export default function Page() {
  const { movieId } = useParams<Params>();

  const [movie, setMovie] = useState<detailRes>();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `${process.env.TMDB_BASE_URL}/movie/${movieId}?language=en-US`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          },
          next: { revalidate: 3600 },
        },
      );
      const data = await res.json();
      // const data = (await res.json()) as detailRes;
      console.log(data);

      setMovie(data);
      // setTrailers(data.results);
    };

    getData();
  }, [movieId]);

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center">
        <Dialog>
          <div className="w-[1080px] h-fit flex flex-col gap-6">
            <div className="w-full h-fit flex justify-between ">
              <div className="flex flex-col justify-between">
                <h1 className="font-bold text-4xl text-[#09090B] dark:text-white">
                  {movie?.title}
                </h1>
                {/* title bichne*/}
                <p className="font-normal text-lg  text-[#09090B] dark:text-white">
                  <span>{movie?.release_date}</span> {/* release_date bichne*/}
                  <span>· PG ·</span>
                  <span> {movie?.runtime + " min "} </span>
                  {/* run_time bichne*/}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-xs font-medium text-[#09090B] dark:text-white">
                  Rating
                </p>
                <div className="flex gap-2">
                  <Star
                    fill="#FDE047"
                    className="w-7 h-7 text-[#FDE047] mt-2.5"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <p className="text-lg font-semibold">
                        {movie?.vote_average.toFixed(1)}
                      </p>
                      {/* vote_avarage bichne*/}
                      <span className="text=[#71717A] text-base font-normal dark:text-white">
                        / 10
                      </span>
                    </div>
                    <p className="font-normal text-xs text-[#71717A] dark:text-white">
                      {movie?.vote_count + "K"}
                    </p>
                    {/* vote_count bichne*/}
                  </div>
                </div>
              </div>
            </div>
            <MovieTrailer movieId={movieId} movie={movie} />
          </div>
          <div className="w-[1080px] flex flex-col gap-5 mt-8">
            <div className="flex gap-3 ">
              {movie?.genres.map((item, index) => {
                return (
                  <Badge
                    key={index}
                    className="bg-white text-black px-2 border border-[#E4E4E7] text-xs gap-2 "
                  >
                    {item.name}
                  </Badge>
                );
              })}
            </div>
            <p>{movie?.overview}</p>
            {/* overview bichne*/}
          </div>
        </Dialog>
        <CastCrew movieId={movieId} />
      </div>
      <MoreLikeSection />
    </>
  );
}
