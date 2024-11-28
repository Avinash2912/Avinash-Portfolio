import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'NEXAMEET',
    description: 'WebRTC-based P2P Video Call platform with real-time communication',
    tech: ['NodeJs', 'Socket.io', 'WebRTC', 'Express'],
    github: 'https://github.com/yourusername/nexameet',
    live: '#',
  },
  {
    title: 'SPOTON',
    description: 'Real-time location tracking system with interactive interface',
    tech: ['Socket.io', 'Express', 'NodeJS', 'EJS'],
    github: 'https://github.com/yourusername/spoton',
    live: '#',
  },
  {
    title: 'CodeCrank',
    description: 'Highly scaled Online Compiler with Micro-Services Architecture',
    tech: ['Node.js', 'Docker', 'Redis', 'RabbitMQ'],
    github: 'https://github.com/yourusername/codecrank',
    live: '#',
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-[#023430] rounded-lg p-6 shadow-xl border border-[#00ed64]/10"
  >
    <h3 className="text-[#00ed64] text-xl font-bold mb-2">{project.title}</h3>
    <p className="text-gray-300 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="bg-[#00684a] text-[#00ed64] px-2 py-1 rounded-md text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex space-x-4">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#00ed64] text-[#001e2b] px-4 py-2 rounded-md hover:bg-[#00684a] transition-colors"
      >
        <Github className="w-4 h-4" />
        GitHub
      </a>
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 border border-[#00ed64] text-[#00ed64] px-4 py-2 rounded-md hover:bg-[#00684a] transition-colors"
      >
        <ExternalLink className="w-4 h-4" />
        Live Demo
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#001e2b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#00ed64] mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;