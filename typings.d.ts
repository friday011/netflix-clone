export interface Genre {
  id: number;
  name: string;
}

export interface SearchResults<T> {
  page: number;
  total_pages: number;
  total_results: number;
  results: T[];
}

type GOOGLE_CLIENT_ID = string;

export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  media_type?: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
}

export type TrendingMovies = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export interface Element {
  type:
    | "Bloopers"
    | "Featurette"
    | "Behind the Scenes"
    | "Clip"
    | "Trailer"
    | "Teaser";
}
