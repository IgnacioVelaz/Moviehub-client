import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "./Buttons";
import UserData from "./UserData";

const Header = () => {
  return (
    <header className="bg-primary text-white">
      <Container>
        <div className="flex justify-between items-center py-2">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1700480644/Artboard_1_d1n7j7.png"
              alt="moviehub logo"
              className="h-16"
            />
          </div>
          <ul className="flex items-center gap-5">
            <li>
              <Link to="/watchlist">
                <p className="hover:text-secondary">Watchlist</p>
              </Link>
            </li>
            <li>
              <Link to="/watched">
                <p className="hover:text-secondary">Watched</p>
              </Link>
            </li>
            <li>
              <Link to="/add">
                <Button>Add Movie</Button>
              </Link>
            </li>

            <UserData />
          </ul>
        </div>
      </Container>
    </header>
  );
};
export default Header;
