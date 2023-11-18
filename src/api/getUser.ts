import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { MoviesContext } from "../contexts/MoviesContext";

const getUserByEmail = async (email: string, name: string) => {
  const response = await axios.post("http://localhost:8081/users", {
    email,
    name,
  });

  return response.data;
};

export const useUserQuery = () => {
  const { user, isAuthenticated } = useAuth0();
  const { setIsLogged, setUser } = useContext(UserContext);
  const { addUserMoviesToWatchList } = useContext(MoviesContext);

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserByEmail(user.email, user.name),
    enabled: isAuthenticated,
  });

  useEffect(() => {
    if (isAuthenticated) {
      if (user && user.email && user.name) {
        if (data) {
          const userFromBack = data;
          if (userFromBack) {
            setIsLogged(true);
            setUser(userFromBack);
            addUserMoviesToWatchList(userFromBack.movies);
          }
        }
      }
    }
  }, [data]);

  return {
    user,
    isLoading,
    data,
  };
};
