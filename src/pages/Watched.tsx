import { useContext } from "react";
import Container from "../components/Container";
import MovieCard from "../components/MovieCard";

const Watched = () => {
  const watched = [];
  return (
    <div className="p-8">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-primary">Watched Movies</h1>
        </div>
        {watched.length > 0 ? (
          <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {watched.map((movie) => (
              <MovieCard movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="text-gray-500 text-5xl text-center">
            There are no movies in your watched list. Go watch some!!
          </h2>
        )}
      </Container>
    </div>
  );
};
export default Watched;
