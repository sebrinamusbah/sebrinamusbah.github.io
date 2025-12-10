import React from "react";
import "../css/projects.css";

function Projects() {
  const projects = [
    {
      title: "Movie List Website",
      link: "https://react-frontendproject.vercel.app/",
      image: "/assets/movieWeb.png",
    },
    {
      title: "MERN Dashboard",
      link: "https://mern-dashboard-frontend-seven.vercel.app/",
      image: "../assets/dashboard.png",
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
