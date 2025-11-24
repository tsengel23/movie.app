"use client";

import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

type GenreItemProps = {
  id: number;
  name: string;
};

export const GenreItem = (props: GenreItemProps) => {
  return (
    <div>
      <Badge className="w-fit h-5 flex cursor-pointer" variant={"default"}>
        {props.name}
        <ChevronRight strokeWidth={1} />
      </Badge>
    </div>
  );
};
