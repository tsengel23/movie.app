"use client";

import { RateCard } from "./RateCard";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

type MovieCardProps = {
  image?: string;
  rate: number;
  title: string;
  id: number;
};

export const MovieCard = (props: MovieCardProps) => {
  return (
    <Link href={`/movie/${props?.id}`}>
      <div className=" w-full h-full flex flex-col gap-0.5 rounded-lg bg-muted border overflow-hidden">
        <div className="w-full h-full">
          <div className="w-full h-full hover:opacity-75 transition-opacity duration-300 ease-in-out relative">
            <img src={props.image} className="w-full h-full " />
            <div className="absolute w-full h-full hover:bg-black hover:opacity-50  z-2 top-0 left-0 "></div>
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
            <h1 className="text-lg font-normal">{props.title}</h1>
            {/* TITLE: */}
          </div>
        </div>
      </div>
    </Link>
  );
};
