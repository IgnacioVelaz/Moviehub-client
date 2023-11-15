import { FC, useContext } from "react";
import { MovieInterface } from "../interfaces/MovieInterface";
import Button from "./Buttons";
import { MoviesContext } from "../contexts/MoviesContext";

type SearchMovieCardProps = {
  movie: MovieInterface;
};

const SearchMovieCard: FC<SearchMovieCardProps> = ({ movie }) => {
  const { addMovieToWatchList, addMovieToWatched, watchlist, watched } =
    useContext(MoviesContext);

  const alreadySavedMovie = watchlist.find(
    (movieFromWatchlist) => movieFromWatchlist.id === movie.id
  );

  const alreadyWatchedMovie = watched.find(
    (watchedMovie) => watchedMovie.id === movie.id
  );

  const disabledWatchlistButton =
    alreadySavedMovie || alreadyWatchedMovie ? true : false;

  const disabledWatchedButton = alreadyWatchedMovie ? true : false;

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
          <Button
            onClick={() => {
              addMovieToWatchList(movie);
            }}
            disabled={disabledWatchlistButton}
          >
            Add to Watchlist
          </Button>

          <Button
            onClick={() => {
              addMovieToWatched(movie);
            }}
            disabled={disabledWatchedButton}
          >
            Add to Watched
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SearchMovieCard;
