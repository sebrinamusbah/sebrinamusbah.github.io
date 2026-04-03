import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sebrina Musbah
              </span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              Full-Stack Web Developer | React, Node.js, MySQL
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              Passionate software engineering student creating elegant solutions
              to complex problems.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src="/vite.svg"
                alt="Sebrina Musbah"
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
