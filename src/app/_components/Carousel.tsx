"use client";
import { Carousel } from "@/components/ui/embla-carousel";
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

type CarouselProps = {
  children: Element[];
  autoplay?: true;
  delay?: number;
  loop?: boolean;
};

export function Carousel(props: CarouselProps) {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <Carousel autoplay delay={3000} loop={false}>
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
      </Carousel>
    </div>
  );
}

// "use client";
// import Carousel from "@/components/ui/embla-carousel";

// export default function Home() {
//   return (
//     <div className="max-w-xl mx-auto mt-10">
//       <Carousel autoplay delay={3000} loop={false}>
//         <div className="p-10 bg-blue-200 rounded-xl">Slide 1</div>
//         <div className="p-10 bg-red-200 rounded-xl">Slide 2</div>
//         <div className="p-10 bg-green-200 rounded-xl">Slide 3</div>
//       </Carousel>
//     </div>
//   );
// }
