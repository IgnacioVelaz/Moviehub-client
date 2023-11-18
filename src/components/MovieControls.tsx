import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FC, useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { ControlButton } from "./Buttons";
import { MovieInterfaceDB } from "../interfaces/MovieInterfaceDB";
import deleteMovieById from "../api/deleteMovie";
import { useAuth0 } from "@auth0/auth0-react";

type MovieControlsProps = {
  movie: MovieInterfaceDB;
  type: "watchlist" | "watched";
  userId: string | number;
};

const MovieControls: FC<MovieControlsProps> = ({ movie, type, userId }) => {
  const { getAccessTokenSilently } = useAuth0();

  console.log(movie, type);
  const {
    removeMovieFromWatchList,
    addMovieToWatched,
    moveToWatchList,
    removeMovieFromWatched,
  } = useContext(MoviesContext);
  console.log(movie);
  return (
    <div className="absolute bottom-5 inline left-1/2 -translate-x-1/2 bg-black/50 rounded-md p-1 border border-white/60 opacity-0 transition-all group-hover:opacity-100">
      {type == "watchlist" && (
        <>
          <ControlButton onClick={() => addMovieToWatched(movie)}>
            <FaEye />
          </ControlButton>

          <ControlButton
            onClick={() => {
              deleteMovieById(movie.id, getAccessTokenSilently, userId);
              removeMovieFromWatchList(movie.id);
            }}
          >
            <IoCloseSharp />
          </ControlButton>
        </>
      )}

      {type === "watched" && (
        <>
          <ControlButton onClick={() => moveToWatchList(movie)}>
            <FaEyeSlash />
          </ControlButton>

          <ControlButton
            onClick={() => removeMovieFromWatched(movie.id.toString())}
          >
            <IoCloseSharp />
          </ControlButton>
        </>
      )}
    </div>
  );
};
export default MovieControls;
