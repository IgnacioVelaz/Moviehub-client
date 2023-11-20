export interface MovieInterfaceForDB {
  name: string;
  poster_image: string;
  score: number;
  genres: string[];
  tmdb_id: number;
  type: "watchlist" | "watched";
}
