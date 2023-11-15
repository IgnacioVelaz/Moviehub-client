import { FC } from "react";
import { MovieInterface } from "../interfaces/MovieInterface";
import MovieControls from "./MovieControls";

type MovieCardProps = {
  movie: MovieInterface;
  type: "watchlist" | "watched";
};

const MovieCard: FC<MovieCardProps> = ({ movie, type }) => {
  return (
    <div className="w-full rounded-md overflow-hidden relative group">
      <div className="absolute top-0 left-0 w-full h-full border-2 border-solid border-transparent transition-all group-hover:border-secondary"></div>
      {movie.poster_path ? (
        <img
          src={`https://themoviedb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
          className="w-full h-auto bg-[#dbdada] rounded-md mr-4 text-transparent"
        />
      ) : (
        <div className="w-20 h-auto bg-[#dbdada] rounded-md mr-4 text-transparent"></div>
      )}

      <MovieControls movie={movie} type={type} />
    </div>
  );
};
export default MovieCard;
