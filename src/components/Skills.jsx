import React from "react";
import {
  FaGithub,
  FaJava,
  FaSquareJs,
  FaPhp,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa6";

function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava />, color: "text-red-500" },
    { name: "JavaScript", icon: <FaSquareJs />, color: "text-yellow-500" },
    { name: "PHP", icon: <FaPhp />, color: "text-purple-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-600" },
    { name: "React", icon: <FaReact />, color: "text-cyan-500" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
    { name: "SQL", icon: <FaDatabase />, color: "text-blue-600" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`text-5xl ${skill.color} mb-3 flex justify-center transition-transform group-hover:scale-110 duration-300`}
              >
                {skill.icon}
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-semibold">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
