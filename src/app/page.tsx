"use client";

/********************************************************************/

import { NavigationCard } from "./_components/NavigationCard";
import { Carusel } from "./_components/Carusel";
import { MovieSections } from "./_components/MovieSections";
import { Footer } from "./_components/Footer";
import { MovieDetail } from "./_components/MovieDetails";
import { MovieSearch } from "./_components/MovieSearch";

/*********************************************************************/

export default function MovieApp() {
  return (
    // <MovieSearch />
    // <MovieDetail />
    <div className="w-screen flex flex-col items-center border border-red-600">
      <NavigationCard />
      <Carusel />
      <MovieSections />
      <Footer />
    </div>
  );
}
