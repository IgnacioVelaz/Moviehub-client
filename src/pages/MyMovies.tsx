import Container from "../components/Container";
import MovieCard from "../components/MovieCard";
import { useContext, useEffect } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { UserContext } from "../contexts/UserContext";
import { useGetMoviesQuery } from "../api/getMovies";
import { MovieInterfaceDB } from "../interfaces/MovieInterfaceDB";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
import Button from "../components/Buttons";

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
          <h1 className="text-blue text-2xl uppercase w-full text-center p-10">
            My Watchlist
          </h1>
        </div>
        {status === "pending" ? (
          <LoadingSpinner />
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
          <>
            <h2 className="text-gray-500 text-3xl text-center mb-40">
              There are no movies in your watchlist. Go find some!
            </h2>
            <div className="text-center">
              <Link to="/add">
                <Button>
                  <span className="text-3xl">Add Movie</span>
                </Button>
              </Link>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default MyMovies;
