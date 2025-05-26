import React from 'react';
import { Experience } from '../types';
import { Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  isLast: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, isLast }) => {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-900"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 ml-2 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center mb-2">
          <Briefcase size={18} className="text-blue-500 mr-2" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{experience.title}</h3>
        </div>
        
        <div className="mb-3">
          <p className="text-gray-700 dark:text-gray-300 font-medium">{experience.company}</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{experience.duration}</p>
        </div>
        
        <ul className="text-gray-600 dark:text-gray-300 space-y-2">
          {experience.description.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;