"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ghost } from "lucide-react";
import Link from "next/link";

type TitleCardProps = {
  title: string;
  href?: string;
};

export const TitleCard = ({ title, href }: TitleCardProps) => {
  return (
    <div className="flex justify-between  ">
      <h1 className="text-[#09090B] font-semibold text-2xl dark:text-white">
        {title}
      </h1>

      {href && (
        <Link href={href || "/"}>
          <Button
            variant="link"
            className="flex gap-2 px-4 py-2 bg-transparent text-lg font-medium text-black border-none dark:text-white"
          >
            See more <ArrowRight />
          </Button>
        </Link>
      )}
    </div>
  );
};
