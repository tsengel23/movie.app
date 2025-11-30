"use client";
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
// import {
//   InputGroup,
//   InputGroupAddon,
//   InputGroupButton,
//   InputGroupInput,
//   InputGroupText,
//   InputGroupTextarea,
// } from "@/components/ui/input-group";
// import { SearchIcon } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import {cn} from "@/lib/utils"
import { Search } from "lucide-react";
import { MovieSearchCard } from "./MovieSearchCard";
/************/
type genre_id = {
  id: number;
};

type result = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: genre_id[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type response = {
  page: number;
  results: result[];
  total_pages: number;
  total_results: number;
};
/**************/



export const MovieSearch = () => {
 const [movies, setMovies] = useState<Movie[]>([]);
  const [query setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);


   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };


  useEffect(()=> {
    const fetchMovies = async () => {
      setLoading(true);
      const res = await fetch(
        // 'https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}',
        `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`,
        {
          // method: "GET",
          headers: {
            accept: "application/json",
            Authorization: 
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2ExNmNlNjA1MzAzNTk5MjIwNGYxMzI1ZDAwZGIwNiIsIm5iZiI6MTc2MzUyMTk5NS41MTcsInN1YiI6IjY5MWQzNWNiMTg0ZThlNTY0ZjJkNDE4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jl3UrTVIxBBbn3K1fvJ14YrplMU9UtuwKtkSW3lVa78",
          },
          
        }
      );
      const data = await res.json();


      setMovies(data.results);
      setLoading(false);

    };
    fetchMovies()
  },[query]);
  return (
<Popover>
  <PopoverTrigger><Input 
  value={query}
  className={cn("w-100", open && "opacity-0")}
  // <Search />
  placeholder="Search..."
  readOnly
  />
  </PopoverTrigger>
  <PopoverContent className="w-120 p-3 flex flex-col items-center" 
  autoFocus={false}>
<Input
value={query}
onChange={handleChange}
className="w-100! absolute -top-10"
placeholder="Search..."
/>
<div className="w-full max-h-150 rounded-md overflow-scroll">
  {loading && <p className="p-4 text-center">Loading...</p>}

  {!loading && movies.length === 0 && (<p className="p-4 text-center">No results found.</p>)}

  {!loading && movies.map((movie) => (
    <MovieSearchCard 
    key={movie.id} 
    image={movie.poster_path} 
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
