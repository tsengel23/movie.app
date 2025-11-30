import { MovieSection } from "./MovieSection";

const categories = [
  { categoryName: "upcoming", title: "Upcoming" },
  { categoryName: "top_rated", title: "Top Rated" },
  { categoryName: "popular", title: "Popular" },
  { categoryName: "more_like_this", title: "More Like This" },
];

export const MovieSections = () => {
  return (
    <div>
      {categories.map((el) => {
        return (
          <MovieSection
            key={el.categoryName}
            categoryName={el.categoryName}
            title={el.title}
          />
        );
      })}
    </div>
  );
};
