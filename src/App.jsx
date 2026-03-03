import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";

import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Research from "./pages/Research";
import ReferenceCasePage from "./pages/ReferenceCasePage";
import WhitepaperPage from "./pages/WhitepaperPage";
import Press from "./pages/Press";
import About from "./pages/About";
import ArticleGIC from "./pages/ArticleGIC";

// --- Force Dark Theme ---
const useDarkTheme = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Main App Component ---
export default function App() {
  useDarkTheme();

  return (
    <Router>
      <ScrollToTop />
      <div style={{ width: "100%", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/reference-case" element={<ReferenceCasePage />} />
            <Route path="/whitepaper" element={<WhitepaperPage />} />
            <Route path="/press" element={<Press />} />
            <Route path="/about" element={<About />} />
            <Route path="/research/gic-2028" element={<ArticleGIC />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
