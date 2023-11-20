import { useContext, useEffect } from "react";
import Container from "../components/Container";
import MovieCard from "../components/MovieCard";
import { UserContext } from "../contexts/UserContext";
import getMoviesByUserId from "../api/getMovies";
import { useAuth0 } from "@auth0/auth0-react";
import { MoviesContext } from "../contexts/MoviesContext";
import { MovieInterfaceDB } from "../interfaces/MovieInterfaceDB";

const Watched = () => {
  const { watched, setWatched } = useContext(MoviesContext);
  const { user } = useContext(UserContext);
  const { getAccessTokenSilently } = useAuth0();
  console.log("USER", user);

  useEffect(() => {
    if (user.id) {
      const getMovies = async () => {
        const response = await getMoviesByUserId(
          user.id,
          getAccessTokenSilently
        );
        const watchedMovies = response.data.movies.filter(
          (movie: MovieInterfaceDB) => movie.type === "watched"
        );
        setWatched(watchedMovies);
      };
      getMovies();
    }
  }, [user]);

  return (
    <div className="p-8">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-blue text-2xl uppercase w-full text-center p-10">
            Watched Movies
          </h1>
        </div>
        {watched && watched.length > 0 ? (
          <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {watched.map((movie) => (
              <MovieCard
                movie={movie}
                type={"watched"}
                key={movie.id}
                userId={user.id}
              />
            ))}
          </div>
        ) : null}
      </Container>
    </div>
  );
};
export default Watched;
