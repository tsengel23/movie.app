"use client";

/********************************************************************/

import { NavigationCard } from "./_components/NavigationCard";
import { Carusel } from "./_components/Carusel";
import { MovieSections } from "./_components/MovieSections";
import { Footer } from "./_components/Footer";
import { MovieDetails } from "./_components/MovieDetails";
import { MovieSearch } from "./_components/MovieSearch";
import { VideoDetail } from "./movie/[movieId]/_components/VideoDetail";
import { PaginationMovie } from "./_components/PaginationMovie";
import { MovieCardSkeleton } from "./_components/MovieCardSkeleton";
import { CarouselMovieItemSkeleton } from "./_components/CarouselMovieItemSkeleton";

/*********************************************************************/

export default function MovieApp() {
  return (
    // <CarouselMovieItemSkeleton />
    // <MovieCardSkeleton />
    <div className="w-screen flex flex-col items-center border border-red-600">
      <NavigationCard />
      <Carusel />
      <MovieSections />
      <Footer />
    </div>
  );
}
