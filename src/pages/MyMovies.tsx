import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import Container from "../components/Container";
import MovieCard from "../components/MovieCard";

const MyMovies = () => {
  const { watchlist } = useContext(MoviesContext);

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
    </div>
  );
};
export default MyMovies;
