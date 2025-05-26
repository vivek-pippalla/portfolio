import React from 'react';
import ContactForm from '../components/ContactForm';
import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for any opportunities, collaborations, or just to say hello!
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm currently looking for new opportunities in data science and software development. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col space-y-6 mb-8">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <Mail size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <span>{personalInfo.email}</span>
              </a>
              
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <GitHub size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <span>github.com/vivek-pippalla</span>
              </a>
              
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <Linkedin size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <span>linkedin.com/in/vivek-pippalla</span>
              </a>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-600">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Open to Opportunities</h4>
              <p className="text-gray-700 dark:text-gray-300">
                I'm currently looking for internships and entry-level positions in Data Science, 
                Machine Learning, and Software Development.
              </p>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;