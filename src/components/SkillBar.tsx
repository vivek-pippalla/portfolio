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
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div 
          className={`h-2.5 rounded-full bg-gradient-to-r ${getGradient(skill.category)}`} 
          style={{ width: `${skill.level}%` }}
        >
        </div>
      </div>
    </div>
  );
};

export default SkillBar;