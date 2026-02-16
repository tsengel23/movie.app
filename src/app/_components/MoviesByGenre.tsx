import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PaginationMovie } from "./PaginationMovie";
import { MovieCard } from "./MovieCard";
import { MovieCardSkeleton } from "./MovieCardSkeleton";
import { MoviesByGenreSkeleton } from "./MoviesByGenreSkeleton";

export const MoviesByGenre = () => {
  const [movies, setMovies] = useState<result[]>([]);
  const searchParams = useSearchParams();
  const genreIds = searchParams.get("genreIds")?.split(",") || [];
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalMovie, setTotalMovie] = useState(0);
  const [genreName, setGenreName] = useState(0);

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
        },
      );
      const data = await res.json();
      console.log(data);
      setTotalMovie(data.total_results);

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
      <div className="w-fit h-fit flex flex-col mb-8 ">
        <h1 className="mb-8 font-semibold text-3xl text-[#09090B]">
          <span> {totalMovie} </span> titles in<span> {}</span>
        </h1>
        {loading && (
          <div className="w-fit h-fit grid grid-cols-4 gap-7 ">
            {Array.from({ length: 20 }).map((_, index) => (
              <MoviesByGenreSkeleton key={index} />
            ))}
          </div>
        )}
        {!loading && (
          <div className="w-fit h-fit grid grid-cols-4 gap-7 ">
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
        )}
        <div className="w-full flex justify-end mt-8">
          <PaginationMovie
            currentPage={currentPage}
            totalPage={totalPage}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      </div>
    </div>
  );
};
