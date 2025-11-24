"use client";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Toggle } from "@/components/ui/toggle";
import { ChevronDown, Film, Moon, SearchIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { useEffect, useState } from "react";
import { GenreItem } from "./GenreItem";

export type Genre = {
  id: number;
  name: string;
};

type Response = {
  genres: Genre[];
};

export const NavigationCard = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2ExNmNlNjA1MzAzNTk5MjIwNGYxMzI1ZDAwZGIwNiIsIm5iZiI6MTc2MzUyMTk5NS41MTcsInN1YiI6IjY5MWQzNWNiMTg0ZThlNTY0ZjJkNDE4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jl3UrTVIxBBbn3K1fvJ14YrplMU9UtuwKtkSW3lVa78",
            accept: "application/json",
          },
        }
      );
      const data = (await res.json()) as Response;

      setGenres(data.genres);

      // const data = {genres: []}
      // data.genres
    };
    getData();
  }, []);

  return (
    <div className="w-full h-fit flex justify-between px-20 py-3 mb-6">
      <h1 className="flex gap-2 text-[#4338CA] italic font-bold text-base">
        <Film /> Movie Z
      </h1>
      <div className="flex gap-3">
        <Popover>
          <PopoverTrigger className="border border-[#E4E4E7] font-medium rounded-lg text-sm px-4 py-1.5 flex gap-2 items-center ">
            <ChevronDown /> GENRE
          </PopoverTrigger>
          <PopoverContent className="relative left-[31%] w-[500px]">
            <div className="flex flex-col">
              <div className="h-15 flex flex-col gap-1">
                <h1 className="font-semibold text-2xl">Genres</h1>
                <p className="text-base">See lists of movies by genre</p>
              </div>
              <hr className="mt-4 mb-4" />
              <div className="w-fit h-50 flex flex-wrap gap-4">
                {genres?.map((item) => {
                  return (
                    <GenreItem key={item.id} name={item.name} id={item.id} />
                  );
                })}
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <InputGroup className="w-95 h-9 border border-[#E4E4E7] rounded-lg text-sm font-normal py-2">
          <InputGroupInput placeholder=" Search..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* <Toggle
        aria-label="Toggle moon"
        size="sm"
        variant="outline"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-yellow-300 border w-9 h-9 flex items-center justify-center rounded-md overflow-hidden"
      >
        <Moon className="w-4 h-4 text-[#18181B]" />
      </Toggle> */}
      <ModeToggle />
    </div>
  );
};
