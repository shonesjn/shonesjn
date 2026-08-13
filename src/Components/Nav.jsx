import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { IoHome } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { FaHistory } from "react-icons/fa";

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    {
      id: "home",
      icon: <IoHome />,
      label: "Home",
    },
    {
      id: "about",
      icon: <BiUser />,
      label: "About",
    },
    {
      id: "timeline",
      icon: <FaHistory />,
      label: "Milestones",
    },
    {
      id: "skills",
      icon: <GiSkills />,
      label: "Skills",
    },
    {
      id: "work",
      icon: <MdOutlineWork />,
      label: "Work",
    },
    {
      id: "contact",
      icon: <MdOutlineMessage />,
      label: "Contact",
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="
        fixed
        bottom-5
        left-1/2
        -translate-x-1/2
        z-50
        flex
        items-center
        gap-2
        sm:gap-3
        px-3
        py-3
        rounded-full
        bg-zinc-900/80
        backdrop-blur-xl
        border border-white/10
        shadow-2xl
      "
    >
      {navItems.map((item, index) => (
        <Link
          key={item.id}
          to={item.id}
          spy={true}
          smooth={true}
          duration={600}
          offset={-50}
          onSetActive={() => setActiveIndex(index)}
          className="relative cursor-pointer"
        >
          <motion.div
            whileHover={{
              scale: 1.15,
              y: -5,
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
            className={`
              relative
              flex
              items-center
              justify-center
              w-[42px]
              h-[42px]
              sm:w-[50px]
              sm:h-[50px]
              rounded-full
              text-xl
              sm:text-2xl
              transition-colors
              duration-300
              ${
                activeIndex === index
                  ? "bg-white text-zinc-900 shadow-lg shadow-white/20"
                  : "text-zinc-400 hover:text-white"
              }
            `}
          >
            {item.icon}

            {activeIndex === index && (
              <motion.span
                layoutId="activeDot"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="
                  absolute
                  -bottom-1
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-white
                "
              />
            )}
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 5 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="
              pointer-events-none
              absolute
              bottom-full
              left-1/2
              -translate-x-1/2
              mb-3
              px-3
              py-1.5
              rounded-lg
              bg-zinc-900
              border border-white/10
              text-white
              text-xs
              whitespace-nowrap
              shadow-xl
            "
          >
            {item.label}
          </motion.span>
        </Link>
      ))}
    </motion.nav>
  );
};

export default Nav;