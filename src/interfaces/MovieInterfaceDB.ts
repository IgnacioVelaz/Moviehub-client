type GenreType = {
  name: string;
};

export interface MovieInterfaceDB {
  name: string;
  poster_image: string;
  score: number;
  genres: GenreType[];
}
