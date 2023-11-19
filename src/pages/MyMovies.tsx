import { useContext, useEffect } from "react";
import Container from "../components/Container";
import MovieCard from "../components/MovieCard";
import { UserContext } from "../contexts/UserContext";
import getMoviesByUserId from "../api/getMovies";
import { useAuth0 } from "@auth0/auth0-react";
import { MoviesContext } from "../contexts/MoviesContext";
import { MovieInterfaceDB } from "../interfaces/MovieInterfaceDB";

const MyMovies = () => {
  const { movies, setMovies } = useContext(MoviesContext);
  const { user } = useContext(UserContext);
  const { getAccessTokenSilently } = useAuth0();
  console.log("USER", user);

  useEffect(() => {
    if (user.id) {
      const getMovies = async () => {
        const response = await getMoviesByUserId(
          user.id,
          getAccessTokenSilently
        );
        const watchListMovies = response.data.movies.filter(
          (movie: MovieInterfaceDB) => movie.type === "watchlist"
        );
        setMovies(watchListMovies);
      };
      getMovies();
    }
  }, [user]);

  return (
    <div className="p-8">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-primary">My Movies</h1>
        </div>
        {movies && movies.length > 0 ? (
          <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {movies.map((movie) => (
              <MovieCard
                movie={movie}
                type={"watchlist"}
                key={movie.id}
                userId={user.id}
              />
            ))}
          </div>
        ) : (
          <h2 className="text-gray-500 text-5xl text-center">
            There are no movies in your watchlist
          </h2>
        )}
      </Container>
    </div>
  );
};
export default MyMovies;
