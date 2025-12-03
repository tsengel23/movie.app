"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

type GenreItemProps = {
  id: number;
  name: string;
};

export const GenreItem = (props: GenreItemProps) => {
  return (
    <div>
      <Badge
        className="w-fit h-5 flex items-center gap-2 cursor-pointer"
        variant={"outline"}
      >
        {props.name}
        <ChevronRight strokeWidth={1} />
      </Badge>
    </div>
  );
};
