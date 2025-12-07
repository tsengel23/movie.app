"use client";

import { Star } from "lucide-react";

type RateCardProps = {
  rate: number;
  className?: string;
};

export const RateCard = (props: RateCardProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Star fill="#FDE047" className="text-[#FDE047]" />
      <div className="flex items-center">
        <p className={`text-sm font-medium ${props.className}`}>
          {props.rate.toFixed(1)}
        </p>
        <span
          className={`text=[#71717A] text-xs font-normal ${props.className}`}
        >
          / 10
        </span>
      </div>
    </div>
  );
};
