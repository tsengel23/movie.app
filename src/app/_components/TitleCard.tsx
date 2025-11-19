"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Ghost } from "lucide-react";
type TitleCardProps = {
  text: string;
  title: string;
};
export const TitleCard = (props: TitleCardProps) => {
  return (
    <div className="flex justify-between border ">
      <h1 className="text-[#09090B] font-semibold text-2xl ">{props.text}</h1>
      <Button
        variant="link"
        className="flex gap-2 px-4 py-2 bg-transparent text-sm font-medium text-black "
      >
        {props.title} <ArrowRight />
      </Button>
    </div>
  );
};
