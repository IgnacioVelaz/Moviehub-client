import { FC, useContext } from "react";
import { MovieInterface } from "../interfaces/MovieInterface";
import Button from "./Buttons";
import postMovie from "../api/postMovie";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../contexts/UserContext";
import { MoviesContext } from "../contexts/MoviesContext";
import { MovieInterfaceDB } from "../interfaces/MovieInterfaceDB";

type SearchMovieCardProps = {
  movie: MovieInterface;
};

const SearchMovieCard: FC<SearchMovieCardProps> = ({ movie }) => {
  const { getAccessTokenSilently } = useAuth0();
  const { user } = useContext(UserContext);
  const { movies, setMovies } = useContext(MoviesContext);

  const alreadySavedMovie = movies.find(
    (movieFromWatchlist) => movieFromWatchlist.tmdb_id === movie.id
  );

  const disabledWatchlistButton = alreadySavedMovie ? true : false;

  const moviePoster = movie.poster_path
    ? `https://themoviedb.org/t/p/w200${movie.poster_path}`
    : "https://res.cloudinary.com/dsinhkkv3/image/upload/c_thumb,w_200,g_face/v1700430158/unavailable_g9q1zp.jpg";

  return (
    <div className="flex mb-5">
      <div className="poster-wrapper">
        <img
          src={moviePoster}
          alt={`${movie.title} Poster`}
          className="w-20 h-auto bg-[#dbdada] rounded-md mr-4 text-transparent"
        />
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
              const formattedMovie = {
                tmdb_id: movie.id,
                name: movie.title,
                score: movie.vote_average,
                tmdb_genresIds: movie.genre_ids,
                poster_image: moviePoster,
                userId: user.id,
                type: "watchlist",
              };
              postMovie(user.id, formattedMovie, getAccessTokenSilently);
              setMovies((prevMovies: MovieInterfaceDB) => [
                ...prevMovies,
                formattedMovie,
              ]);
            }}
            disabled={disabledWatchlistButton}
          >
            Add to Watchlist
          </Button>

          <Button
            onClick={() => {
              const formattedMovie = {
                tmdb_id: movie.id,
                name: movie.title,
                score: movie.vote_average,
                tmdb_genresIds: movie.genre_ids,
                poster_image: moviePoster,
                userId: user.id,
                type: "watched",
              };
              postMovie(user.id, formattedMovie, getAccessTokenSilently);
              setMovies((prevMovies) => [...prevMovies, formattedMovie]);
            }}
            disabled={disabledWatchlistButton}
          >
            Add to Watched
          </Button>
        </div>
      </div>
    </div>
  );
};
export default SearchMovieCard;
