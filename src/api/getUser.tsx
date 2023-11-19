import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

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

  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return (
        user && user.email && user.name && getUserByEmail(user.email, user.name)
      );
    },
    enabled: user != null,
  });

  useEffect(() => {
    if (isAuthenticated) {
      if (user && user.email && user.name) {
        if (data) {
          const userFromBack = data;
          if (userFromBack) {
            setIsLogged(true);
            setUser(userFromBack);
          }
        }
      }
    }
  }, [data]);

  return {
    user,
    isLoading,
    data,
    error,
  };
};
