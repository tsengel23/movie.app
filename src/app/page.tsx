"use client";

/********************************************************************/

import { NavigationCard } from "./_components/NavigationCard";
import { Carusel } from "./_components/Carusel";
import { MovieSections } from "./_components/MovieSections";
import { Footer } from "./_components/Footer";
import { MovieDetails } from "./_components/MovieDetails";

/*********************************************************************/

export default function MovieApp() {
  return (
    // <MovieDetails />

    <div className="w-screen flex flex-col items-center ">
      <Carusel />
      <MovieSections />
    </div>
  );
}
