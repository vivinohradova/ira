import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n.js";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
