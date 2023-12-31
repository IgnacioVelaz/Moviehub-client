import { FC } from "react";
import MovieControls from "./MovieControls";
import { MovieInterfaceDB } from "../interfaces/MovieInterfaceDB";
import Rating from "./Rating";

type MovieCardProps = {
  movie: MovieInterfaceDB;
  type: "watchlist" | "watched";
  userId: string | number;
};

const MovieCard: FC<MovieCardProps> = ({ movie, type, userId }) => {
  return (
    <div
      className="w-full rounded-md overflow-hidden relative group"
      key={movie.tmdb_id}
    >
      <div className="absolute top-0 left-0 w-full h-full border-2 border-solid border-transparent transition-all group-hover:border-secondary"></div>
      {movie.poster_image && (
        <img
          src={`${movie.poster_image}`}
          alt={`${movie.name} Poster`}
          className="w-full h-auto bg-[#dbdada] rounded-md mr-4 text-transparent mb-2"
        />
      )}
      <div>
        {movie.score > 0 && <Rating rating={movie.score / 2} />}
        <div className="p-2">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {movie.name}
          </h5>
        </div>
      </div>
      <MovieControls movie={movie} type={type} userId={userId} />
    </div>
  );
};
export default MovieCard;
