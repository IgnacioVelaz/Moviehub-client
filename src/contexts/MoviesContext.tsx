import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { MovieInterfaceDB } from "../interfaces/MovieInterfaceDB";

type MoviesContextType = {
  movies: MovieInterfaceDB[];
  setMovies:
    | Dispatch<SetStateAction<MovieInterfaceDB[]>>
    | Dispatch<SetStateAction<never[]>>;
  watched: MovieInterfaceDB[];
  setWatched:
    | Dispatch<SetStateAction<MovieInterfaceDB[]>>
    | Dispatch<SetStateAction<never[]>>;
};

const initialState = {
  movies: [],
  watched: [],
  setMovies: () => {},
  setWatched: () => {},
};

export const MoviesContext = createContext<MoviesContextType>(initialState);

type MoviesContextProviderProps = {
  children: ReactNode;
};

export const MovieContextProvider = ({
  children,
}: MoviesContextProviderProps) => {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);

  return (
    <MoviesContext.Provider value={{ movies, setMovies, watched, setWatched }}>
      {children}
    </MoviesContext.Provider>
  );
};
