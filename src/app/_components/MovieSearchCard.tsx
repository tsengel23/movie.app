"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { TitleCard } from "./TitleCard";
import { RateCard } from "./RateCard";

type MovieSearchCardProps = {
  // movie:MovieRes
  image: string;
  title: string;
  rate: number;
  date: string;
  id: number;
};

// const object: MovieSearchCardProps = {
//   id: 1,
//   title: "Whiked",
//   rate: 7,
//   date: new Date(),
//   image: "./",
// };

export const MovieSearchCard = (props: MovieSearchCardProps) => {
  const { image, title, rate, date, id } = props;
  return (
    // <Link href={`/movie/${id}`}>
    <div className="w-fit h-fit flex justify-between p-2 gap-4 border-b border-b-gray-300 ">
      <img className="w-[67px] h-[100px] border rounded-md " src={image} />
      <div className="flex flex-col w-fit h-fit gap-3 ">
        <div className="w-[454px] h-fit flex flex-col  ">
          <h1 className="font-semibold text-xl"> {title}</h1>
          <span className="flex items-center gap-1 text-sm">
            <RateCard rate={rate} />
            {/* <Star fill="#FDE047" className="w-4 h-4 text-[#FDE047]" />
            {props.rate} */}
          </span>
        </div>
        <div className="flex justify-between  items-start pr-5 ">
          <span className="text-[#09090B] text-sm font-medium dark:text-white">
            {date}
          </span>

          <TitleCard title="" href={`/movie/${id}`} />
          {/* {props.href && (
            <Link href={props.href}>
              <Button
                variant="link"
                className="flex gap-2 px-4 py-2 bg-transparent text-sm font-medium text-black"
              >
                See more <ArrowRight />
              </Button>
            </Link>
          )} */}
        </div>
      </div>
    </div>
    //{" "}
    // </Link>
  );
};
