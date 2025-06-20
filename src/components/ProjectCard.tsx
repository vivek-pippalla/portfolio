import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showAllTech, setShowAllTech] = useState(false);

  const displayedTechnologies = showAllTech 
    ? project.technologies 
    : project.technologies.slice(0, 5);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      {project.image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {displayedTechnologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <button
              onClick={() => setShowAllTech(!showAllTech)}
              className="px-2 py-1 text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full flex items-center gap-1 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {showAllTech ? (
                <>Show Less <ChevronUp size={12} /></>
              ) : (
                <>+{project.technologies.length - 5} more <ChevronDown size={12} /></>
              )}
            </button>
          )}
        </div>
        
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View Project <ExternalLink size={16} className="ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;