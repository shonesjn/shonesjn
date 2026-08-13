import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaMicrochip,
  FaUsers,
  FaStar,
  FaCalendarAlt,
} from "react-icons/fa";
import { milestones } from "./Data";

const categoryIcons = {
  Education: <FaGraduationCap className="text-purple-400" />,
  Research: <FaMicrochip className="text-blue-400" />,
  Leadership: <FaUsers className="text-amber-400" />,
};

const categoryColors = {
  Education: "from-purple-500 to-indigo-500 border-purple-500/30 text-purple-300 bg-purple-500/10",
  Research: "from-blue-500 to-cyan-500 border-blue-500/30 text-blue-300 bg-blue-500/10",
  Leadership: "from-amber-500 to-orange-500 border-amber-500/30 text-amber-300 bg-amber-500/10",
};

const Timeline = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const uniqueCategories = Array.from(
    new Set(milestones.map((item) => item.category))
  );
  const categories = uniqueCategories.length > 1 ? ["All", ...uniqueCategories] : [];

  const filteredMilestones =
    activeCategory === "All"
      ? milestones
      : milestones.filter((item) => item.category === activeCategory);

  return (
    <section
      id="timeline"
      className="relative overflow-hidden py-24 text-white"
    >
      {/* Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"
      />

      <div className="relative max-w-[1240px] mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-left"
        >
          <p className="text-purple-500 text-xs font-semibold uppercase tracking-[4px] mb-3">
            Journey & Growth
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Education & <span className="text-purple-500">Academic Journey</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-4 leading-6">
            A chronological timeline of academic achievements, institution milestones, and key focus areas shaping my engineering foundation.
          </p>

          {/* Category Filter Tabs */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${
                    activeCategory === cat
                      ? "bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/25"
                      : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Timeline Container */}
        <div className="relative mt-12">
          {/* Vertical Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/80 via-blue-500/50 to-purple-500/10 -translate-x-1/2 rounded-full shadow-[0_0_12px_rgba(130,69,236,0.5)]" />

          {/* Timeline Items */}
          <AnimatePresence mode="wait">
            <div key={activeCategory} className="space-y-12">
              {filteredMilestones.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      y: 40,
                      x: isEven ? -20 : 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      x: 0,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Center Node / Bullet */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 z-10 flex items-center justify-center">
                      <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[#080b1e] border-2 border-purple-500 shadow-[0_0_15px_rgba(130,69,236,0.6)]">
                        <div className="text-sm">
                          {categoryIcons[item.category] || <FaStar className="text-purple-400" />}
                        </div>
                        <span className="absolute -inset-1 rounded-full bg-purple-500/20 animate-ping pointer-events-none opacity-40" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] w-[calc(100%-3rem)]">
                      <motion.div
                        whileHover={{ y: -4, scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-purple-500/40 rounded-2xl shadow-xl shadow-black/40 transition-colors duration-300 group"
                      >
                        {/* Header Badge */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border ${
                              categoryColors[item.category] || "border-purple-500/30 text-purple-300 bg-purple-500/10"
                            }`}
                          >
                            {categoryIcons[item.category]}
                            {item.category}
                          </span>

                          <span className="flex items-center gap-1.5 text-xs font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                            <FaCalendarAlt size={11} className="text-purple-400" />
                            {item.period}
                          </span>
                        </div>

                        {/* Title & Institution */}
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                          {item.title}
                        </h3>
                        <p className="text-purple-400/90 text-xs font-medium mt-1 mb-3">
                          {item.institution}
                        </p>

                        {/* Description */}
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Highlights */}
                        {item.highlights && (
                          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                            {item.highlights.map((tag, idx) => (
                              <span
                                key={idx}
                                className="text-[10px] text-gray-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-md"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
