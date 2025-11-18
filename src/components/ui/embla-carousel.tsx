"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type EmblaApiType = NonNullable<ReturnType<typeof useEmblaCarousel>[1]>;

interface CarouselProps {
  children: React.ReactNode[];
  autoplay?: boolean;
  delay?: number;
  loop?: boolean;
}

export default function Carousel({
  children,
  autoplay = true,
  delay = 3000,
  loop = false,
}: CarouselProps) {
  // emblaRef is a callback ref (from useEmblaCarousel). We also keep our own ref to the DOM node.
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop });
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  // Browser setInterval returns number
  const autoplayRef = React.useRef<number | null>(null);

  const onSelect = React.useCallback((embla: EmblaApiType) => {
    setSelectedIndex(embla.selectedScrollSnap());
    setIsBeginning(!embla.canScrollPrev());
    setIsEnd(!embla.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);

    // register select listener
    const handler = () => onSelect(emblaApi);
    emblaApi.on("select", handler);

    return () => {
      emblaApi.off("select", handler);
    };
  }, [emblaApi, onSelect]);

  // AUTOPLAY with containerRef (no emblaRef.current usage)
  React.useEffect(() => {
    if (!emblaApi || !autoplay) return;

    const play = () => {
      if (!emblaApi) return;
      if (!emblaApi.canScrollNext() && !loop) return;
      emblaApi.scrollNext();
    };

    // start interval
    autoplayRef.current = window.setInterval(play, delay);

    const node = containerRef.current;

    // mouseenter / mouseleave handlers
    const handleMouseEnter = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
    const handleMouseLeave = () => {
      if (autoplayRef.current) return;
      autoplayRef.current = window.setInterval(play, delay);
    };

    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);
    }

    // cleanup
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
      if (node) {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [emblaApi, autoplay, delay, loop]);

  return (
    <div className="relative w-full">
      {/* PREV */}
      {!isBeginning && (
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      )}

      {/* NEXT */}
      {!isEnd && (
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}

      {/* VIEWPORT: assign both emblaRef and our containerRef via callback */}
      <div
        className="overflow-hidden"
        ref={(node) => {
          // call embla's ref callback / object
          // some variants of useEmblaCarousel return a function, some a ref object — cover both.
          try {
            // @ts-ignore - emblaRef might be a function
            if (typeof emblaRef === "function") emblaRef(node);
            // if emblaRef is an object with 'current', assign (rare)
            else if (
              emblaRef &&
              typeof (emblaRef as any).current !== "undefined"
            )
              (emblaRef as any).current = node;
          } catch {
            // ignore
          }
          // always store into our containerRef
          containerRef.current = node;
        }}
      >
        <div className="flex">
          {children.map((child, i) => (
            <div key={i} className="min-w-full">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              i === selectedIndex ? "bg-gray-800" : "bg-gray-400 opacity-60"
            )}
          />
        ))}
      </div>
    </div>
  );
}
