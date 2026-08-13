import React from "react";
import { FaGithub, FaLinkedin, FaChevronDown, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import shone from "../assets/Shone.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden text-white"
    >
      {/* ==================================================
          FIXED / STICKY HEADER
      ================================================== */}

      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          left-0
          right-0
          z-50
          h-[72px]
          border-b
          border-white/10
          bg-[#050714]/80
          backdrop-blur-xl
        "
      >
        <div
          className="
            max-w-[1240px]
            h-full
            mx-auto
            px-5
            sm:px-8
            lg:px-10
            flex
            items-center
            justify-between
          "
        >
          {/* ================= LEFT - LOGO ================= */}

          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            className="
              text-xl
              sm:text-2xl
              font-bold
              tracking-wide
              whitespace-nowrap
            "
          >
            <span className="text-gray-300">&lt;</span>
            <span className="text-white">Shone</span>
            <span className="text-purple-500"> Sajan</span>
            <span className="text-gray-300"> /&gt;</span>
          </motion.a>

          {/* ================= RIGHT - SOCIAL ICONS ================= */}

          <div className="flex items-center gap-3 sm:gap-4">

            {/* Email / IEEE Mail */}

            <motion.a
              href="mailto:shonesajanstjohns@ieee.org"
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="
                group
                w-10
                h-10
                sm:w-11
                sm:h-11
                flex
                items-center
                justify-center
                rounded-full
                border
                border-gray-700
                bg-white/[0.03]
                text-gray-300
                hover:text-white
                hover:border-purple-500
                hover:bg-purple-500/10
                transition-all
                duration-300
              "
              aria-label="Email"
              title="shonesajanstjohns@ieee.org"
            >
              <FaEnvelope
                className="
                  text-lg
                  sm:text-xl
                  group-hover:text-purple-400
                  transition-colors
                "
              />
            </motion.a>

            {/* GitHub */}

            <motion.a
              href="https://github.com/shonesjn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="
                group
                w-10
                h-10
                sm:w-11
                sm:h-11
                flex
                items-center
                justify-center
                rounded-full
                border
                border-gray-700
                bg-white/[0.03]
                text-gray-300
                hover:text-white
                hover:border-purple-500
                hover:bg-purple-500/10
                transition-all
                duration-300
              "
              aria-label="GitHub"
            >
              <FaGithub
                className="
                  text-xl
                  sm:text-2xl
                  group-hover:text-purple-400
                  transition-colors
                "
              />
            </motion.a>

            {/* LinkedIn */}

            <motion.a
              href="https://www.linkedin.com/in/shone-sajan/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="
                group
                w-10
                h-10
                sm:w-11
                sm:h-11
                flex
                items-center
                justify-center
                rounded-full
                border
                border-gray-700
                bg-white/[0.03]
                text-gray-300
                hover:text-white
                hover:border-purple-500
                hover:bg-purple-500/10
                transition-all
                duration-300
              "
              aria-label="LinkedIn"
            >
              <FaLinkedin
                className="
                  text-xl
                  sm:text-2xl
                  group-hover:text-purple-400
                  transition-colors
                "
              />
            </motion.a>

          </div>
        </div>
      </motion.header>


      {/* ==================================================
          BACKGROUND EFFECTS
      ================================================== */}

      {/* Left Purple Glow */}

      <motion.div
        className="
          absolute
          -top-20
          -left-20
          w-72
          h-72
          rounded-full
          bg-purple-600/10
          blur-3xl
        "
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right Blue Glow */}

      <motion.div
        className="
          absolute
          bottom-0
          right-0
          w-80
          h-80
          rounded-full
          bg-blue-600/10
          blur-3xl
        "
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* ==================================================
          MAIN CONTAINER
      ================================================== */}

      <div
        className="
          relative
          z-10
          max-w-[1240px]
          mx-auto
          px-5
          sm:px-8
          lg:px-10
          pt-5
          pb-12
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-8
            items-center
            min-h-[calc(100vh-120px)]
          "
        >

          {/* ==================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="
              order-2
              lg:order-1
              text-center
              lg:text-left
            "
          >

            {/* Developer Logo */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="mb-7"
            >

            </motion.div>


            {/* Greeting */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.35,
              }}
              className="
                text-purple-400
                text-3xl
                sm:text-xl
                font-medium
                mb-2
              "
            >
              Hi, I am
            </motion.p>


            {/* Name */}

            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-bold
                leading-tight
              "
            >
              Shone{" "}

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-purple-500
                  to-fuchsia-500
                "
              >
                Sajan
              </span>
            </h1>


            {/* Typing Effect */}

            <h2
              className="
                mt-4
                text-xl
                sm:text-2xl
                md:text-3xl
                font-semibold
              "
            >
              <span className="text-gray-200">
                I am a{" "}
              </span>

              <span className="text-purple-500">
                <ReactTyped
                  strings={[
                    "Software Developer",
                    "AI/ML Enthusiast",
                    "IoT Developer",
                    "Edge Computing Researcher",
                    "Computer Science Engineer",
                  ]}
                  typeSpeed={70}
                  backSpeed={45}
                  backDelay={1200}
                  loop
                />
              </span>
            </h2>


            {/* Description */}

            <p
              className="
                mt-6
                max-w-[620px]
                mx-auto
                lg:mx-0
                text-gray-400
                text-base
                sm:text-lg
                leading-relaxed
              "
            >
              I'm a Computer Science Engineering student passionate about
              building practical solutions using software development,
              Artificial Intelligence, Machine Learning, IoT, Blockchain,
              and Edge Computing. I enjoy exploring emerging technologies
              and developing systems that solve real-world problems.
            </p>


            {/* ==================================================
                LET'S CONNECT BUTTON
            ================================================== */}

            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={600}
              offset={-50}
              className="inline-block"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  inline-flex
                  items-center
                  justify-center
                  mt-7
                  px-7
                  sm:px-9
                  py-3
                  rounded-full
                  text-sm
                  sm:text-base
                  font-bold
                  text-white
                  bg-gradient-to-r
                  from-purple-600
                  to-fuchsia-500
                  shadow-[0_0_25px_rgba(130,69,236,0.35)]
                  hover:shadow-[0_0_35px_rgba(130,69,236,0.6)]
                  transition-shadow
                  duration-300
                  cursor-pointer
                "
              >
                LET'S CONNECT
              </motion.button>
            </Link>

          </motion.div>


          {/* ==================================================
              RIGHT IMAGE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="
              order-1
              lg:order-2
              relative
              flex
              justify-center
              items-center
              min-h-[330px]
              sm:min-h-[450px]
              lg:min-h-[500px]
            "
          >

            {/* Main Purple Glow */}

            <motion.div
              className="
                absolute
                w-[260px]
                h-[260px]
                sm:w-[380px]
                sm:h-[380px]
                lg:w-[450px]
                lg:h-[450px]
                rounded-full
                bg-purple-700/20
                blur-3xl
              "
              animate={{
                scale: [1, 1.12, 1],
                x: [0, 25, -20, 0],
                y: [0, -20, 20, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />


            {/* Blue Glow */}

            <motion.div
              className="
                absolute
                w-[140px]
                h-[140px]
                sm:w-[220px]
                sm:h-[220px]
                rounded-full
                bg-blue-500/20
                blur-3xl
              "
              animate={{
                x: [20, -25, 20],
                y: [-10, 25, -10],
                scale: [1, 1.18, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />


            {/* Rotating Outer Ring */}

            <motion.div
              className="
                absolute
                w-[300px]
                h-[300px]
                sm:w-[420px]
                sm:h-[420px]
                lg:w-[470px]
                lg:h-[470px]
                rounded-full
                border
                border-dashed
                border-purple-500/25
              "
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />


            {/* Second Ring */}

            <motion.div
              className="
                absolute
                w-[285px]
                h-[285px]
                sm:w-[400px]
                sm:h-[400px]
                lg:w-[445px]
                lg:h-[445px]
                rounded-full
                border
                border-purple-400/10
              "
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />


            {/* Floating Profile */}

            <motion.div
              animate={{
                y: [0, -12, 0, 10, 0],
                rotate: [0, 1, 0, -1, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Tilt
                options={{
                  max: 15,
                  scale: 1.04,
                  speed: 1000,
                }}
                className="
                  w-[260px]
                  h-[260px]
                  sm:w-[360px]
                  sm:h-[360px]
                  lg:w-[420px]
                  lg:h-[420px]
                  rounded-full
                  overflow-hidden
                  border-4
                  border-purple-600
                  shadow-[0_0_40px_rgba(130,69,236,0.35)]
                "
              >
                <img
                  src={shone}
                  alt="Shone Sajan - Computer Science Engineer"
                  className="
                    w-full
                    h-full
                    rounded-full
                    object-cover
                  "
                />
              </Tilt>
            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* ==================================================
          TRANSPARENT DOWNWARD SCROLL INDICATOR
      ================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={600}
          offset={-50}
          className="group flex flex-col items-center gap-1.5 cursor-pointer text-gray-400 hover:text-purple-400 transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[3px] font-medium text-gray-400/70 group-hover:text-purple-300 transition-colors">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center justify-center shadow-lg shadow-black/30 group-hover:border-purple-500/40 group-hover:bg-purple-500/10 group-hover:text-purple-300 transition-all duration-300"
          >
            <FaChevronDown className="text-xs text-purple-400 group-hover:text-purple-300" />
          </motion.div>
        </Link>
      </motion.div>

    </section>
  );
};

export default Banner;
