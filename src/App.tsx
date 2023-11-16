import RouterPaths from "./routes/RouterPaths.routes";
import "./app.t.css";
import { MoviesProvider } from "./contexts/MoviesProvider";
import { Auth0Provider } from "@auth0/auth0-react";

const { VITE_AUTH0_DOMAIN: domain, VITE_AUTH0_CLIENT_ID: clientId } =
  import.meta.env;

const redirectUri: string = window.location.origin + "/watchlist";

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      <MoviesProvider>
        <RouterPaths />
      </MoviesProvider>
    </Auth0Provider>
  );
}

export default App;
