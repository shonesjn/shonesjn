import React from "react";
import { Skilldata } from "./Skilldata";
import { Tilt } from "react-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative px-4 sm:px-20 py-20 w-full flex flex-col items-center overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#8245ec]/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#8245ec]/10 blur-3xl pointer-events-none"></div>

      {/* Section Title */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto text-center mb-10">
        <h1 className="pb-2 text-4xl font-bold sm:text-5xl text-white">
          <span className="text-[#8245ec]">SKILLS</span>
        </h1>

        <hr className="w-16 mx-auto border-[#8245ec]/60" />

        <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
          A collection of my technical skills and expertise developed
          through academic work, research, projects, and practical
          experience.
        </p>
      </div>

      {/* Skills Grid */}
      <div
        className="relative z-10 w-full max-w-[1240px] mx-auto grid gap-6 sm:gap-8 
                   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center items-start"
      >
        {Skilldata.map((category, idx) => (
          <div
            key={idx}
            className={`bg-gray-900 backdrop-blur-md px-5 py-7 sm:px-6 sm:py-8 rounded-2xl border border-white/10 
                       shadow-[0_0_20px_rgba(130,69,236,0.3)] hover:shadow-[0_0_25px_rgba(130,69,236,0.6)] 
                       transition-all duration-300 transform hover:scale-105 flex flex-col justify-between
                       sm:w-[370px] w-[300px] min-h-[350px] ${
                         idx === 3 ? "lg:col-start-2" : ""
                       }`}
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-300 mb-6 text-center">
              {category.title}
            </h3>

            {/* Skill Items */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {category.skills.map((skill, skillIdx) => (
                <Tilt
                  key={skillIdx}
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={1000}
                  scale={1.05}
                  transitionSpeed={800}
                  gyroscope={true}
                >
                  <div
                    className="flex items-center justify-center space-x-2 bg-transparent border 
                               border-gray-700 rounded-full py-3.5 px-3 sm:py-2 sm:px-5 
                               hover:border-[#8245ec] transition-colors"
                  >
                    {typeof skill.logo === "string" ? (
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
                      />
                    ) : (
                      <skill.logo className="w-5 h-5 sm:w-7 sm:h-7 text-[#8245ec]" />
                    )}

                    <span className="text-xs sm:text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;