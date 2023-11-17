import { MovieInterface } from "./MovieInterface";

export interface UserInterface {
  email: string;
  name: string;
  movies: MovieInterface[];
  id: string | number;
}
