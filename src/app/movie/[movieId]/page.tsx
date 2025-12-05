"use client";

import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";
import { MovieDetails } from "./_components";
import { Cast } from "./_components/Cast";
import { VideoDetail } from "./_components/VideoDetail";
import { CastCrew } from "./_components/CastCrew";
/*******************/
type genre = {
  id: number;
  name: string;
};
// type Results = {
//   title: string;
// };

export type MovieDetail = {
  adult: boolean;
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
  genres: genre[];

  // results:Results[];

  id: number;
  runtime: number;
  backdrop_path: string;
};

type Params = {
  movieId: string;
};

export default function MovieDetailPage() {
  const { movieId } = useParams<Params>();

  const [movie, setMovie] = useState<MovieDetail>();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2ExNmNlNjA1MzAzNTk5MjIwNGYxMzI1ZDAwZGIwNiIsIm5iZiI6MTc2MzUyMTk5NS41MTcsInN1YiI6IjY5MWQzNWNiMTg0ZThlNTY0ZjJkNDE4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jl3UrTVIxBBbn3K1fvJ14YrplMU9UtuwKtkSW3lVa78",
          },
          next: { revalidate: 3600 },
        }
      );

      const data = await res.json();
      console.log(data);

      setMovie(data);
      // setTrailers(data.results);
    };

    getData();
  }, [movieId]);

  return (
    <div>
      {movie && <MovieDetails movie={movie} />}
      <VideoDetail
        movieId={movieId}
        image={"https://image.tmdb.org/t/p/w500/" + movie?.backdrop_path}
      />
      <div>{movieId}</div>
      {/* <Cast movieId={Number(movieId)} /> */}
      {/* <MoreLikeThis /> */}
      <CastCrew movieId={movieId} />
    </div>
  );
}

//  return (
//     <Dialog>
//       <div className="w-full h-screen flex flex-col items-center border-4 border-red-600">
//         <NavigationCard />
//         <div className="w-[1080px] h-fit flex flex-col gap-6 border border-green-500">
//           <div className="w-full h-fit flex justify-between border">
//             <div className="flex flex-col justify-between border">
//               <h1 className="font-bold text-4xl text-[#09090B]">Wicked</h1>
//               {/* title bichne*/}
//               <p className="font-normal text-lg  text-[#09090B]">
//                 <span>2024.11.26</span> {/* release_date bichne*/}
//                 <span>· PG ·</span>
//                 <span>2h 40m</span>
//                 {/* run_time bichne*/}
//               </p>
//             </div>
//             <div className="flex flex-col border ">
//               <p className="text-xs font-medium text-[#09090B]">Rating</p>
//               <div className="flex gap-2">
//                 <Star
//                   fill="#FDE047"
//                   className="w-7 h-7 text-[#FDE047] mt-2.5"
//                 />
//                 <div className="flex flex-col">
//                   <div className="flex items-center">
//                     <p className="text-lg font-semibold"> 6.9 </p>{" "}
//                     {/* vote_avarage bichne*/}
//                     <span className="text=[#71717A] text-base font-normal">
//                       / 10
//                     </span>
//                   </div>
//                   <p className="font-normal text-xs text-[#71717A]">37k</p>{" "}
//                   {/* popularity bichne*/}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-[1080px] h-[428px] flex gap-8 border">
//             <div className="w-[290px] rounded-sm h-full border bg-start bg-cover object-fill">
//               <img
//                 src="https://wallpapercave.com/wp/wp2563744.jpg"
//                 className="w-[290px] h-[428px] object-cover"
//               />
//             </div>
//           <VideoDetail/>
//           </div>
//           <div className=" flex flex-col gap-5 mt-8">
//             <div className="flex gap-3">
//               <Badge variant="outline" className=" ">
//                 item
//               </Badge>
//             </div>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//               eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing
//               elit. Sed do eiusmod
//             </p>
//           <CastCrew/>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </Dialog>
