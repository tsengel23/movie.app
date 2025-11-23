"use client";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";

import { useState } from "react";
import "./styles.css";
import { useKeenSlider } from "keen-slider/react";

import { Slide } from "./Slide";

type SlideProps = {
  image?: string;
  when: string;
  title: string;
  rate: number;
  description: string;
};

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

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <Slide
              image="string"
              description="string"
              when="string"
              title="fhgd"
              rate={8.7}
            />
          </div>
          <div className="keen-slider__slide number-slide2">
            <Slide
              image="string"
              description="string"
              when="string"
              title="string"
              rate={7}
            />
          </div>
          <div className="keen-slider__slide number-slide3">
            <Slide
              image="string"
              description="string"
              when="string"
              title="string"
              rate={9}
            />
          </div>
          {/* <div className="keen-slider__slide number-slide4">
            <Slide
              image="string"
              description="string"
              when="string"
              title="string"
              rate="number"
            />
          </div> */}
          {/* <div className="keen-slider__slide number-slide5">
            <Slide
              image="string"
              description="string"
              when="string"
              title="string"
              rate="number"
            />
          </div> */}
          {/* <div className="keen-slider__slide number-slide6">
            <Slide
              image="string"
              description="string"
              when="string"
              title="string"
              rate="number"
            />
          </div> */}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
