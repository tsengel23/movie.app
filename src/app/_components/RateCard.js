"use client";

import { Star } from "lucide-react";

export const RateCard = (props) => {
  return (
    <div className="flex gap-2 items-center">
      <Star fill="#FDE047" className="text-[#FDE047]" />
      <div className="flex items-center">
        <p className="text-sm font-medium"> {props.rate} </p>
        <span className="text=[#71717A] text-xs font-normal"> / 10 </span>
      </div>
    </div>
  );
};
