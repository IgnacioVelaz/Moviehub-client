import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "./Buttons";
import { useAuth0 } from "@auth0/auth0-react";
import UserData from "./UserData";

const Header = () => {
  const { logout } = useAuth0();

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
            <UserData />
          </ul>
        </div>
      </Container>
    </header>
  );
};
export default Header;
