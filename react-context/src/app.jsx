import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home } from "./pages/home/home.jsx";
import { About } from "./pages/about/about.jsx";
import { ThemeProvider } from "./context/ThemeProvider";
import React from "react";
import Button from "./componets/button.jsx";

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}
