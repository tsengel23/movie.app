"use client";
import { Skeleton } from "@/components/ui/skeleton";

export const CarouselMovieItemSkeleton = () => {
  return (
    <Skeleton>
      <div className=" mt-6 w-full aspect-5/2 border "></div>
    </Skeleton>
  );
};

// <div className="mt-[83px]">
//   <Skeleton className="w-full aspect-5/2 border "></Skeleton>
// </div>;
