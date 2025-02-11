import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Home from "./components/Home";

const theme = {
  colors: {
    primary: "#4A90E2", // Lighter blue (previously might have been a darker blue)
    primaryLight: "#72A7E8", // Even lighter shade
    primaryDark: "#2171CD", // Slightly darker for contrast
    // ... existing code ...
  },
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
