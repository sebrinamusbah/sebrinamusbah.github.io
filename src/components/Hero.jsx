import React from "react";
import "../css/hero.css";
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>
          Hi, I'm <span className="highlight">Sebrina Musbah</span>
        </h1>
        <p className="hero-subtitle">
          Full-Stack Web Developer | React, Node.js, MySQL
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/vite.svg" alt="Sebrina Musbah" />
      </div>
    </section>
  );
}

export default Hero;
