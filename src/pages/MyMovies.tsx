import Container from "../components/Container";
import MovieCard from "../components/MovieCard";
import { useContext, useEffect } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { UserContext } from "../contexts/UserContext";
import { useGetMoviesQuery } from "../api/getMovies";
import { MovieInterfaceDB } from "../interfaces/MovieInterfaceDB";

const MyMovies = () => {
  const { setMovies, movies: moviesFromContext } = useContext(MoviesContext);
  const { user } = useContext(UserContext);

  const { movies, status, error } = useGetMoviesQuery();

  useEffect(() => {
    if (status === "success" && movies) {
      const watchListMovies = movies.data.movies.filter(
        (movie: MovieInterfaceDB) => movie.type === "watchlist"
      );
      setMovies(watchListMovies);
    }
  }, [status, movies, setMovies]);

  return (
    <div className="p-8">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-primary">My Movies</h1>
        </div>
        {status === "pending" ? (
          <p>Loading...</p>
        ) : status === "error" ? (
          <p>Error: {error?.message}</p>
        ) : moviesFromContext && moviesFromContext.length > 0 ? (
          <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {moviesFromContext.map((movie) => (
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
