import { createContext } from "react";
import { MovieInterface } from "../interfaces/MovieInterface";

export type MoviesContextType = {
  watchlist: MovieInterface[];
  watched: MovieInterface[];
  addMovieToWatchList: (movie: MovieInterface) => void;
  addMovieToWatched: (movie: MovieInterface) => void;
  removeMovieFromWatchList: (id: string) => void;
  moveToWatchList: (movie: MovieInterface) => void;
  removeMovieFromWatched: (id: string) => void;
};

export const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist")!)
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched")!)
    : [],
  addMovieToWatchList: () => {},
  addMovieToWatched: () => {},
  removeMovieFromWatchList: () => {},
  moveToWatchList: () => {},
  removeMovieFromWatched: () => {},
};

export const MoviesContext = createContext<MoviesContextType>(initialState);
