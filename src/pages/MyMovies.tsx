import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import Container from "../components/Container";
import MovieCard from "../components/MovieCard";
import { useAuth0 } from "@auth0/auth0-react";

const MyMovies = () => {
  const { watchlist } = useContext(MoviesContext);
  const { getAccessTokenSilently } = useAuth0();
  const { VITE_API_URL: API_URL } = import.meta.env;

  const getUser = async (getToken: any) => {
    const token = await getToken();

    const res = await fetch(`${API_URL}/users/655659b56a95b0fc2e00cff8`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="p-8">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-primary">My Movies</h1>
        </div>
        {watchlist.length > 0 ? (
          <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type={"watchlist"} />
            ))}
          </div>
        ) : (
          <h2 className="text-gray-500 text-5xl text-center">
            There are no movies in your watchlist
          </h2>
        )}
      </Container>
      <button onClick={() => getUser(getAccessTokenSilently)}>
        Get one user
      </button>
    </div>
  );
};
export default MyMovies;
