"use client";
import { useEffect, useState } from "react";

type creditInfo = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

type Crew = {
  known_for_department: string;
  department: string;
  name: string;
};

type Cast = {
  name: string;
};

type CastCrewProps = {
  movieId: string;
};

export const CastCrew = ({ movieId }: CastCrewProps) => {
  const [creditInfo, setCreditInfo] = useState<creditInfo>();
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application.json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2ExNmNlNjA1MzAzNTk5MjIwNGYxMzI1ZDAwZGIwNiIsIm5iZiI6MTc2MzUyMTk5NS41MTcsInN1YiI6IjY5MWQzNWNiMTg0ZThlNTY0ZjJkNDE4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jl3UrTVIxBBbn3K1fvJ14YrplMU9UtuwKtkSW3lVa78",
        },
        next: { revalidate: 3600 },
      });
      const data = (await res.json()) as creditInfo;
      console.log(data);
      setCreditInfo(data);
    };
    getData();
  }, []);
  return (
    <div className="flex flex-col gap-5 w-[1080px] h-[163px] border border-red-500 ">
      <div className="flex gap-12  pb-3  border-b border-b-gray-300">
        <h3 className="text-base font-bold w-16 h-7 text-[#09090B]">
          Director
        </h3>
        <p className="text-base font-normal   text-[#09090B]">
          {creditInfo?.crew
            .filter((item) => item.department === "Directing")
            .map((item) => item.name)}
        </p>
      </div>
      <div className="flex gap-12 pb-3  border-b border-b-gray-300">
        <h3 className="text-base font-bold w-16 h-7 text-[#09090B]">Writers</h3>
        <p className="text-base font-normal   text-[#09090B]">
          {creditInfo?.crew
            .filter((item) => item.department === "Writing")
            .map((item) => item.name)}
        </p>
      </div>
      <div className="flex gap-12 pb-3  border-b border-b-gray-300">
        <h3 className="text-base font-bold w-16 h-7 text-[#09090B]">Stars</h3>
        <p className="text-base font-normal   text-[#09090B]">
          {creditInfo?.cast[0].name}
        </p>
      </div>
    </div>
  );
};
