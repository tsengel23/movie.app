/**Detail**/
type genre = {
  id: number;
  name: string;
};
type company = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
type country = {
  iso_3166_1: string;
  name: string;
};
type language = {
  english_name: string;
  iso_639_1: string;
  name: string;
};
type detailRes = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: company[];
  production_countries: country[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
/**Video~Trailer**/
type video = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};
type videoRes = {
  id: number;
  results: video[];
};
/**Up~Pop~Top~Now~Simi/SEARCH/DISCOVER**/
type genre_id = {
  id: number;
};
type result = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: genre_id[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
type Response = {
  page: number;
  results: result[];
  total_pages: number;
  total_results: number;
};

/**Genre**/
type genre = {
  id: number;
  name: string;
};
type genreRes = {
  genres: genre[];
};

/**Credits**/
type cast = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};
type crew = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};
type creditRes = {
  id: number;
  cast: cast[];
  crew: crew[];
};
