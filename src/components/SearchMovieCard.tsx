import { FC } from "react";
import { MovieInterface } from "../interfaces/MovieInterface";
import Button from "./Button";

type SearchMovieCardProps = {
  movie: MovieInterface;
};

const SearchMovieCard: FC<SearchMovieCardProps> = ({ movie }) => {
  return (
    <div className="flex mb-5">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://themoviedb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            className="w-20 h-auto bg-[#dbdada] rounded-md mr-4 text-transparent"
          />
        ) : (
          <div className="w-20 h-auto bg-[#dbdada] rounded-md mr-4 text-transparent"></div>
        )}
      </div>
      <div className="flex flex-col justify-between">
        <div className="header">
          <h3 className="text-xl font-semibold">{movie.title}</h3>
          <h4 className="text-xl font-light text-primary">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>

        <div className="controls">
          <Button>Add to Watchlist</Button>
        </div>
      </div>
    </div>
  );
};
export default SearchMovieCard;
