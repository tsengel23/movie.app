"use client";

// import { MovieCard } from "./_components/MovieCard";
// import { Dots } from "./_components/Dots";
// import { SearchResult } from "./_components/SearchResult";
// import { SearchResultSection } from "./_components/SearchResultSection";
// import { TitleCard } from "./_components/TitleCard";
// import { CarouselPlugin } from "./_components/Carousel";
// import { CarouselMovieItem } from "./_components/CarouselMovieItem";
// import { Carousel, CarouselItem } from "@/components/ui/carousel";
// import { PreviousNext } from "./_components/PreviousNext";
// import { Rate, RateCard } from "./_components/RateCard";
// import { MovieDetail } from "./_components/MovieDetails";
// import { GenreItem } from "./_components/GenreItem";
// import { Dots } from "./_components/Dots";
/********************************************************************/

import { NavigationCard } from "./_components/NavigationCard";
import { Carusel } from "./_components/Carusel";
import { UpcomingSection } from "./_components/UpcomingSection";
import { PopularSection } from "./_components/PopularSection";
import { TopRatedSection } from "./_components/TopRatedSection";
import { Footer } from "./_components/Footer";

/*********************************************************************/
// import { Carousel } from "./_components/Carousel";

export default function MovieApp() {
  return (
    <div className="w-screen flex flex-col items-center border border-red-600">
      <NavigationCard />
      <Carusel />
      <UpcomingSection />
      <PopularSection />
      <TopRatedSection />
      <Footer />
    </div>
  );
}
