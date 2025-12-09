"use client";
import { useEffect, useState } from "react";

// type creditInfo = {
//   id: number;
//   cast: Cast[];
//   crew: Crew[];
// };

// type Crew = {
//   known_for_department: string;
//   department: string;
//   name: string;
// };

// type Cast = {
//   name: string;
// };

type CastCrewProps = {
  movieId: string;
};

export const CastCrew = ({ movieId }: CastCrewProps) => {
  const [creditInfo, setCreditInfo] = useState<creditRes>();
  const url = `${process.env.TMDB_BASE_URL}/movie/${movieId}/credits?language=en-US`;
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application.json",
          Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
        },
        next: { revalidate: 3600 },
      });
      const data = (await res.json()) as creditRes;
      console.log(data);
      setCreditInfo(data);
    };
    getData();
  }, []);
  return (
    <div className="flex flex-col gap-5 w-[1080px] h-[163px] mt-5">
      <div className="flex gap-12  pb-3  border-b border-b-gray-300">
        <h3 className="text-base font-bold w-16 h-7 text-[#09090B] dark:text-white">
          Director
        </h3>
        <p className="text-base font-normal   text-[#09090B] dark:text-white">
          {creditInfo?.crew
            .filter((item) => item.department === "Directing")
            .map((item) => item.name)}
        </p>
      </div>
      <div className="flex gap-12 pb-3  border-b border-b-gray-300">
        <h3 className="text-base font-bold w-16 h-7 text-[#09090B] dark:text-white">
          Writers
        </h3>
        <p className="text-base font-normal   text-[#09090B] dark:text-white">
          {creditInfo?.crew
            .filter((item) => item.department === "Writing")
            .map((item) => item.name)}
        </p>
      </div>
      <div className="flex gap-12 pb-3  border-b border-b-gray-300">
        <h3 className="text-base font-bold w-16 h-7 text-[#09090B] dark:text-white">
          Stars
        </h3>
        <p className="text-base font-normal   text-[#09090B] dark:text-white">
          {creditInfo?.cast[0]?.name}
        </p>
      </div>
    </div>
  );
};
