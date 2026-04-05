import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "Java", percent: 90 },
    { name: "JavaScript", percent: 85 },
    { name: "PHP", percent: 80 },
    { name: "React", percent: 88 },
    { name: "Node.js", percent: 75 },
    { name: "SQL", percent: 82 },
  ];

  const [index, setIndex] = useState(0);
  const visibleCount = 3;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const next = () => {
    setIndex((prev) => (prev + 1) % skills.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };

  const getVisibleSkills = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(skills[(index + i) % skills.length]);
    }
    return visible;
  };

  const visibleSkills = getVisibleSkills();

  return (
    <section
      id="skills"
      className="py-20 min-h-screen flex items-center bg-gradient-to-br  from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-sky-400 mx-auto rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Technologies I specialize in
          </p>
        </div>

        {/* Carousel */}
        <div className="flex items-center justify-center gap-3 md:gap-6">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="flex-shrink-0 p-2 md:p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all hover:scale-105 focus:outline-none"
            aria-label="Previous"
          >
            <FaChevronLeft className="text-gray-600 dark:text-gray-300 text-sm md:text-base" />
          </button>

          {/* Cards Container */}
          <div className="flex gap-4 md:gap-6 w-2/3">
            {visibleSkills.map((skill, idx) => {
              const offset =
                circumference - (skill.percent / 100) * circumference;
              const isCenter = idx === 1;

              return (
                <div
                  key={skill.name + idx}
                  className={`
                    flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg 
                    py-6 px-3 sm:px-4 md:py-6 md:px-5 text-center transition-all duration-300
                    ${isCenter ? "scale-105 shadow-xl ring-2 ring-sky-400/40" : "opacity-80"}
                    hover:scale-105 hover:shadow-xl cursor-default
                  `}
                >
                  {/* Progress Ring inside card */}
                  <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Background ring */}
                      <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="#e2e8f0"
                        strokeWidth="7"
                        fill="none"
                        className="dark:stroke-gray-700"
                      />
                      {/* Progress ring - light blue gradient */}
                      <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="#38bdf8"
                        strokeWidth="7"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="transition-all duration-700 ease-out"
                      />
                    </svg>
                    {/* Percentage text inside ring */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                        {skill.percent}%
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        mastery
                      </span>
                    </div>
                  </div>

                  {/* Skill Name */}
                  <p className="mt-4 md:mt-5 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </p>

                  {/* Small decorative line */}
                  <div className="w-8 h-0.5 bg-sky-400 mx-auto mt-3 rounded-full"></div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="flex-shrink-0 p-2 md:p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all hover:scale-105 focus:outline-none"
            aria-label="Next"
          >
            <FaChevronRight className="text-gray-600 dark:text-gray-300 text-sm md:text-base" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {skills.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${i === index ? "w-6 bg-sky-400" : "w-1.5 bg-gray-300 dark:bg-gray-600"}
              `}
              aria-label={`Go to skill ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
