import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { MovieInterface } from "../interfaces/MovieInterface";
import { FC, useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import { ControlButton } from "./Buttons";

type MovieControlsProps = {
  movie: MovieInterface;
  type: "watchlist" | "watched";
};

const MovieControls: FC<MovieControlsProps> = ({ movie, type }) => {
  console.log(movie, type);
  const {
    removeMovieFromWatchList,
    addMovieToWatched,
    moveToWatchList,
    removeMovieFromWatched,
  } = useContext(MoviesContext);

  return (
    <div className="absolute bottom-5 inline left-1/2 -translate-x-1/2 bg-black/50 rounded-md p-1 border border-white/60 opacity-0 transition-all group-hover:opacity-100">
      {type == "watchlist" && (
        <>
          <ControlButton onClick={() => addMovieToWatched(movie)}>
            <FaEye />
          </ControlButton>

          <ControlButton
            onClick={() => removeMovieFromWatchList(movie.id.toString())}
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
