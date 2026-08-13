import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
  FaTimes,
} from "react-icons/fa";
import { projects } from "./Data";

const Work = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section
      id="work"
      className="relative overflow-hidden py-20 text-white"
    >
      {/* Background Animation */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative max-w-[1240px] mx-auto px-5 mb-12"
      >
        <p className="text-purple-500 text-xs font-semibold uppercase tracking-[4px] mb-3">
          My Work
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Featured <span className="text-purple-500">Projects</span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-4 leading-6">
          A collection of projects built with modern web technologies,
          responsive design, and interactive user experiences.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="relative max-w-[1240px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            className="group flex flex-col bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-purple-500/40 rounded-2xl overflow-hidden shadow-lg shadow-black/40 transition-colors duration-300"
          >
            {/* VIDEO */}
            <div
              className="relative aspect-video overflow-hidden bg-gray-950 cursor-pointer"
              onClick={() =>
                project.video && setSelectedVideo(project.video)
              }
            >
              {project.video ? (
                <motion.video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900/80 text-gray-500 p-4">
                  <span className="text-xs font-medium">Demo Preview Coming Soon</span>
                </div>
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

              {/* Watch Demo */}
              {project.video && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-full text-xs font-semibold">
                    <FaPlay size={10} />
                    Watch Demo
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
              <span className="text-[10px] text-purple-400 uppercase tracking-[3px] font-medium">
                Project {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-lg font-bold mt-1.5 mb-2 leading-snug">
                {project.title}
              </h3>

              <p className="text-gray-400 text-xs leading-5 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    whileHover={{
                      scale: 1.08,
                      y: -1,
                    }}
                    className="text-[10px] text-purple-300 bg-purple-500/10 border border-purple-500/10 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Buttons */}
              <div className={`grid ${project.webapp ? "grid-cols-2" : "grid-cols-1"} gap-2.5`}>
                {/* GitHub */}
                <motion.a
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 py-2.5 rounded-xl text-[11px] font-semibold"
                >
                  <FaGithub size={12} />
                  View Code
                </motion.a>

                {/* Live Demo */}
                {project.webapp && (
                  <motion.a
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-purple-600 hover:bg-purple-700 py-2.5 rounded-xl text-[11px] font-semibold"
                  >
                    <FaExternalLinkAlt size={10} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-5"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                y: 30,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-gray-950 rounded-2xl overflow-hidden border border-white/10"
            >
              {/* Close */}
              <motion.button
                whileHover={{
                  scale: 1.1,
                  rotate: 90,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 z-10 bg-black/70 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <FaTimes />
              </motion.button>

              {/* Full Video */}
              <video
                src={selectedVideo}
                controls
                autoPlay
                muted
                playsInline
                className="w-full max-h-[80vh] aspect-video"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;

