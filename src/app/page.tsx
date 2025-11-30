"use client";

/********************************************************************/

import { NavigationCard } from "./_components/NavigationCard";
import { Carusel } from "./_components/Carusel";
import { MovieSections } from "./_components/MovieSections";
import { Footer } from "./_components/Footer";
import { MovieDetail } from "./_components/MovieDetails";
import { MovieSearch } from "./_components/MovieSearch";

import { MoreLikeSection } from "./_components/MoreLikeSection";
import { MovieSection } from "./_components/MovieSection";
import { MovieSearchCard } from "./_components/MovieSearchCard";
import { SearchResultSection } from "./_components/SearchResultSection";
import { MovieCard } from "./_components/MovieCard";

/*********************************************************************/

export default function MovieApp() {
  return (
    // <MovieSearch />
    // <MovieSearchCard />
    // <SearchResultSection />
    // <MoreLikeSection />
    <div className="w-screen flex flex-col items-center border border-red-600">
      <NavigationCard />
      <Carusel />
      <MovieSections />
      <Footer />
    </div>
  );
}
