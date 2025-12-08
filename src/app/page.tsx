"use client";

/********************************************************************/

import { NavigationCard } from "./_components/NavigationCard";
import { Carusel } from "./_components/Carusel";
import { MovieSections } from "./_components/MovieSections";
import { Footer } from "./_components/Footer";

/*********************************************************************/

export default function MovieApp() {
  return (
    <div className="w-screen flex flex-col items-center ">
      <Carusel />
      <MovieSections />
    </div>
  );
}
