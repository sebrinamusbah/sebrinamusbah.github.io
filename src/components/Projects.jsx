import React from "react";
import "../css/projects.css";

function Projects() {
  const projects = [
    {
      title: "Movie List Website",
      link: "https://react-frontendproject-drr7tgjod-sebrina-musbah-s-projects.vercel.app",
      image: "/assets/movieWeb.png",
    },
    {
      title: "Food Order System",
      link: "https://YOUR-FOOD-ORDER-LINK",
      image: "../assets/react.svg",
    },
    {
      title: "Hospital Management System",
      link: "#",
      image: "../assets/hospital-screenshot.png",
    },
    {
      title: "Node.js CRUD API",
      link: "https://YOUR-GITHUB-REPOSITORY",
      image: "../assets/nodejs-api.png",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              className="project-card"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3>{project.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
