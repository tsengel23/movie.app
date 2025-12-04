"use client";

import { useEffect, useState } from "react";
//**************/
type castObj = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};
type crewObj = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};

type creditRes = {
  id: number;
  cast: castObj[];
  crew: crewObj[];
};
// ***************/

// ***************/
type Params = {
  movieId: string;
};

export const CastCrewDetail = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex gap-12 mt- pb-3  border-b border-b-gray-300">
        <h3 className="text-base font-bold text-[#09090B]">Director</h3>
        <p className="text-base font-normal text-[#09090B]">Jon M. Chu</p>
      </div>
      <div className="flex gap-12 pb-3  border-b border-b-gray-300">
        <h3 className="text-base font-bold text-[#09090B]">Writers</h3>
        <p className="text-base font-normal text-[#09090B]">Jon M. Chu</p>
      </div>
      <div className="flex gap-12 pb-3  border-b border-b-gray-300">
        <h3 className="text-base font-bold text-[#09090B]">Stars</h3>
        <p className="text-base font-normal text-[#09090B]">Jon M. Chu</p>
      </div>
    </div>
  );
};
