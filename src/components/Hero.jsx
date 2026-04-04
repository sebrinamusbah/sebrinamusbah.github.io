import React, { useState, useEffect } from "react";

function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const roles = [
    "Developer",
    "AI engineer",
    "Problem Solver",
    "Software Engineer",
  ];

  useEffect(() => {
    const currentRole = roles[index % roles.length];
    let i = 0;
    const typing = setInterval(() => {
      if (i <= currentRole.length) {
        setText(currentRole.substring(0, i));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setIndex(index + 1);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [index]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center particle-bg bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 animate-slide-up">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="animated-gradient">Hi, I'm Sebrina Musbah</span>
            </h1>

            <div className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              <span className="typewriter inline-block">{text}</span>
              <span className="animate-pulse">_</span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              Full-Stack Developer crafting beautiful, performant web
              applications
            </p>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover-lift shadow-lg hover:shadow-xl transition-all"
              >
                View Projects
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#contact"
                className="px-8 py-3 glass border border-blue-600/30 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover-lift transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-all animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-600/30 animate-spin-slow"></div>
              <img
                src="/vite.svg"
                alt="Sebrina Musbah"
                className="relative w-72 h-72 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
