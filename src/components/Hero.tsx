
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Code } from "lucide-react";

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const title = "Avinash Jha".split("");
  const roles = ["Full Stack Developer", "Computer Science Student"];
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    setCurrentRole(roles[roleIndex]);
  }, [roleIndex, roles]);

  return (
    <section className="h-screen relative flex items-center justify-center">
      <div className="text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {title.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block text-[#00ed64]"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative"
        >
          <motion.p
            key={currentRole} // Triggers re-animation for each role
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            {currentRole}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center space-x-6"
        >
          <a
            href="https://www.linkedin.com/in/avinash-jha-46b969167/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#00ed64] transition-all transform hover:scale-110"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/Avinash2912"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#00ed64] transition-all transform hover:scale-110"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://leetcode.com/u/Avinash_1912/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#00ed64] transition-all transform hover:scale-110"
          >
            <Code className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
