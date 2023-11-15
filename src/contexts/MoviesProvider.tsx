import { FC, ReactNode, useReducer } from "react";
import { MoviesReducer } from "./MoviesReducer";
import { MoviesContext, initialState } from "./MoviesContext";
import { MovieInterface } from "../interfaces/MovieInterface";

type MoviesProviderProps = {
  children: ReactNode;
};

export const MoviesProvider: FC<MoviesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  const addMovieToWatchList = (movie: MovieInterface) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchList = (id: string) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  return (
    <MoviesContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList: addMovieToWatchList,
        removeMovieFromWatchList: removeMovieFromWatchList,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
