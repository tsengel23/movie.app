"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";

export const MovieCardSkeleton = () => {
  return (
    <div className="w-full aspect-2/3">
      <Skeleton className="w-full h-full" />
    </div>
  );
};
