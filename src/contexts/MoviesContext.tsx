import { createContext } from "react";
import { MovieInterface } from "../interfaces/MovieInterface";

export type MoviesContextType = {
  watchlist: MovieInterface[];
  watched: MovieInterface[];
  addMovieToWatchList: (movie: MovieInterface) => void;
};

export const initialState = {
  watchlist: [],
  watched: [],
  addMovieToWatchList: () => {},
};

export const MoviesContext = createContext<MoviesContextType>(initialState);
