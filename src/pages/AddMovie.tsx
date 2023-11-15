import { ChangeEvent, useState } from "react";
import Container from "../components/Container";
import { MovieInterface } from "../interfaces/MovieInterface";
import SearchMovieCard from "../components/SearchMovieCard";

const AddMovie = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=6b4c90e3639bb74749774b61e3804b42&language=en-US&page=1&include_adult=false&query=${event.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });

    results.forEach((result) => console.log(result));
  };

  return (
    <div>
      <Container>
        <div className="py-12 max-w-[600px] mx-auto">
          <div>
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
              className="w-full bg-primary p-4 rounded-md text-white text-xl"
            />
          </div>

          {results.length > 0 && (
            <ul className="mt-5">
              {results.map((movie: MovieInterface) => (
                <li key={movie.id}>
                  <SearchMovieCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AddMovie;
