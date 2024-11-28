import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Star } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "ZS Campus Beats Hackathon'24",
    description: "Led team to AIR 26 out of 950+ teams"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Competitive Programming",
    description: "Global rank 157 in Codechef Starters 131 Division 4"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Problem Solving",
    description: "Solved 450+ DSA problems across platforms"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-[#001e2b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#00ed64] mb-12">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#023430] p-6 rounded-lg"
            >
              <div className="p-2 bg-[#00684a] rounded-lg w-fit mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-[#00ed64] mb-2">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;