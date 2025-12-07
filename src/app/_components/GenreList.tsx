"useclient";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const GenreList = () => {
  const searchParams = useSearchParams();
  const genreIds = searchParams.get("genreIds")?.split(",");
  console.log(genreIds);
  const [genres, setGenres] = useState<genre[]>([]);

  const handleClickGenre = (genreId: number) => {
    console.log(genreId);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.TMDB_BASE_URL}/genre/movie/list?language=en`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          },
          next: { revalidate: 3600 },
        }
      );
      const data = await res.json();
      console.log(data);

      setGenres(data.genres);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap gap-4 max-w-md border-r">
      {genres?.map((el) => {
        return (
          <Badge
            key={(el, id)}
            className="flex"
            variant="outline"
            onClick={() => handleClickGenre(el.id)}
          >
            {el.name} <ChevronDown />
          </Badge>
        );
      })}
    </div>
  );
};
