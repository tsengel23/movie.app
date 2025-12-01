"use client";
import { Skeleton } from "@/components/ui/skeleton";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import { CarouselMovieItem } from "./CarouselMovieItem";
import { useEffect, useState } from "react";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type Response = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

// const content = [
//   {
//     image: "https://images4.alphacoders.com/137/thumb-1920-1374991.jpg",
//     when: "Now Playing",
//     title: "Wicked",
//     rate: 8.7,
//     description:
//       "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
//     trailer: "https://www.youtube.com/watch?v=6COmYeLsz4c",
//   },
//   {
//     image: "https://www.lab111.nl/wp-content/uploads/2024/11/Naamloos-1.jpg",
//     when: "Now Playing",
//     title: "Gladiator II",
//     rate: 8.7,
//     description:
//       "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people. ",
//     trailer: "https://www.youtube.com/watch?v=29p_H1JYjQ0",
//   },
//   {
//     image:
//       "https://www.filmyfenil.com/wp-content/uploads/2024/11/Moana-2-wallpaper.jpg",
//     when: "Now Playing",
//     title: "Moana 2",
//     rate: 8.7,
//     description:
//       "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced. ",
//     trailer: "https://www.youtube.com/watch?v=KNg04Ew6Rh4",
//   },
// ];

type CaruselProps = {};
export function Carusel(props: CaruselProps) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const [movies, setMovies] = useState<Movie[]>([]);

  //
  // const [api, setApi] = useState<any>(null);
  // const [current, setCurrent] = useState(0);
  // const [count, setCount] = useState(0);
  //

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2ExNmNlNjA1MzAzNTk5MjIwNGYxMzI1ZDAwZGIwNiIsIm5iZiI6MTc2MzUyMTk5NS41MTcsInN1YiI6IjY5MWQzNWNiMTg0ZThlNTY0ZjJkNDE4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jl3UrTVIxBBbn3K1fvJ14YrplMU9UtuwKtkSW3lVa78",
              accept: "application/json",
            },
            next: { revalidate: 3600 },
          }
        );
        const data = (await res.json()) as Response;

        setMovies(data.results);
      } catch (error) {
        console.log("error");
      }
    };
    getData();
  });

  //
  // useEffect(() => {
  //   if (!api) return;

  //   setCount(api.scrollSnapList().length);

  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap());
  //   });
  // }, [api]);
  //

  return (
    <div className="relative w-full h-fit">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-fit "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        //
        // setApi={setApi}
        //
      >
        <CarouselContent className="relative m-0 ">
          {movies.slice(0, 5).map((item, index) => (
            <CarouselMovieItem
              key={index}
              image={"https://image.tmdb.org/t/p/original/" + item.poster_path}
              when={item.release_date}
              title={item.title}
              rate={item.vote_average}
              description={item.overview}
              movieId={item.id}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-[50%] left-[44px]" />
        <CarouselNext className="absolute top-[50%] right-[44px]" />
      </Carousel>
      {/*  */}
      {/* <div className="flex gap-2 justify-center mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-3 w-3 rounded-full transition-all
        ${current === index ? "bg-red-700 w-6" : "bg-gray-400"}`}
          />
        ))}
      </div> */}

      {/*  */}
    </div>
  );
}
