"use client";

import { Footer } from "./_components/Footer";
import { MovieCard } from "./_components/MovieCard";
import { NavigationCard } from "./_components/NavigationCard";
import { PopularSection } from "./_components/PopularSection";
import { SearchResult } from "./_components/SearchResult";
import { SearchResultSection } from "./_components/SearchResultSection";
import { TitleCard } from "./_components/TitleCard";
import { TopRatedSection } from "./_components/TopRatedSection";
import { UpcomingSection } from "./_components/UpcomingSection";

import { CarouselPlugin } from "./_components/Carousel";

import { CarouselMovieItem } from "./_components/CarouselMovieItem";
import { Carusel } from "./_components/Carusel";
import { CarouselItem } from "@/components/ui/carousel";
import { PreviousNext } from "./_components/PreviousNext";
import { Rate, RateCard } from "./_components/RateCard";
import { MovieDetail } from "./_components/MovieDetails";

export default function Home() {
  return <MovieDetail />;
}

// <div className="w-screen flex flex-col items-center border border-red-600">
//   <PreviousNext />
//   <NavigationCard />
//   <Carusel />
//   <UpcomingSection />
//   <PopularSection />
//   <TopRatedSection />
//   <Footer />
// </div>
