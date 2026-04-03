import React from "react";

function Projects() {
  const projects = [
    {
      title: "Movie List Website",
      description: "A responsive movie browsing app with search functionality",
      link: "https://react-frontendproject.vercel.app/",
      image: "/assets/movieWeb.png",
      tech: ["React", "API Integration"],
    },
    {
      title: "MERN Dashboard",
      description: "Full-stack admin dashboard with analytics",
      link: "https://mern-dashboard-frontend-seven.vercel.app/",
      image: "../assets/dashboard.png",
      tech: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "Hospital Management System",
      description: "Comprehensive healthcare management platform",
      link: "#",
      image: "../assets/hospital-screenshot.png",
      tech: ["Java", "Spring Boot", "MySQL"],
    },
    {
      title: "Node.js CRUD API",
      description: "RESTful API with authentication and database integration",
      link: "https://YOUR-GITHUB-REPOSITORY",
      image: "../assets/nodejs-api.png",
      tech: ["Node.js", "Express", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent works and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x200?text=Project+Preview";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  View Project →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
