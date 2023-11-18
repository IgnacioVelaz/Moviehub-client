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
  setMovies: Dispatch<SetStateAction<MovieInterfaceDB[]>>;
};

const initialState = {
  movies: [],
  setMovies: () => {},
};

export const MoviesContext2 = createContext<MoviesContextType>(initialState);

type MoviesContextProviderProps = {
  children: ReactNode;
};

export const MovieContextProvider = ({
  children,
}: MoviesContextProviderProps) => {
  const [movies, setMovies] = useState([]);

  return (
    <MoviesContext2.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext2.Provider>
  );
};
