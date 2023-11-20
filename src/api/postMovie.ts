// api/postMovie.js
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { MovieInterfaceDB } from "../interfaces/MovieInterfaceDB";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const postMovie = async (userId: string | number, data: any, getToken: any) => {
  const token = await getToken();
  const movieData = data;

  const config = {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    `http://localhost:8081/movies/${userId}`,
    movieData,
    config
  );

  return response.data;
};

export const usePostMovieMutation = () => {
  const { user } = useContext(UserContext);
  const { getAccessTokenSilently } = useAuth0();
  console.log("user mutated:", user);

  const queryClient = useQueryClient();

  const { status, error, mutate } = useMutation({
    mutationFn: (data: MovieInterfaceDB) =>
      postMovie(user?.id, data, getAccessTokenSilently),
    onSuccess: (newMovie) => {
      queryClient.setQueryData(
        ["movies", user?.id],
        (prevMovies: MovieInterfaceDB[]) => {
          const updatedMovies = [...prevMovies, newMovie];
          queryClient.invalidateQueries(["movies", user?.id]);
          return updatedMovies;
        }
      );
    },
  });

  return { status, error, mutate };
};

export default postMovie;
