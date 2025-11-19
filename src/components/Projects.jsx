import React from "react";
import "../css/projects.css";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "React + Vite + GitHub Pages deployment",
      tech: ["React", "JavaScript", "CSS"],
      link: "https://react-frontendproject-drr7tgjod-sebrina-musbah-s-projects.vercel.app",
    },
    {
      title: "Food Order System",
      description: "Full website with admin panel and order management",
      tech: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
      link: "https://YOUR-FOOD-ORDER-LINK",
    },
    {
      title: "Hospital Management System",
      description: "Patient management dashboard",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "#", // No deployment yet
    },
    {
      title: "Node.js CRUD API",
      description: "REST API for user management",
      tech: ["Node.js", "Express", "MySQL"],
      link: "https://YOUR-GITHUB-REPOSITORY",
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
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
