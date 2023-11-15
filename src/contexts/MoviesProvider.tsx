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

  return (
    <MoviesContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchList: addMovieToWatchList,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
