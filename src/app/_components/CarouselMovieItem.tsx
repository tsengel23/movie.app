"use client";

import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
// import { DialogTrigger } from "@/components/ui/dialog";
// import { Dialog } from "@radix-ui/react-dialog";
import { Play, Star } from "lucide-react";
import { useEffect, useState } from "react";
// import { Dots } from "../_components/Dots";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type CarouselMovieProps = {
  image?: string;
  when: string;
  title: string;
  rate: number;
  description: string;
};

type Trailers = {
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
  results: Trailers[];
};
export const CarouselMovieItem = (props: CarouselMovieProps) => {
  const [trailers, setTrailers] = useState<Trailers[]>([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US",
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
      setTrailers(data.results);
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
              <div className="flex gap-2 text-white">
                <Star fill="#FDE047" className="border text-[#FDE047]" />
                {props.rate}
              </div>
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
      <DialogContent className="w-[1000px] h-[500px] p-0 overflow-hidden">
        hi
      </DialogContent>
    </Dialog>
  );
};
