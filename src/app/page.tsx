"use client";

/********************************************************************/

import { NavigationCard } from "./_components/NavigationCard";
import { Carusel } from "./_components/Carusel";
import { MovieSections } from "./_components/MovieSections";
import { Footer } from "./_components/Footer";
import { MovieDetail } from "./_components/MovieDetails";

/*********************************************************************/

export default function MovieApp() {
  return (
    <MovieDetail />
    // <div className="w-screen flex flex-col items-center border border-red-600">
    //   <NavigationCard />
    //   <Carusel />
    //   <MovieSections />
    //   <Footer />
    // </div>
  );
}
