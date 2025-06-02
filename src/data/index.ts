import { Project, Experience, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sales Performance Analysis Dashboard',
    description: 'Built a complete data analytics pipeline to analyze sales trends, product performance, and regional profitability using a retail sales dataset. Performed data cleaning, exploratory data analysis (EDA), and feature engineering to extract key business insights. Developed interactive dashboards to visualize KPIs like monthly sales, profit margins, top categories, and discount impact.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL', 'Excel', 'Tableau', 'Power BI'],
    link: '#',
    image: 'https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'NLP Using TensorFlow on Amazon Reviews',
    description: 'Built a multi-functional NLP pipeline that performs sentiment classification, summarization, and aspect-based sentiment analysis on Amazon product reviews. Achieved 92% sentiment classification accuracy using a BiLSTM model. Integrated a T5 base model for review summarization and DistilBERT for aspect based sentiment analysis.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'spaCy', 'NLTK', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'HTML', 'CSS', 'JavaScript', 'Flask'],
    link: '#',
    image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'AI & ML Intern',
    company: 'Andhra Pradesh State Skill Development Corporation (APSSDC) | Edunet Foundation',
    duration: 'May 2024 – June 2024',
    description: [
      'Built an NLP model to analyze restaurant reviews, improving sentiment classification accuracy to 87%.',
      'Applied Natural Language Processing (NLP) techniques to analyze customer feedback.'
    ]
  },
  {
    id: 2,
    title: 'Summer Intern',
    company: 'IIIT-Hyderabad',
    duration: 'May 2023 – July 2023',
    description: [
      'Developed a URL Shortener Web App, reducing URL length by 80%.',
      'Built using Flask, HTML, CSS, and JavaScript.'
    ]
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'programming' },
  { name: 'SQL', category: 'programming' },
  { name: 'C++', category: 'programming' },
  
  // Data Science & ML
  { name: 'NumPy', category: 'dataScience' },
  { name: 'Pandas', category: 'dataScience' },
  { name: 'Scikit-learn', category: 'dataScience' },
  { name: 'TensorFlow', category: 'dataScience' },
  { name: 'PyTorch', category: 'dataScience' },
  { name: 'Matplotlib', category: 'dataScience' },
  { name: 'Seaborn', category: 'dataScience' },
  { name: 'Tableau', category: 'dataScience' },
  { name: 'Power BI', category: 'dataScience' },
  
  // DevOps
  { name: 'Git', category: 'devOps' },
  { name: 'Docker', category: 'devOps' },
  
  // Databases
  { name: 'MySQL', category: 'database' },
  { name: 'MongoDB', category: 'database' }
];

export const courses = [
  'Python Data Structures & Algorithms: Ace Coding Interviews – Udemy'
];

export const personalInfo = {
  name: 'Vivek Pippalla',
  title: 'Computer Science & Data Science Student',
  email: 'vivekpippalla@gmail.com',
  phone: '+91 9640465056',
  github: 'https://github.com/vivek-pippalla',
  linkedin: 'http://www.linkedin.com/in/vivek-pippalla',
  education: {
    degree: 'Bachelor of Technology in Computer Science and Data Science',
    institution: 'Kakinada Institute of Engineering and Technology, Kakinada',
    duration: '2021-2025',
    cgpa: '7.55',
    courses: 'Data Structures and Algorithms, Machine learning, Database Management Systems'
  },
  objective: 'To apply my expertise in data science and software development to build impactful solutions while continuously enhancing my technical skills in an evolving technological landscape.'
};