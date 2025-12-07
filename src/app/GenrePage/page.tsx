import { GenreItem } from "../_components/GenreItem";
import { GenreMain } from "../_components/GenreMain";

export default function Genre() {
  return (
    <div className="w-screen h-screen flex flex-col items-center mt-13 gap-8 mx-20">
      <h1 className="flex justify-start text-3xl font-semibold">
        Search filter
      </h1>
      <div className="flex  gap-8 ">
        <GenreMain />
        {/* <FilteredMovies /> */}
      </div>
    </div>
  );
}
