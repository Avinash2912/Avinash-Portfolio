import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Star, Award, Trophy } from 'lucide-react';

const profiles = [
  {
    platform: 'LeetCode',
    icon: <Code2 className="w-6 h-6" />,
    username: 'Avinash_1912',
    stats: 'Solved 450+ DSA Problems',
    link: 'https://leetcode.com/u/Avinash_1912/',
    color: 'from-[#FFA116] to-[#FFB366]'
  },
  {
    platform: 'CodeForces',
    icon: <Trophy className="w-6 h-6" />,
    username: 'Avinash19',
    stats: 'Active Competitive Programmer',
    link: 'https://codeforces.com/profile/Avinash19',
    color: 'from-[#318CE7] to-[#66B2FF]'
  },
  {
    platform: 'GeeksForGeeks',
    icon: <Star className="w-6 h-6" />,
    username: 'avinashjha832',
    stats: 'DSA Problem Solver',
    link: 'https://www.geeksforgeeks.org/user/avinashjha832/',
    color: 'from-[#2F8D46] to-[#66CC80]'
  },
  {
    platform: 'CodeChef',
    icon: <Award className="w-6 h-6" />,
    username: 'Avinash19',
    stats: '2★ (max: 1577)',
    link: '#',
    color: 'from-[#745D0B] to-[#A68A3F]'
  }
];

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-20 bg-[#023430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#00ed64] mb-12">Coding Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.platform}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`block bg-gradient-to-br ${profile.color} p-6 rounded-lg shadow-xl`}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  {profile.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{profile.platform}</h3>
              <p className="text-white/80 text-sm mb-2">@{profile.username}</p>
              <p className="text-white/90 text-sm">{profile.stats}</p>
              <button
                onClick={() => window.open(profile.link, '_blank')}
                className="mt-4 px-4 py-2 bg-white text-[#023430] font-semibold rounded-lg shadow-md hover:bg-gray-200"
              >
                Go to Site
              </button>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;



