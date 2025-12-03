"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const MovieCardSkeleton = () => {
  return (
    <div className=" w-fit h-fit flex flex-col gap-0.5 rounded-lg bg-muted border overflow-hidden">
      <div className="w-fit h-fit">
        <div className="w-[230px] h-[340px] hover:opacity-75 transition-opacity duration-300 ease-in-out relative">
          <div className="absolute w-[230px] h-[340px] hover:bg-black hover:opacity-50  z-2 top-0 left-0 "></div>
        </div>
      </div>
      <div className="w-[230px] h-[95px] p-2">
        <div className=""></div>
        <div>
          <h1 className=""></h1>
        </div>
      </div>
    </div>
  );
};
