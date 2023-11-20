import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useQuery } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";

export const getMoviesByUserId = async (userId: string | number, getToken) => {
  const token = await getToken();
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const response = await axios.get(
    `http://localhost:8081/movies/${userId}`,
    config
  );

  return response;
};

export const useGetMoviesQuery = () => {
  const { user } = useContext(UserContext);
  const { getAccessTokenSilently } = useAuth0();

  const { data, status, error } = useQuery({
    queryKey: ["movies", user?.id],
    queryFn: () => getMoviesByUserId(user?.id, getAccessTokenSilently),
    enabled: user.name.length > 3,
  });

  return {
    movies: data,
    status,
    error,
  };
};

export default getMoviesByUserId;
