"use client";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselMovieItem } from "./CarouselMovieItem";
import { useRef } from "react";
import { ItemDescription } from "@/components/ui/item";

const content = [
  {
    when: "Now Playing",
    title: "Wicked",
    rate: 6.9 / 10,
    description:
      "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
    trailer: "https://www.youtube.com/watch?v=6COmYeLsz4c",
  },
  {
    image: "",
    when: "Now Playing",
    title: "Gladiator II",
    rate: 6.9 / 10,
    description:
      "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people. ",
    trailer: "https://www.youtube.com/watch?v=29p_H1JYjQ0",
  },
  {
    when: "Now Playing",
    title: "Moana 2",
    rate: 6.9 / 10,
    description:
      "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced. ",
    trailer: "https://www.youtube.com/watch?v=KNg04Ew6Rh4",
  },
];

export function CarouselPlugin() {
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full border-2 border-green-500"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {content.map((item, index) => (
          <CarouselMovieItem
            key={index}
            image={item.image}
            title={item.title}
            rate={item.rate}
            description={item.description}
          >
            <div className="p-1">
              <Card>
                <CardContent className="max-w-fit max-h-full flex items-center justify-center ">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselMovieItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
