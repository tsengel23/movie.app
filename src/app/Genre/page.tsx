"use client";

import { GenreList } from "../_components/GenreList";
import { GenreMain } from "../_components/GenreMain";
import { MoviesByGenre } from "../_components/MoviesByGenre";

export default function Genre() {
  return (
    <div className="flex flex-col items-start mt-13 gap-8 mx-20">
      <h1 className="flex justify-start text-3xl font-semibold">
        Search filter
      </h1>
      <div className="flex  gap-8 ">
        <GenreList />
        <MoviesByGenre />
      </div>
    </div>
  );
}
