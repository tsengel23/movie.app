"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { MovieCardSkeleton } from "./MovieCardSkeleton";

export const MoviesByGenreSkeleton = () => {
  return (
    <div className=" min-h-screen flex mx-20 ">
      <div className="w-fit h-fit flex flex-col mb-8 ">
        <Skeleton className="mb-8 w-10"></Skeleton>
        <Skeleton className="w-fit h-fit grid grid-cols-4 gap-7 ">
          <MovieCardSkeleton />
        </Skeleton>
        <Skeleton className="w-full flex justify-end mt-8"></Skeleton>
      </div>
    </div>
  );
};
