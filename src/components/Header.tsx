import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "./Buttons";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import { getUserByEmail } from "../api/getUser";
import { UserContext } from "../contexts/UserContext";
import { MoviesContext } from "../contexts/MoviesContext";

const Header = () => {
  const { logout, user, isLoading, isAuthenticated } = useAuth0();
  const { setIsLogged, setUser } = useContext(UserContext);
  const { addUserMoviesToWatchList } = useContext(MoviesContext);

  useEffect(() => {
    if (isAuthenticated) {
      const getUserData = async () => {
        if (user && user.email && user.name) {
          console.log("User authenticated:", user);
          const userFromBack = await getUserByEmail(user.email, user.name);
          if (userFromBack) {
            console.log("user from back:", userFromBack);
            setIsLogged(true);
            setUser(userFromBack);
            addUserMoviesToWatchList(userFromBack.movies);
          }
        }
      };
      getUserData();
    }
  }, [isAuthenticated]);

  if (isLoading) return <p>Loading..</p>;
  console.log(user);
  return (
    <header className="bg-primary text-white">
      <Container>
        <div className="flex justify-between items-center py-2">
          <div className="logo">
            <Link to="/">Home</Link>
          </div>
          <ul className="flex items-center gap-5">
            <li>
              <Link to="/watchlist">Watchlist</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add">
                <Button>Add Movie</Button>
              </Link>
            </li>
            <li>
              <button onClick={() => logout()}>Logout</button>
            </li>
            <div>{isLoading ? <p>Loading...</p> : user?.name}</div>
          </ul>
        </div>
      </Container>
    </header>
  );
};
export default Header;
