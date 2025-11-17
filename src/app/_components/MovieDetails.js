"use client";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export const MovieDetail = (props) => {
  return (
    <div className="w-[1080px] h-fit flex flex-col gap-6 border border-green-500">
      <div className="w-full h-fit flex justify-between border">
        <div className="flex flex-col justify-between border">
          <h1 className="font-bold text-4xl text-[#09090B]">Wicked</h1>
          <p className="text-lg font-normal text-[#09090B]">
            <span>2024.11.26</span>
            <span>. PG .</span>
            <span>2h 40m</span>
          </p>
        </div>
        <div className="flex flex-col border ">
          <p className="text-xs font-medium text-[#09090B]">Rating</p>
          <div className="flex gap-2">
            <Star fill="#FDE047" className="w-7 h-7 text-[#FDE047]" />
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="text-lg font-semibold"> 6.9 </p>
                <span className="text=[#71717A] text-base font-normal">
                  / 10
                </span>
              </div>
              <p className="font-normal text-xs text-[#71717A]">37k</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8 border">
        <div className="w-[290px] h-[428px] border"></div>
        <div className="w-[760px] h-[428px] border"></div>
      </div>
      <div>
        <div className="flex gap-3">
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod
        </p>
        <div className="flex gap-12 pb-3  border border-b-gray-300">
          <h3 className="text-base font-bold text-[#09090B]">Director</h3>
          <p className="text-base font-normal text-[#09090B]">Jon M. Chu</p>
        </div>
        <div className="flex gap-12 pb-3  border border-b-gray-300">
          <h3 className="text-base font-bold text-[#09090B]">Director</h3>
          <p className="text-base font-normal text-[#09090B]">Jon M. Chu</p>
        </div>
        <div className="flex gap-12 pb-3  border border-b-gray-300">
          <h3 className="text-base font-bold text-[#09090B]">Director</h3>
          <p className="text-base font-normal text-[#09090B]">Jon M. Chu</p>
        </div>
      </div>
    </div>
  );
};
