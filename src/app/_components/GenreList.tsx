"useclient";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
//
import { useEffect, useState } from "react";

export const GenreList = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const genreIds = searchParams.get("genreIds")?.split(",") || [];
  console.log(genreIds);
  const [genres, setGenres] = useState<genre[]>([]);

  const handleClickGenre = (genreId: string) => {
    const params = new URLSearchParams(searchParams.toString());

    const updatedGenreIds = genreIds?.includes(genreId)
      ? genreIds.filter((id) => id !== genreId)
      : [...genreIds, genreId];

    if (updatedGenreIds.length > 0) {
      params.set("genreIds", updatedGenreIds.join(","));
      router.push("/Genre?" + params);
    } else {
      router.push("/Genre?");
    }
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
    <div className="flex flex-wrap gap-4 max-w-md border-r h-fit">
      {genres?.map((item) => {
        return (
          <Badge
            key={item.id}
            className="w-fit h-5 flex items-center gap-2 cursor-pointer hover:bg-black hover:text-white "
            variant={
              genreIds.includes(item.id.toString()) ? "default" : "outline"
            }
            onClick={() => handleClickGenre(item.id.toString())}
          >
            {item.name}
            <ChevronRight strokeWidth={1} />
          </Badge>
        );
      })}
    </div>
  );
};
