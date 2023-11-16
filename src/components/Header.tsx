import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "./Buttons";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { logout, user, isLoading } = useAuth0();

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
