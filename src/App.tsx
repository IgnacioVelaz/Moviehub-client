import RouterPaths from "./routes/RouterPaths.routes";
import "./app.t.css";
import { MoviesProvider } from "./contexts/MoviesProvider";

function App() {
  return (
    <MoviesProvider>
      <RouterPaths />
    </MoviesProvider>
  );
}

export default App;
