"use client";

import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";

export const CarouselItem = (props) => {
  return (
    <div className="w-fit h-fit relative border border-red-600 ">
      <img
        className="w-[1440px] h-[600px] object-cover z-10"
        src="https://eu-images.contentstack.com/v3/assets/blt8770191dea35bccc/blte2008043be1b1e4a/674a0010127cfc83bf908211/%E2%80%9CWicked%E2%80%9D_stars_Cynthia_Erivo_and_Ariana_Grande_Universal_Pictures.png"
      />
      <div className="flex flex-col w-[404px] h-[264px] gap-4 absolute bottom-[158] left-[140px] z-1 border border-red-600">
        <div>
          <p className="text-white text-base font-normal">Now Playing :</p>
          <h1 className="text-white text-4xl font-extrabold">Wicked</h1>
          <div className="flex gap-2 text-white">
            <Star fill="#FDE047" className="border text-[#FDE047]" /> 6.9/10
          </div>
        </div>
        <p className="w-[302px]  text-[#FAFAFA] text-xs font-normal">
          Elphaba, a misunderstood young woman because of her green skin, and
          Glinda, a popular girl, become friends at Shiz University in the Land
          of Oz. After an encounter with the Wonderful Wizard of Oz, their
          friendship reaches a crossroads.
        </p>
        <Button
          variant="outline"
          className="w-[145px]  flex gap-2 px-4 py-2 bg-[#F4F4F5] text-[#18181B] text-sm font-medium hover:bg-gray-300   "
        >
          <Play /> <a href="#">Watch Trailer</a>
        </Button>
      </div>
    </div>
  );
};
