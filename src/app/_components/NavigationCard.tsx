"use client";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Toggle } from "@/components/ui/toggle";
import { ChevronDown, Film, Moon, SearchIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

type NavigationCardProps = {};

export const NavigationCard = (props: NavigationCardProps) => {
  return (
    <div className="w-full h-fit flex justify-between px-20 py-3 mb-6">
      <h1 className="flex gap-2 text-[#4338CA] italic font-bold text-base">
        <Film /> Movie Z
      </h1>
      <div className="flex gap-3">
        <Popover>
          <PopoverTrigger className="border border-[#E4E4E7] font-medium rounded-lg text-sm px-4 py-1.5 flex gap-2 items-center ">
            <ChevronDown /> GENRE
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
        <InputGroup className="w-95 h-9 border border-[#E4E4E7] rounded-lg text-sm font-normal py-2">
          <InputGroupInput placeholder=" Search..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </div>

      {/* <Toggle
        aria-label="Toggle moon"
        size="sm"
        variant="outline"
        className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-yellow-300 border w-9 h-9 flex items-center justify-center rounded-md overflow-hidden"
      >
        <Moon className="w-4 h-4 text-[#18181B]" />
      </Toggle> */}
      <ModeToggle />
    </div>
  );
};
