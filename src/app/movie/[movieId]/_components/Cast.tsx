"use client";

import { useEffect, useState } from "react";

type CastProps = {
  movieId: number;
};

export const Cast = ({ movieId }: CastProps) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2ExNmNlNjA1MzAzNTk5MjIwNGYxMzI1ZDAwZGIwNiIsIm5iZiI6MTc2MzUyMTk5NS41MTcsInN1YiI6IjY5MWQzNWNiMTg0ZThlNTY0ZjJkNDE4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jl3UrTVIxBBbn3K1fvJ14YrplMU9UtuwKtkSW3lVa78",
          },
          next: { revalidate: 3600 },
        }
      );

      const data = await res.json();

      setCast(data.cast);
    };

    getData();
  }, [movieId]);

  return <div>{cast.map((item) => item.name)}</div>;
};
