import React from 'react';
import { GraduationCap, Map, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h3>
            
            <div className="flex items-start mb-8">
              <div className="mr-4 mt-1">
                <GraduationCap size={24} className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">
                  {personalInfo.education.degree}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  {personalInfo.education.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  {personalInfo.education.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  <span className="font-semibold">CGPA:</span> {personalInfo.education.cgpa}
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Relevant Coursework
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 pl-4">
              {personalInfo.education.courses.split(',').map((course, index) => (
                <li key={index} className="pl-2">{course.trim()}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Personal Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Mail size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email</p>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Phone size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Map size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Kakinada, Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Career Objective</h4>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "{personalInfo.objective}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;