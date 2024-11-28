import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#001e2b] bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-[#00ed64] font-bold text-xl">AJ</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['About', 'Experience', 'Projects', 'Education', 'Achievements', 'Coding Profiles', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-[#00ed64] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1If4yXIOOU6P_IhpL5MyH7_Ps3IyoIA0f/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00ed64] text-[#001e2b] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#00684a] transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-[#00ed64]">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;