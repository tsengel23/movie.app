"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
type trailer = {
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
  results: trailer[];
};

type Params = {
  movieId: string;
};
type VideoDetailProps = {
  movieId: string;
  image: string;
};

export const VideoDetail = (props: VideoDetailProps) => {
  // const [trailer, setTrailer] = useState<trailer[]>([]);
  const [trailer, setTrailer] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
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

      console.log(data);
      // setTrailer(data.results);
      setTrailer(data?.results[0]?.key);
    };
    getData();
  }, [props.movieId]);
  return (
    <div className="relative">
      <img
        src={props.image}
        className="w-[760px] h-[428px] absolute object-cover top-0 left-0 rounded-sm "
      />
      <Dialog>
        <div className="w-[760px] h-[428px] rounded-sm  border border-red-600  bg-cover object-fill relative">
          <div className="absolute flex gap-3  top-[364px] left-6 items-center border">
            <DialogTrigger>
              <div className="w-10 h-10  flex justify-center items-center rounded-full bg-white border">
                <Play className="w-4 h-4" />
              </div>
            </DialogTrigger>
            <p>
              Play trailer <span>2:45</span> {/* run_time bichne*/}
            </p>
          </div>
          <DialogContent className="p-0 overflow-hidden min-w-2xl h-[400px]">
            <DialogTitle></DialogTitle>
            <ReactPlayer
              src={`https://www.youtube.com/watch?v=${trailer}`}
              // src={`https://www.youtube.com/watch?v=${trailers[0]?.key}`}
              style={{ width: "100%", height: "400px" }}
            />
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};
