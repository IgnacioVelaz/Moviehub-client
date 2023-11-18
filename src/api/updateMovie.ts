import axios from "axios";

const editMovieType = async (
  movieId: string | number,
  data: string,
  getToken: any
) => {
  const token = await getToken();
  const movieType = { type: data };
  console.log("MOVIE TYPE:", movieType);

  const config = {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const response = await axios.patch(
    `http://localhost:8081/movies/${movieId}`,
    movieType,
    config
  );

  return response.data;
};

export default editMovieType;
