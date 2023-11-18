import axios from "axios";

const getMoviesByUserId = async (userId: string | number, getToken: any) => {
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

export default getMoviesByUserId;
