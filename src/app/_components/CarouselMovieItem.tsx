"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { CarouselItem } from "@/components/ui/carousel";
import { Play, Star } from "lucide-react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RateCard } from "./RateCard";

type CarouselMovieProps = {
  image?: string;
  when: string;
  title: string;
  rate: number;
  description: string;
  movieId: number;
};

type Trailer = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

type Response = {
  id: number;
  results: Trailer[];
};
export const CarouselMovieItem = (props: CarouselMovieProps) => {
  const [trailer, setTrailer] = useState<string>("");
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${props.movieId}/videos?language=en-US`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2ExNmNlNjA1MzAzNTk5MjIwNGYxMzI1ZDAwZGIwNiIsIm5iZiI6MTc2MzUyMTk5NS41MTcsInN1YiI6IjY5MWQzNWNiMTg0ZThlNTY0ZjJkNDE4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jl3UrTVIxBBbn3K1fvJ14YrplMU9UtuwKtkSW3lVa78",
            },
            next: { revalidate: 3600 },
          }
        );

        const data = (await res.json()) as Response;
        console.log(data.results);
        const offTrailer = data.results?.find(
          (el) => el.type === "Trailer"
        )?.key;

        const key = offTrailer || data.results[0]?.key || "";

        setTrailer(key);
        // setTrailers(data.results);
      } catch (error) {
        console.log("error");
      }
    };

    getData();
  }, []);

  return (
    <Dialog>
      <CarouselItem className={"pl-0"}>
        <div className="w-full relative border border-green-600 flex flex-col items-center ">
          <img
            className="w-full aspect-5/2 object-cover z-1"
            src={props.image}
          />
          <div className="flex flex-col w-[404px] h-fit gap-4 absolute bottom-[158] left-[140px] z-1 border border-red-600">
            <div>
              <p className="text-white text-base font-normal">{props.when} :</p>
              <h1 className="text-white text-4xl font-extrabold">
                {props.title}
              </h1>
              <RateCard
                className="text-white"
                rate={Number(props.rate.toFixed(1))}
              />
              {/* <div className="flex gap-2 text-white">
                <Star fill="#FDE047" className="border text-[#FDE047]" />
                {props.rate}
              </div> */}
            </div>
            <p className="w-[302px]  text-[#FAFAFA] text-xs font-normal">
              {props.description}
            </p>
            <DialogTrigger>
              <div className="w-[145px] flex items-center gap-2 px-4 py-2 bg-[#F4F4F5] text-[#18181B] text-sm font-medium hover:bg-gray-300 rounded-md  ">
                <Play className="w-4 h-4" /> <p>Watch Trailer</p>
              </div>
            </DialogTrigger>
          </div>
          <div className="absolute  bottom-9 z-1">{/* <Dots /> */}</div>
        </div>
      </CarouselItem>
      <DialogContent className="p-0 overflow-hidden min-w-2xl h-[400px]">
        <DialogTitle></DialogTitle>
        <ReactPlayer
          src={`https://www.youtube.com/watch?v=${trailer}`}
          // src={`https://www.youtube.com/watch?v=${trailers[0]?.key}`}
          style={{ width: "100%", height: "400px" }}
        />
      </DialogContent>
    </Dialog>
  );
};
