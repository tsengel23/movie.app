"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";

export const MovieCardSkeleton = () => {
  return (
    <Skeleton>
      <div className=" w-fit aspect-2/3 flex flex-col gap-0.5 rounded-lg bg-muted border overflow-hidden">
        <div className="w-fit h-fit">
          <div className="w-fit h-fit "></div>
        </div>
        <div className="w-[230px] h-[95px] p-2">
          <div className="flex gap-2"></div>
          <div>
            <h1 className="text-lg font-normal"></h1>
            {/* TITLE: */}
          </div>
        </div>
      </div>
    </Skeleton>
  );
};
