import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FC, useContext } from "react";
import { ControlButton } from "./Buttons";
import { MovieInterfaceDB } from "../interfaces/MovieInterfaceDB";
import deleteMovieById from "../api/deleteMovie";
import { useAuth0 } from "@auth0/auth0-react";
import { MoviesContext } from "../contexts/MoviesContext";
import editMovieType from "../api/updateMovie";

type MovieControlsProps = {
  movie: MovieInterfaceDB;
  type: "watchlist" | "watched";
  userId: string | number;
};

const MovieControls: FC<MovieControlsProps> = ({ movie, type, userId }) => {
  const { getAccessTokenSilently } = useAuth0();
  const { setMovies } = useContext(MoviesContext);
  const { setWatched } = useContext(MoviesContext);

  return (
    <div className="absolute bottom-5 inline left-1/2 -translate-x-1/2 bg-black/50 rounded-md p-1 border border-white/60 opacity-0 transition-all group-hover:opacity-100">
      {type == "watchlist" && (
        <>
          <ControlButton
            onClick={() => {
              editMovieType(movie.id, "watched", getAccessTokenSilently);
              setMovies((prevMovies: any) => {
                return prevMovies.filter(
                  (item: MovieInterfaceDB) => item.id !== movie.id
                );
              });
            }}
          >
            <FaEye />
          </ControlButton>

          <ControlButton
            onClick={() => {
              deleteMovieById(movie.id, getAccessTokenSilently, userId);
              setMovies((prevMovies: any) => {
                return prevMovies.filter(
                  (item: MovieInterfaceDB) => item.id !== movie.id
                );
              });
            }}
          >
            <IoCloseSharp />
          </ControlButton>
        </>
      )}

      {type === "watched" && (
        <>
          <ControlButton
            onClick={() => {
              editMovieType(movie.id, "watchlist", getAccessTokenSilently);
              setWatched((prevWatched: any) => {
                return prevWatched.filter(
                  (item: MovieInterfaceDB) => item.id !== movie.id
                );
              });
            }}
          >
            <FaEyeSlash />
          </ControlButton>

          <ControlButton
            onClick={() => {
              deleteMovieById(movie.id, getAccessTokenSilently, userId);

              setWatched((prevWatched: any) => {
                return prevWatched.filter(
                  (item: MovieInterfaceDB) => item.id !== movie.id
                );
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
