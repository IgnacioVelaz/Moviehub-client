import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { UserInterface } from "../interfaces/UserInterface";

type UserContextType = {
  user: UserInterface;
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<UserInterface>>;
};

const initialState = {
  user: {
    name: "",
    email: "",
    movies: [],
    id: "",
  },
  setUser: () => {},
  isLogged: false,
  setIsLogged: () => {},
};

export const UserContext = createContext<UserContextType>(initialState);

type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<UserInterface>({
    name: "",
    email: "",
    movies: [],
    id: "",
  });

  const [isLogged, setIsLogged] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, isLogged, setIsLogged }}>
      {children}
    </UserContext.Provider>
  );
};
