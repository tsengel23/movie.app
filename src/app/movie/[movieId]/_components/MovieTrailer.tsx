"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Fullscreen, Play, X } from "lucide-react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
// import { result } from "@/app/category/[categoryName]/page";

// type detailRes = {
//   adult: boolean;
//   backdrop_path: string;
//   belongs_to_collection: string;
//   budget: number;
//   genres: genre[];
//   homepage: string;
//   id: number;
//   imdb_id: string;
//   original_language: string;
//   original_title: string;
//   overview: string;
//   popularity: number;
//   poster_path: string;
//   production_companies: company[];
//   production_countries: country[];
//   release_date: string;
//   revenue: number;
//   runtime: number;
//   spoken_languages: language[];
//   status: string;
//   tagline: string;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
// };
type MovieTrailerProps = {
  // movie?: movie;
  movieId: string;
  // image: string;
  // time: number;
  movie?: detailRes;
};
export const MovieTrailer = ({ movieId, movie }: MovieTrailerProps) => {
  const videoUrl = `${process.env.TMDB_BASE_URL}/movie/${movieId}/videos?language=en-US&page=1`;
  const [video, setVideo] = useState<string>("");
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(videoUrl, {
        method: "GET",
        headers: {
          accept: "application.json",
          Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
        },
        next: { revalidate: 3600 },
      });
      const data = (await res.json()) as videoRes;
      setVideo(data?.results[0]?.key);
    };
    getData();
  }, []);
  return (
    <div className="flex gap-8 w-full max-w-270 h-107 relative">
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
        className="h-full w-[290px] rounded-sm"
      />

      <Dialog>
        <div className="w-[760px] h-[428px] rounded-sm  border border-red-600  bg-cover object-fill relative">
          <div className="absolute flex gap-3  top-[364px] left-6 items-center border-4 border-green-600">
            <DialogTrigger>
              <div className="w-10 h-10  flex justify-center items-center rounded-full bg-white border">
                <Play className="w-4 h-4" />
              </div>
            </DialogTrigger>
            <p>
              Play trailer <span>{movie?.runtime}</span>
            </p>
          </div>
          <DialogContent className="p-0 overflow-hidden min-w-2xl h-[400px]">
            <DialogTitle className="hidden">Trailer</DialogTitle>
            <ReactPlayer
              // className="w-[1200px] h-[800px]"

              src={`https://www.youtube.com/watch?v=${video}`}
              style={{
                width: "250",
                height: "100%",
              }}
              controls={true}
            />
            {/* <DialogClose asChild>
              <button className="absolute -top-2 text-white -right-2 rounded px-2 py-1">
                <X className="w-4 h-4" />
              </button>
            </DialogClose> */}
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};
