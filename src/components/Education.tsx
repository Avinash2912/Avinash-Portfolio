import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#023430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#00ed64] mb-12">Education</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#001e2b] p-6 rounded-lg"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-[#00684a] rounded-lg">
              <GraduationCap className="w-6 h-6 text-[#00ed64]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#00ed64]">
                Bachelor of Technology, Computer Science Engineering
              </h3>
              <p className="text-gray-300">Guru Gobind Singh Indraprastha University</p>
              <p className="text-gray-400">2021 – 2025</p>
              <p className="text-[#00ed64] mt-2">CGPA: 8.675</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;