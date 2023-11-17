import { FC } from "react";
import MovieControls from "./MovieControls";
import { MovieInterfaceDB } from "../interfaces/MovieInterfaceDB";

type MovieCardProps = {
  movie: MovieInterfaceDB;
  type: "watchlist" | "watched";
};

const MovieCard: FC<MovieCardProps> = ({ movie, type }) => {
  return (
    <div className="w-full rounded-md overflow-hidden relative group">
      <div className="absolute top-0 left-0 w-full h-full border-2 border-solid border-transparent transition-all group-hover:border-secondary"></div>
      {movie.poster_image ? (
        <img
          src={`${movie.poster_image}`}
          alt={`${movie.name} Poster`}
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
