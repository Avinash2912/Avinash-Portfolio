// 


import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Languages & Frameworks",
      icon: <Code2 className="w-6 h-6" />,
      items: ["C/C++", "Java", "JavaScript", "Python", "React", "Node.js", "Express"]
    },
    {
      category: "Development Tools",
      icon: <Server className="w-6 h-6" />,
      items: ["Git", "VS Code", "Docker", "WebRTC", "Socket.io"]
    },
    {
      category: "Databases & Others",
      icon: <Database className="w-6 h-6" />,
      items: ["MySQL", "Redis", "RabbitMQ", "Data Structures", "Algorithms"]
    }
  ];

  const paragraphText = "I'm a Computer Science Engineering student at Guru Gobind Singh Indraprastha University, passionate about building innovative solutions and solving complex problems. With a strong foundation in full-stack development and algorithms, I strive to create impactful applications that make a difference.";

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        damping: 25,
        stiffness: 150,
        delay: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-[#023430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#00ed64] mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-gray-300 text-lg leading-relaxed"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {paragraphText}
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="bg-[#001e2b] p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    {skillGroup.icon}
                    <h3 className="text-[#00ed64] font-semibold">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className="bg-[#00684a] text-gray-300 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
