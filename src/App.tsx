import RouterPaths from "./routes/RouterPaths.routes";
import { MoviesProvider } from "./contexts/MoviesProvider";
import { Auth0Provider } from "@auth0/auth0-react";
3;
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./app.t.css";
import { UserContextProvider } from "./contexts/UserContext";

const {
  VITE_AUTH0_DOMAIN: domain,
  VITE_AUTH0_CLIENT_ID: clientId,
  VITE_AUTH0_AUDIENCE: audience,
} = import.meta.env;

const queryClient = new QueryClient();

const redirectUri: string = window.location.origin + "/watchlist";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: redirectUri,
          audience: audience,
        }}
      >
        <MoviesProvider>
          <UserContextProvider>
            <RouterPaths />
          </UserContextProvider>
        </MoviesProvider>
      </Auth0Provider>
    </QueryClientProvider>
  );
}

export default App;
