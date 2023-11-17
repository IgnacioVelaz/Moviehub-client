import { createContext } from "react";
import { MovieInterface } from "../interfaces/MovieInterface";
import { MovieInterfaceDB } from "../interfaces/MovieInterfaceDB";

export type MoviesContextType = {
  watchlist: MovieInterface[];
  watched: MovieInterface[];
  addMovieToWatchList: (movie: MovieInterface) => void;
  addMovieToWatched: (movie: MovieInterfaceDB) => void;
  removeMovieFromWatchList: (id: string) => void;
  moveToWatchList: (movie: MovieInterfaceDB) => void;
  removeMovieFromWatched: (id: string) => void;
  addUserMoviesToWatchList: (userMovies: MovieInterfaceDB[]) => void;
};

export const initialState = {
  watchlist: [],
  watched: [],
  addMovieToWatchList: () => {},
  addMovieToWatched: () => {},
  removeMovieFromWatchList: () => {},
  moveToWatchList: () => {},
  removeMovieFromWatched: () => {},
  addUserMoviesToWatchList: () => {},
};

export const MoviesContext = createContext<MoviesContextType>(initialState);
