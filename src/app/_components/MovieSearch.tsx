"use client";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Spinner } from "@/components/ui/spinner";
import { ChangeEvent, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { MovieSearchCard } from "./MovieSearchCard";
/************/
// type genre_id = {
//   id: number;
// };

// type result = {
//   adult: boolean;
//   backdrop_path: string;
//   genre_ids: genre_id[];
//   id: number;
//   original_language: string;
//   original_title: string;
//   overview: string;
//   popularity: number;
//   poster_path: string;
//   release_date: string;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
// };

// type response = {
//   page: number;
//   results: result[];
//   total_pages: number;
//   total_results: number;
// };
/**************/

export const MovieSearch = () => {
  const [movies, setMovies] = useState<result[]>([]);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const res = await fetch(
        // 'https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}',
        `${process.env.TMDB_BASE_URL}/search/movie?query=${query}&language=en-US&page=1`,
        {
          // method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          },
        }
      );
      const data = await res.json();

      setMovies(data.results);
      setLoading(false);
    };
    fetchMovies();
  }, [query]);
  return (
    <Popover>
      <PopoverTrigger>
        <Input
          value={query}
          className={cn("w-100", open && "opacity-0")}
          // <Search />
          placeholder="Search..."
          readOnly
        />
      </PopoverTrigger>
      <PopoverContent
        className="w-[577px] p-3 flex flex-col items-center"
        autoFocus={false}
      >
        <Input
          value={query}
          onChange={handleChange}
          className="w-100! absolute -top-10"
          placeholder="Search..."
        />
        <div className="w-full max-h-150 rounded-md overflow-x-hidden">
          {/* {loading && <p className="p-4 text-center">Loading...</p>} */}
          {loading && (
            <p className="p-4 text-center flex justify-center">
              <Spinner className="size-8 text-[#E4E4E7]" />
            </p>
          )}

          {!loading && movies.length === 0 && (
            <p className="p-4 text-center">No results found.</p>
          )}
          {!loading &&
            movies.map((movie) => (
              <MovieSearchCard
                key={movie.id}
                image={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                title={movie.title}
                rate={movie.vote_average}
                date={movie.release_date}
              />
            ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
