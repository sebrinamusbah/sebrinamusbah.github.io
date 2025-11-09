import React from "react";
import "../css/skills.css";

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
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <FaSquareJs /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "SQL", icon: <FaDatabase /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>My Skills</h2>
        <p>Here are some of the technologies and skills I excel at.</p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-badge">
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
