import React from "react";
import "../css/about.css";
function About() {
  return (
    <section id="about" className="about-section">
      {" "}
      <div className="about-container">
        {" "}
        <h2>About Me</h2>{" "}
        <p>
          {" "}
          Hello! I’m <strong>Sebrina Musbah</strong>, a passionate Full-Stack
          Web Developer. I specialize in building fast, modern, and responsive
          web applications using{" "}
          <span className="highlight">
            {" "}
            React, Node.js, MySQL, Java, and Bootstrap{" "}
          </span>{" "}
          .{" "}
        </p>{" "}
        <p>
          {" "}
          I enjoy solving complex problems, learning new technologies, and
          creating applications that users love. My goal is to deliver
          high-quality projects that are both elegant and efficient.{" "}
        </p>{" "}
        <a href="#contact" className="btn btn-primary">
          {" "}
          Get In Touch{" "}
        </a>{" "}
      </div>{" "}
    </section>
  );
}
export default About;
