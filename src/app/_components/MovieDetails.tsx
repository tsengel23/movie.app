"use client";

import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import { NavigationCard } from "./NavigationCard";
import { Footer } from "./Footer";
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
/*******************/
type genre = {
  id: number;
  name: string;
};

type company = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type country = {
  iso_3166_1: string;
  name: string;
};

type language = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
type detailRes = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: company[];
  production_countries: country[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

/*********/
type castObj = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};
type crewObj = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};

type creditRes = {
  id: number;
  cast: castObj[];
  crew: crewObj[];
};
/**********/
type vidObj = {
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

type videoRes = {
  id: number;
  results: vidObj[];
};
/************/

export const MovieDetails = () => {
  const [trailers, setTrailers] = useState<vidObj[]>([]);
  const [genre, setGenre] = useState<genre[]>([]);
  const [image, setImage] = useState<poster_path>("string");

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
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
      setTrailers(data.results);
    };

    getData();
  }, []);
  return (
    <Dialog>
      <div className="w-full h-screen flex flex-col items-center border-4 border-red-600">
        <NavigationCard />
        <div className="w-[1080px] h-fit flex flex-col gap-6 border border-green-500">
          <div className="w-full h-fit flex justify-between border">
            <div className="flex flex-col justify-between border">
              <h1 className="font-bold text-4xl text-[#09090B]">Wicked</h1>
              {/* title bichne*/}
              <p className="font-normal text-lg  text-[#09090B]">
                <span>2024.11.26</span> {/* release_date bichne*/}
                <span>· PG ·</span>
                <span>2h 40m</span>
                {/* run_time bichne*/}
              </p>
            </div>
            <div className="flex flex-col border ">
              <p className="text-xs font-medium text-[#09090B]">Rating</p>
              <div className="flex gap-2">
                <Star
                  fill="#FDE047"
                  className="w-7 h-7 text-[#FDE047] mt-2.5"
                />
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <p className="text-lg font-semibold"> 6.9 </p>{" "}
                    {/* vote_avarage bichne*/}
                    <span className="text=[#71717A] text-base font-normal">
                      / 10
                    </span>
                  </div>
                  <p className="font-normal text-xs text-[#71717A]">37k</p>{" "}
                  {/* popularity bichne*/}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1080px] h-[428px] flex gap-8 border">
            <div className="w-[290px] rounded-sm h-full border bg-start bg-cover object-fill">
              <img
                src="https://wallpapercave.com/wp/wp2563744.jpg"
                className="w-[290px] h-[428px] object-cover"
              />
            </div>
            <div className="w-[760px] rounded-sm h-full border bg-start bg-cover object-fill relative">
              <img
                src="https://wallpapercave.com/wp/wp2563744.jpg"
                className="w-[760px] h-[428px] object-cover"
              />
              <div className="absolute flex gap-3  top-[364px] left-6 items-center">
                <DialogTrigger>
                  <div className="w-10 h-10  flex justify-center items-center rounded-full bg-white border">
                    <Play className="w-4 h-4" />
                  </div>
                </DialogTrigger>
                <p>
                  Play trailer <span>2:45</span> {/* run_time bichne*/}
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-5 mt-8">
            <div className="flex gap-3">
              <Badge variant="outline" className=" ">
                item
              </Badge>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed do eiusmod
            </p>
            <div className="flex flex-col gap-5 ">
              <div className="flex gap-12 mt- pb-3  border-b border-b-gray-300">
                <h3 className="text-base font-bold text-[#09090B]">Director</h3>
                <p className="text-base font-normal text-[#09090B]">
                  Jon M. Chu
                </p>
              </div>
              <div className="flex gap-12 pb-3  border-b border-b-gray-300">
                <h3 className="text-base font-bold text-[#09090B]">Writers</h3>
                <p className="text-base font-normal text-[#09090B]">
                  Jon M. Chu
                </p>
              </div>
              <div className="flex gap-12 pb-3  border-b border-b-gray-300">
                <h3 className="text-base font-bold text-[#09090B]">Stars</h3>
                <p className="text-base font-normal text-[#09090B]">
                  Jon M. Chu
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Dialog>
  );
};
