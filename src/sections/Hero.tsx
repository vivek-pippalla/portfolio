import React from 'react';
import { Github as GitHub, Linkedin, FileText, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16 pb-12 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-64 bg-blue-500 transform -skew-y-6 translate-y-16"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-teal-500 transform skew-y-6 -translate-y-16"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-2/3 mb-10 lg:mb-0">
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 tracking-wide animate-fadeIn">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-slideInFromLeft">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 animate-slideInFromLeft" style={{ animationDelay: '0.1s' }}>
              {personalInfo.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-2xl leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              {personalInfo.objective}
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 flex items-center"
              >
                Contact Me
              </a>
              <a 
                href="#" 
                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-md shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300 flex items-center"
              >
                <FileText size={18} className="mr-2" />
                Resume
              </a>
            </div>
            
            <div className="flex mt-8 space-x-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <a 
                href={personalInfo.github} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHub size={24} />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full"></div>
              <div className="absolute inset-3 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 text-transparent bg-clip-text">VP</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={32} className="text-gray-600 dark:text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;