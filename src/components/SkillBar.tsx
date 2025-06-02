import React from 'react';
import { Skill } from '../types';

interface SkillBarProps {
  skill: Skill;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  // Define gradient colors based on skill category
  const getGradient = (category: string) => {
    switch (category) {
      case 'programming':
        return 'from-blue-600 to-blue-400';
      case 'dataScience':
        return 'from-teal-600 to-teal-400';
      case 'devOps':
        return 'from-purple-600 to-purple-400';
      case 'database':
        return 'from-orange-600 to-orange-400';
      default:
        return 'from-gray-600 to-gray-400';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getGradient(skill.category)}`}></div>
        <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
      </div>
    </div>
  );
};

export default SkillBar;