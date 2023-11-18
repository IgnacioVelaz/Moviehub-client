import axios from "axios";

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

export default postMovie;