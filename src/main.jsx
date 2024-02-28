import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import App from "./App";

const createRootContainer = document.getElementById("root");

// Use createRoot from "react-dom/client" to create a root and render your app inside it
const root = createRoot(createRootContainer);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
