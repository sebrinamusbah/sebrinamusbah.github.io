import React, { useEffect, useState } from "react";
import "../css/ThemeToggle.css"; // import the fancy CSS

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark" : "";
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
