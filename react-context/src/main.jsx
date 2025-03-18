import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css"; // Importa o CSS global

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
