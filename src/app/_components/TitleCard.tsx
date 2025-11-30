"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Ghost } from "lucide-react";
import Link from "next/link";

type TitleCardProps = {
  title: string;
  href?: string;
};

export const TitleCard = (props: TitleCardProps) => {
  return (
    <div className="flex justify-between border ">
      <h1 className="text-[#09090B] font-semibold text-2xl ">{props.title}</h1>

      {props.href && (
        <Link href={props.href}>
          <Button
            variant="link"
            className="flex gap-2 px-4 py-2 bg-transparent text-sm font-medium text-black border-none"
          >
            See more <ArrowRight />
          </Button>
        </Link>
      )}

      {/* <Button className="flex gap-2 px-4 py-2 bg-transparent text-sm font-medium text-black ">
        {props.title} <ArrowRight />
      </Button> */}
    </div>
  );
};
