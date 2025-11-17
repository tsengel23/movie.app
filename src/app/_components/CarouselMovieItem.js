"use client";

import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { Play, Star } from "lucide-react";

export const CarouselMovieItem = (props) => {
  return (
    <CarouselItem className={"pl-0"}>
      <div className="w-full h-fit relative border border-red-600 ">
        <img
          className="w-screen h-[600px] object-cover z-10"
          src={props.image}
        />
        <div className="flex flex-col w-[404px] h-[264px] gap-4 absolute bottom-[158] left-[140px] z-1 border border-red-600">
          <div>
            <p className="text-white text-base font-normal">{props.when} :</p>
            <h1 className="text-white text-4xl font-extrabold">
              {props.title}
            </h1>
            <div className="flex gap-2 text-white">
              <Star fill="#FDE047" className="border text-[#FDE047]" />
              {props.rate}
            </div>
          </div>
          <p className="w-[302px]  text-[#FAFAFA] text-xs font-normal">
            {props.description}
          </p>
          <Button
            variant="outline"
            className="w-[145px]  flex gap-2 px-4 py-2 bg-[#F4F4F5] text-[#18181B] text-sm font-medium hover:bg-gray-300   "
          >
            <Play /> <a href="#">Watch Trailer</a>
          </Button>
        </div>
      </div>
    </CarouselItem>
  );
};
