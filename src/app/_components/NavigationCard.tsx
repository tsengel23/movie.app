"use client";

import { Film } from "lucide-react";

import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { GenreMain } from "./GenreMain";
import { MovieSearch } from "./MovieSearch";

export const NavigationCard = () => {
  // fixed top-0 right-0 left-0 z-50

  return (
    <div className="w-full h-fit flex justify-between px-20 py-3 mb-6 ">
      <Link href="/" className="">
        <h1 className="flex gap-2 text-[#4338CA] italic font-bold text-base">
          <Film /> Movie Z
        </h1>
      </Link>
      <div className="flex gap-3">
        <GenreMain />
        <MovieSearch />
      </div>
      <ModeToggle />
    </div>
  );
};
