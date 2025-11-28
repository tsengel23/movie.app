import { MovieDetail } from "../page";

type MovieDetailsProps = {
  movie: MovieDetail;
};

export const MovieDetails = ({ movie }: MovieDetailsProps) => {
  const {
    title,
    poster_path,
    release_date,
    vote_average,
    runtime,
    genres,
    overview,
  } = movie;

  return (
    <div>
      <div>{title}</div>
      <div>
        {release_date} {runtime}
      </div>
    </div>
  );
};
