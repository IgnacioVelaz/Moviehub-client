import axios from "axios";

const deleteMovieById = async (
  movieId: string | number,
  getToken: any,
  userId: string | number
) => {
  const token = await getToken();

  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(
    `http://localhost:8081/movies/${userId}/${movieId}`,
    config
  );

  return response;
};

export default deleteMovieById;
