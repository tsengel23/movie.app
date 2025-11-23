"use client";

import { Badge, ChevronRight } from "lucide-react";

type GenreItemProps = {
  id: number;
  name: string;
};

export const GenreItem = (props: GenreItemProps) => {
  return (
    <div>
      <Badge className="w-fit h-5 ">
        {props.name} <ChevronRight strokeWidth={1} />
      </Badge>
    </div>
  );
};
