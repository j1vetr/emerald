import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./lib/i18n";

const root = document.getElementById("root")!;

// Prerendered pages ship with server-rendered markup and must be hydrated.
// Dev mode serves an empty root and uses a normal client render.
if (root.firstElementChild) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
