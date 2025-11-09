import React, { useState, useEffect } from "react";
import "../css/navbar.css";

function Navbar({ toggleTheme, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);

  const sections = ["home", "about", "skills", "projects", "contact"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const top =
      element.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({ top, behavior: "smooth" });
    setIsOpen(false);
    setCurrentSection(id); // track which section is active
  };

  // Re-align visible section on resize
  useEffect(() => {
    const handleResize = () => {
      if (!currentSection) return;
      const element = document.getElementById(currentSection);
      if (!element) return;

      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const top =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentSection]);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-container">
        <div className="logo">Sebrina</div>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-links-wrapper ${isOpen ? "active" : ""}`}>
          <ul className="nav-links">
            {sections.map((sec) => (
              <li key={sec} onClick={() => scrollToSection(sec)}>
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </li>
            ))}
          </ul>
        </div>
        <div className="theme-wrapper">
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
