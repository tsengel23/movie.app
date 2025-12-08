import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PaginationMovie } from "./PaginationMovie";
import { MovieCard } from "./MovieCard";

export const MoviesByGenre = () => {
  const [movies, setMovies] = useState<result[]>([]);
  const searchParams = useSearchParams();
  const genreIds = searchParams.get("genreIds")?.split(",") || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResult, setTotalResult] = useState()

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(
        `${
          process.env.TMDB_BASE_URL
        }/discover/movie?language=en&with_genres=${genreIds.join()}&page=${currentPage}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          },
          next: { revalidate: 3600 }, // 1 цаг тутам шинэчлэнэ
        }
      );
      const data = await res.json();

      setMovies(data.results);
      setTotalPage(data.total_pages);
      setLoading(false);

    };

    getData();
  }, [genreIds.join(), currentPage]);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  return (
    <div className=" min-h-screen flex mx-20 ">
      <div className="w-fit h-fit flex flex-col mb-8 border  border-red-600">
        <h1 className="mb-8 font-semibold text-3xl text-[#09090B]">
          <span> {data.totalResult} </span> title <span> {data.} </span>
        </h1>
        <div className="w-fit h-fit grid grid-cols-4 gap-7 overflow-scroll border-3 border-green-500">
          {movies?.map((item) => (
            <MovieCard
              key={item.id}
              rate={item.vote_average}
              title={item.title}
              id={item.id}
              image={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
            />
          ))}
        </div>
        <div className="w-full flex justify-end mt-8">
          <PaginationMovie
            currentPage={currentPage}
            totalPage={totalPage}
            nextPage={nextPage}
            prevPage={prevPage}
            className=" "
          />
        </div>
      </div>
    </div>
  );
};
