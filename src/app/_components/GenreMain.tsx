"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { GenreItem } from "./GenreItem";
import { useState, useEffect } from "react";

export type Genre = {
  id: number;
  name: string;
};

type Response = {
  genres: Genre[];
};

export const GenreMain = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?language=en",
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
        setGenres(data.genres);
        // ingej bichij bas bolno !!!
        // const data = {genres: []}
        // data.genres
      } catch (error) {
        console.log("error");
      }
    };
    getData();
  }, []);
  return (
    <Popover>
      <PopoverTrigger className="border border-[#E4E4E7] font-medium rounded-lg text-sm px-4 py-1.5 flex gap-2 items-center ">
        <ChevronDown /> GENRE
      </PopoverTrigger>
      <PopoverContent className="relative left-[40%] w-[500px]">
        <div className="flex flex-col">
          <div className="h-15 flex flex-col gap-1">
            <h1 className="font-semibold text-2xl">Genres</h1>
            <p className="text-base">See lists of movies by genre</p>
          </div>
          <hr className="mt-4 mb-4" />
          <div className="w-fit h-50 flex flex-wrap gap-4">
            {genres?.map((item) => {
              return <GenreItem key={item.id} name={item.name} id={item.id} />;
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
