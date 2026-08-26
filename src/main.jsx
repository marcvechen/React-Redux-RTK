import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router";
import "./app/styles-modern.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
