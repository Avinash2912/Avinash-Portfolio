import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-[#001e2b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#00ed64] mb-12">Experience</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#023430] p-6 rounded-lg"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-[#00684a] rounded-lg">
              <Briefcase className="w-6 h-6 text-[#00ed64]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#00ed64]">Tech Team Member</h3>
              <p className="text-gray-300">Hash Define | New Delhi, IN</p>
              <p className="text-gray-400 text-sm">August 2022 – Present</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Managed and coordinated 15+ Technical events with industry leaders</li>
                <li>• Mentored 250+ programmers in Data Structures and Algorithms</li>
                <li>• Successfully conducted hackathons with 15,000+ registrations</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;