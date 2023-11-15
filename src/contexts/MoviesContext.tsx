import { createContext } from "react";
import { MovieInterface } from "../interfaces/MovieInterface";

export type MoviesContextType = {
  watchlist: MovieInterface[];
  watched: MovieInterface[];
  addMovieToWatchList: (movie: MovieInterface) => void;
  removeMovieFromWatchList: (id: string) => void;
};

export const initialState = {
  watchlist: [],
  watched: [],
  addMovieToWatchList: () => {},
  removeMovieFromWatchList: () => {},
};

export const MoviesContext = createContext<MoviesContextType>(initialState);
