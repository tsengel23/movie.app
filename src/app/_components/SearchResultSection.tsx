"use client";

import { SearchResult } from "./SearchResult";
const searching = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/Wicked_%282024_film%29_poster.png",
    title: "Wicked Part 2",
    rate: 8.7,
    date: "2025",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/Wicked_%282024_film%29_poster.png",
    title: "Wicked Part 2",
    rate: 8.7,
    date: "2025",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/Wicked_%282024_film%29_poster.png",
    title: "Wicked Part 2",
    rate: 8.7,
    date: "2025",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/Wicked_%282024_film%29_poster.png",
    title: "Wicked Part 2",
    rate: 8.7,
    date: "2025",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/Wicked_%282024_film%29_poster.png",
    title: "Wicked Part 2",
    rate: 8.7,
    date: "2025",
  },
];

type SearchResultSectionProps = {};
export const SearchResultSection = (props: SearchResultSectionProps) => {
  return (
    <div className="flex flex-col ">
      {searching.map((item, index) => {
        return (
          <SearchResult
            key={index}
            image={item.image}
            title={item.title}
            rate={item.rate}
            date={item.date}
          />
        );
      })}
    </div>
  );
};
