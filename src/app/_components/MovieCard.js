"use client";

import { Star } from "lucide-react";

export const MovieCard = (props) => {
  return (
    <div className=" w-fit h-fit flex flex-col gap-0.5 rounded-lg bg-[#F4F4F5] border overflow-hidden">
      <div className="w-[230px] h-[340px]">
        <img src={props.image} />
        {/* IMAGE: */}
      </div>
      <div className="w-[230px] h-[95px] p-2">
        <div className="flex gap-2">
          <Star fill="#FDE047" className="text-[#FDE047]" />
          {props.rate} {/* RATE: */}
        </div>
        <div>
          <h1>{props.title}</h1> {/* TITLE: */}
        </div>
      </div>
    </div>
  );
};
