import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-300 mr-2">Made with</p>
            <Heart size={16} className="text-red-500 mx-1" />
            <p className="text-gray-300">using React & Tailwind CSS</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;