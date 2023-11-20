import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

const getUserByEmail = async (email: string, name: string, getToken: any) => {
  const token = await getToken();
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/users`,
    {
      email,
      name,
    },
    config
  );

  return response.data;
};

export const useUserQuery = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { setIsLogged, setUser } = useContext(UserContext);

  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return (
        user &&
        user.email &&
        user.name &&
        getUserByEmail(user.email, user.name, getAccessTokenSilently)
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
