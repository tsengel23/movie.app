"use client";

import { Star } from "lucide-react";
import { RateCard } from "./RateCard";

type MovieCardProps = {
  image?: string;
  rate: number;
  title: string;
};

export const MovieCard = (props: MovieCardProps) => {
  return (
    <div className=" w-fit h-fit flex flex-col gap-0.5 rounded-lg bg-muted border overflow-hidden">
      <div className="w-fit h-fit">
        <div className="w-[230px] h-[340px] hover:opacity-75 transition-opacity duration-300 ease-in-out relative">
          <img src={props.image} className="w-[230px] h-[340px] " />
          <div className="absolute w-[230px] h-[340px] hover:bg-black hover:opacity-50  z-2 top-0 left-0 "></div>
        </div>

        {/* IMAGE: */}
      </div>
      <div className="w-[230px] h-[95px] p-2">
        <RateCard rate={props.rate} />
        {/* <div className="flex gap-2">
          <Star fill="#FDE047" className="text-[#FDE047]" />
          {props.rate} 
        </div> */}
        <div>
          <h1 className="text-lg font-normal">{props.title}</h1> {/* TITLE: */}
        </div>
      </div>
    </div>
  );
};
