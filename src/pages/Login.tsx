import { useAuth0 } from "@auth0/auth0-react";
import Container from "../components/Container";
import Button from "../components/Buttons";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <div className="bg-primary flex justify-center p-4 mb-12">
        <img
          src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1700480644/Artboard_1_d1n7j7.png"
          alt="moviehub logo"
          className="h-36"
        />
      </div>
      <Container>
        <div className="grid md:grid-cols-2 items-center gap-6 mb-16">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-3xl">
              Unlock Movie Magic with MovieHub, Your Key to Effortless Movie
              Tracking.
            </p>
            <Button onClick={(): Promise<void> => loginWithRedirect()}>
              Join for free!
            </Button>
          </div>
          <img
            src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1700475281/Artboard_1_2x_bftnvr.png"
            alt="Popcorn"
          />
        </div>
      </Container>
      <Container>
        <div className="grid md:grid-cols-2 items-center w-4/5 m-auto mb-16 gap-12">
          <p className="text-2xl text-center md:order-last">
            Powerful search feature! No more guesswork. Just search, click, and
            conquer!
          </p>
          <img
            className="h-48 m-auto"
            src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1700477121/search_illustration_mizmnk.png"
            alt="Search"
          />
        </div>

        <div className="grid md:grid-cols-2 items-center w-4/5 m-auto mb-16">
          <p className="text-2xl text-center">
            Add, organize, and curate your movie picks. Your watchlist, your
            rules!
          </p>
          <img
            className="h-60 m-auto"
            src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1700477121/list_illustration_k6ntg3.png"
            alt="Search"
          />
        </div>

        <div className="grid md:grid-cols-2 items-center w-4/5 m-auto mb-16">
          <p className="text-2xl text-center md:order-last">
            Proudly move movies to your watched list. Because life's too short
            to miss a good movie. Mark it, watch it, conquer it!
          </p>
          <img
            className="h-60 m-auto"
            src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1700477121/pedestal_illustration_l4hfur.png"
            alt="Search"
          />
        </div>

        <div className="grid md:grid-cols-2 items-center w-4/5 m-auto mb-16">
          <p className="text-2xl text-center">
            Unify your watchlist from all streaming platforms into one
            harmonious hub.
          </p>
          <img
            className="h-60 m-auto"
            src="https://res.cloudinary.com/dsinhkkv3/image/upload/v1700477183/movies_illustration_a0qvz0.png"
            alt="Search"
          />
        </div>
      </Container>
    </div>
  );
};
export default Login;
