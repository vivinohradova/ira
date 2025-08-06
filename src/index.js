import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n.js";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router basename="/ira">
      <React.Suspense fallback={<div>Loading...</div>}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.Suspense>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
