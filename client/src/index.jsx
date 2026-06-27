import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/**
 * Entry point for the Inventra React application.
 * Renders the App component into the root DOM element.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
