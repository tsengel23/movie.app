"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Ghost } from "lucide-react";

export const TitleCard = (props) => {
  return (
    <div className="flex justify-between border mb-9">
      <h1 className="text-[#09090B] font-semibold text-2xl ">Upcoming</h1>
      <Button
        variant="ghost"
        className="flex gap-2 px-4 py-2 bg-transparent text-sm font-medium text-black"
      >
        See more <ArrowRight />
      </Button>
    </div>
  );
};
