type GenreType = {
  name: string;
};

export interface MovieInterfaceDB {
  name: string;
  poster_image: string;
  score: number;
  genres: GenreType[];
  id: string | number;
  tmdb_id: number;
  type: "watchlist" | "watched";
}
