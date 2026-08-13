import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-5 py-20 flex items-center overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-[#8245ec]/15 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#8245ec]/10 blur-3xl pointer-events-none"></div>



      <div className="relative mx-auto grid max-w-[1240px] md:px-6 px-3 grid-cols-1 items-center gap-10 text-white sm:grid-cols-2">
        
        {/* Heading */}
        <div>
          <h1 className="pb-2 text-4xl font-bold sm:text-5xl">
            About <span className="text-[#8245ec]">Me</span>
          </h1>

          <hr className="w-16 border-[#8245ec]/60" />
        </div>

        {/* About Content */}
        <div className="sm:col-span-2">
          <p className="py-3 text-xl font-semibold text-[#8245ec] sm:text-2xl">
            Computer Science Engineer
          </p>

          <p className="pt-2 text-base leading-relaxed text-gray-200 sm:text-lg">
            Hi, I'm Shone Sajan, a Computer Science Engineering student at
            Saintgits College of Engineering with a strong interest in{" "}
            <span className="font-bold text-[#8245ec]">
              Software Development, AI/ML, IoT, Blockchain, and Edge Computing.
            </span>{" "}
            I enjoy building practical solutions that combine software
            engineering with emerging technologies.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
            I have hands-on experience developing full-stack applications,
            AI/ML-based systems, and IoT solutions using technologies such as
            Java, Python, JavaScript, React.js, Node.js, Express.js, MongoDB,
            and ESP32. My projects include smart agriculture platforms,
            AI-powered interview systems, intelligent recommendation systems,
            and web-based applications.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
            I have also gained research exposure through my affiliation with
            <span className="font-bold text-[#8245ec]">
              {" "}IIIT Hyderabad
            </span>
            , where I explored IoT system design, sensor networks, edge
            computing, and device connectivity. Alongside technical work,
            I actively contribute to student communities through leadership
            and coordination roles in IEEE, IEDC, the Saintgits Blockchain
            Club, and other student organizations.
          </p>

          {/* Social Icons */}
          <div className="flex justify-start gap-6 pt-8 text-3xl sm:gap-8 sm:text-4xl">

            {/* GitHub */}
            <a
              href="https://github.com/shonesjn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-transform duration-300 hover:scale-110 hover:text-[#8245ec]"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shone-sajan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-transform duration-300 hover:scale-110 hover:text-[#8245ec]"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;