import { FC, ReactNode, useEffect, useReducer } from "react";
import { MoviesReducer } from "./MoviesReducer";
import { MoviesContext, initialState } from "./MoviesContext";
import { MovieInterface } from "../interfaces/MovieInterface";

type MoviesProviderProps = {
  children: ReactNode;
};

export const MoviesProvider: FC<MoviesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchList = (movie: MovieInterface) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchList = (id: string) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieToWatched = (movie: MovieInterface) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  };

  const moveToWatchList = (movie: MovieInterface) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatched = (id: string) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
  };

  return (
    <MoviesContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList: addMovieToWatchList,
        removeMovieFromWatchList: removeMovieFromWatchList,
        addMovieToWatched: addMovieToWatched,
        moveToWatchList: moveToWatchList,
        removeMovieFromWatched: removeMovieFromWatched,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
