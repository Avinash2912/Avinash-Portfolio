import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#023430]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#00ed64] mb-12">Contact Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#001e2b] p-6 rounded-lg shadow-xl"
            >
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-[#00ed64] mr-2" />
                <a
                  href="mailto:avinashjha19@outlook.com"
                  className="text-gray-300 hover:text-[#00ed64] transition-colors"
                >
                  avinashjha19@outlook.com
                </a>
              </div>
              
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 text-[#00ed64] mr-2" />
                <span className="text-gray-300">+91 8595806405</span>
              </div>
              
              <div className="flex items-center mb-4">
                <Linkedin className="w-6 h-6 text-[#00ed64] mr-2" />
                <a
                  href="https://www.linkedin.com/in/avinash-jha-46b969167/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00ed64] transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="flex items-center">
                <Github className="w-6 h-6 text-[#00ed64] mr-2" />
                <a
                  href="https://github.com/Avinash2912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00ed64] transition-colors"
                >
                  GitHub Profile
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#001e2b] p-6 rounded-lg shadow-xl"
            >
              <form className="space-y-4">
                <div>
                  <label className="block text-[#00ed64] mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#023430] text-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#00ed64]"
                  />
                </div>
                <div>
                  <label className="block text-[#00ed64] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#023430] text-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#00ed64]"
                  />
                </div>
                <div>
                  <label className="block text-[#00ed64] mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-[#023430] text-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#00ed64]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#00ed64] text-[#001e2b] py-2 rounded-md hover:bg-[#00684a] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;