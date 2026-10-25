import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App.jsx";
import { EffectsProvider } from "./effects.jsx";
import "@fontsource/permanent-marker/latin-400.css"; // handwriting, self-hosted
import "@fontsource/anton/latin-400.css"; // name and page titles, self-hosted
import "@fontsource/atkinson-hyperlegible/latin-400.css"; // body text, self-hosted
import "@fontsource/atkinson-hyperlegible/latin-700.css";
import "@fontsource/atkinson-hyperlegible/latin-400-italic.css";
import "@fontsource/vt323/latin-400.css"; // VCR on-screen display
import "./styles.css";

// HashRouter only for the single-file preview build (no server rewrites there).
// Set the page language in code too, in case a host wraps the page in its own <html>.
document.documentElement.lang = "en";

const Router = import.meta.env.VITE_HASH_ROUTER === "1" ? HashRouter : BrowserRouter;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <EffectsProvider>
        <App />
      </EffectsProvider>
    </Router>
  </React.StrictMode>
);
