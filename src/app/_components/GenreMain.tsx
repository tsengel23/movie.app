"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, ChevronRight } from "lucide-react";
import { GenreItem } from "./GenreItem";
import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";

// export type genre = {
//   id: number;
//   name: string;
// };

// type genreRes = {
//   genres: genre[];
// };

export const GenreMain = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const genreIds = searchParams.get("genreIds")?.split(",") || [];
  console.log(genreIds);
  const [genres, setGenres] = useState<genre[]>([]);

  const handleClickGenre = (genreId: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const updatedGenreIds = genreIds?.includes(genreId)
      ? genreIds.filter((id) => id !== genreId)
      : [...genreIds, genreId];

    if (updatedGenreIds.length > 0) {
      params.set("genreIds", updatedGenreIds.join(","));
      router.push("/Genre?" + params);
    } else {
      router.push("/Genre?");
    }
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `${process.env.TMDB_BASE_URL}/genre/movie/list?language=en`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
            },
            next: { revalidate: 3600 },
          }
        );
        const data = (await res.json()) as genreRes;
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
              return (
                <Badge
                  key={item.id}
                  className="w-fit h-5 flex items-center gap-2 cursor-pointer hover:bg-black hover:text-white "
                  variant={
                    genreIds.includes(item.id.toString())
                      ? "default"
                      : "outline"
                  }
                  onClick={() => handleClickGenre(item.id.toString())}
                >
                  {item.name}
                  <ChevronRight strokeWidth={1} />
                </Badge>
              );
              // return <GenreItem key={item.id} name={item.name} id={item.id} />;
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
