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
import { useRef } from "react";
import { CarouselMovieItem } from "./CarouselMovieItem";

const content = [
  {
    image: "https://images4.alphacoders.com/137/thumb-1920-1374991.jpg",
    when: "Now Playing",
    title: "Wicked",
    rate: 8.7,
    description:
      "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
    trailer: "https://www.youtube.com/watch?v=6COmYeLsz4c",
  },
  {
    image: "https://www.lab111.nl/wp-content/uploads/2024/11/Naamloos-1.jpg",
    when: "Now Playing",
    title: "Gladiator II",
    rate: 8.7,
    description:
      "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people. ",
    trailer: "https://www.youtube.com/watch?v=29p_H1JYjQ0",
  },
  {
    image:
      "https://www.filmyfenil.com/wp-content/uploads/2024/11/Moana-2-wallpaper.jpg",
    when: "Now Playing",
    title: "Moana 2",
    rate: 8.7,
    description:
      "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced. ",
    trailer: "https://www.youtube.com/watch?v=KNg04Ew6Rh4",
  },
];

type CaruselProps = {};
export function Carusel(props: CaruselProps) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-fit "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="relative m-0 ">
        {content.map((item, index) => (
          <CarouselMovieItem
            key={index}
            image={item.image}
            when={item.when}
            title={item.title}
            rate={item.rate}
            description={item.description}
            trailer={item.trailer}
          ></CarouselMovieItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-[280px] left-[44px]" />
      <CarouselNext className="absolute top-[280px] right-[44px]" />
    </Carousel>
  );
}
