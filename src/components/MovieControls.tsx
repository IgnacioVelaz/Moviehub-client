import { FaEye } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { MovieInterface } from "../interfaces/MovieInterface";
import { FC } from "react";

type MovieControlsProps = {
  movie: MovieInterface;
  type: "watchlist" | "watched";
};

const MovieControls: FC<MovieControlsProps> = ({ movie, type }) => {
  console.log(movie, type);
  return (
    <div className="absolute bottom-5 inline left-1/2 -translate-x-1/2 bg-black/50 rounded-md p-1 border border-white/60 opacity-0 transition-all group-hover:opacity-100">
      <>
        <button className="text-white text-xl p-1 transition-all hover:text-secondary hover:cursor-pointer">
          <FaEye />
        </button>

        <button className="text-white text-xl p-1 transition-all hover:text-secondary hover:cursor-pointer">
          <IoCloseSharp />
        </button>
      </>
    </div>
  );
};
export default MovieControls;
