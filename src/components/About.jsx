import React from "react";

function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-9 shadow-lg">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Hello! I'm{" "}
              <strong className="text-blue-600 dark:text-blue-400">
                Sebrina Musbah
              </strong>
              , a passionate Full-Stack Web Developer and software engineering
              student. I specialize in building fast, modern, and responsive web
              applications.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              My technical toolkit includes{" "}
              <span className="inline-flex flex-wrap gap-2">
                {["React", "Node.js", "MySQL", "Java", "Bootstrap"].map(
                  (tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </span>
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
              I enjoy solving complex problems, learning new technologies, and
              creating applications that users love. My goal is to deliver
              high-quality projects that are both elegant and efficient.
            </p>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
