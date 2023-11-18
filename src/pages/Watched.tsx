import { useContext, useEffect } from "react";
import Container from "../components/Container";
import MovieCard from "../components/MovieCard";
import { UserContext } from "../contexts/UserContext";
import getMoviesByUserId from "../api/getMovies";
import { useAuth0 } from "@auth0/auth0-react";
import { MoviesContext2 } from "../contexts/MoviesContext";

const MyMovies = () => {
  const { watched, setWatched } = useContext(MoviesContext2);
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
        const watchedMovies = response.data.movies.filter(
          (movie) => movie.type === "watched"
        );
        setWatched(watchedMovies);
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
        {watched && watched.length > 0 ? (
          <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {watched.map((movie) => (
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
            Come back when you have watched some movies!
          </h2>
        )}
      </Container>
    </div>
  );
};
export default MyMovies;
