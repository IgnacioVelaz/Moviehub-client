import axios from "axios";

const editMovieType = async (
  movieId: string | number,
  data: string,
  getToken: any
) => {
  const token = await getToken();
  const movieType = { type: data };

  const config = {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const response = await axios.patch(
    `${import.meta.env.VITE_API_URL}/movies/${movieId}`,
    movieType,
    config
  );

  return response.data;
};

export default editMovieType;
