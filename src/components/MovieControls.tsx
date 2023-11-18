import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FC, useContext } from "react";
import { ControlButton } from "./Buttons";
import { MovieInterfaceDB } from "../interfaces/MovieInterfaceDB";
import deleteMovieById from "../api/deleteMovie";
import { useAuth0 } from "@auth0/auth0-react";
import { MoviesContext2 } from "../contexts/MoviesContext";

type MovieControlsProps = {
  movie: MovieInterfaceDB;
  type: "watchlist" | "watched";
  userId: string | number;
};

const MovieControls: FC<MovieControlsProps> = ({ movie, type, userId }) => {
  console.log("MOVIE:", movie);
  const { getAccessTokenSilently } = useAuth0();
  const { setMovies } = useContext(MoviesContext2);
  const { setWatched } = useContext(MoviesContext2);

  console.log(movie, type);

  console.log(movie);
  return (
    <div className="absolute bottom-5 inline left-1/2 -translate-x-1/2 bg-black/50 rounded-md p-1 border border-white/60 opacity-0 transition-all group-hover:opacity-100">
      {type == "watchlist" && (
        <>
          <ControlButton onClick={() => console.log("added to watched")}>
            <FaEye />
          </ControlButton>

          <ControlButton
            onClick={() => {
              deleteMovieById(movie.id, getAccessTokenSilently, userId);
              setMovies((prevMovies) => {
                return prevMovies.filter((item) => item.id !== movie.id);
              });
            }}
          >
            <IoCloseSharp />
          </ControlButton>
        </>
      )}

      {type === "watched" && (
        <>
          <ControlButton onClick={() => console.log("moved to watchlist")}>
            <FaEyeSlash />
          </ControlButton>

          <ControlButton
            onClick={() => {
              deleteMovieById(movie.id, getAccessTokenSilently, userId);

              setWatched((prevWatched) => {
                return prevWatched.filter((item) => item.id !== movie.id);
              });
            }}
          >
            <IoCloseSharp />
          </ControlButton>
        </>
      )}
    </div>
  );
};
export default MovieControls;
