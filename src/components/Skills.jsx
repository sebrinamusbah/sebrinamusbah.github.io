import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "Java", percent: 90 },
    { name: "JavaScript", percent: 85 },
    { name: "PHP", percent: 70 },
    { name: "React", percent: 85 },
    { name: "Node.js", percent: 75 },
    { name: "SQL", percent: 80 },
    { name: "C++", percent: 80 },
  ];

  const [index, setIndex] = useState(0);
  const visibleCount = 3;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const next = () => setIndex((prev) => (prev + 1) % skills.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + skills.length) % skills.length);

  const getVisibleSkills = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(skills[(index + i) % skills.length]);
    }
    return visible;
  };

  const visibleSkills = getVisibleSkills();
  const centerSkill = visibleSkills[1]; // the middle card

  const gradientColors = { start: "#2563eb", end: "#8b5cf6" }; // blue → purple

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-1 pb-20"
    >
      <div className="w-full max-w-6xl p-12 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-3"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Technologies I specialize in
          </p>
        </div>

        {/* Carousel */}
        <div className="flex items-center justify-center gap-6">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            <FaChevronLeft className="text-gray-600 dark:text-gray-300" />
          </button>

          {/* Skill Cards */}
          <div className="flex gap-12 w-2/3 justify-center">
            {visibleSkills.map((skill, idx) => {
              const offset =
                circumference - (skill.percent / 100) * circumference;
              const isCenter = idx === 1;

              return (
                <div
                  key={skill.name + idx}
                  className={`
                    flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg
                    py-12 px-5 text-center transition-all duration-300
                    ${isCenter ? "scale-105 shadow-xl ring-2 ring-sky-400/40" : "opacity-80"}
                    hover:scale-105 hover:shadow-xl
                  `}
                >
                  {/* Progress Ring */}
                  <div className="relative w-32 h-32 mx-auto">
                    <svg className="w-full h-full transform -rotate-90">
                      {/* Background Circle */}
                      <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="#e2e8f0"
                        strokeWidth="7"
                        fill="none"
                        className="dark:stroke-gray-700"
                      />

                      {/* Gradient Progress Circle */}
                      <defs>
                        <linearGradient
                          id={`gradient-ring`}
                          x1="100%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor={gradientColors.start} />
                          <stop offset="100%" stopColor={gradientColors.end} />
                        </linearGradient>
                      </defs>

                      <circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        stroke="url(#gradient-ring)"
                        strokeWidth="7"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="transition-all duration-700 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-gray-800 dark:text-white">
                        {skill.percent}%
                      </span>
                      <span className="text-sm text-gray-400 dark:text-gray-500">
                        mastery
                      </span>
                    </div>
                  </div>

                  {/* Skill Name */}
                  <p className="mt-5 text-base font-semibold text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </p>

                  {/* Gradient line under skill */}
                  <div
                    className="w-10 h-0.5 mx-auto mt-3 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${gradientColors.start}, ${gradientColors.end})`,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            <FaChevronRight className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {skills.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6" : "w-2 bg-gray-300 dark:bg-gray-600"
              }`}
              style={
                i === index
                  ? {
                      background: `linear-gradient(90deg, ${gradientColors.start}, ${gradientColors.end})`,
                    }
                  : {}
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
