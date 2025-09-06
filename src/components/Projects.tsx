import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  ArrowTopRightOnSquareIcon,
  FunnelIcon 
} from '@heroicons/react/24/outline';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
  {
    id: 1,
    title: 'MERN Marketplace Platform',
    description: 'Full-stack MERN platform for 1000+ users with unified buy/sell/rent features, dual-role JWT auth, rate limiting, and 20+ reusable MaterialUI components.',
    category: 'web',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'MaterialUI'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepu1965/BuySellRent',
    featured: true
  },
  {
    id: 2,
    title: 'Network File System in C',
    description: 'Scalable multithreaded NFS with LRU caching, concurrent Read-Write locks, audio streaming, and robust error handling over TCP/IP.',
    category: 'systems',
    technologies: ['C', 'Sockets', 'Threads', 'TCP/IP', 'LRU Cache'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepu1965/NFS',
    featured: true
  },
  {
    id: 3,
    title: 'Advanced Unix C-Shell',
    description: 'Custom Unix shell with process control, signal handling (30+), execution time monitoring, and command history using /proc insights.',
    category: 'systems',
    technologies: ['C', 'Unix', 'System Programming', '/proc'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepu1965/C-SHELL',
    featured: true
  },
  {
    id: 4,
    title: 'Olympics CLI Database System',
    description: 'Python CLI for managing 20+ Olympic RDBMS tables with complex SQL JOINs, input validation, and interactive query menus.',
    category: 'database',
    technologies: ['Python', 'MySQL', 'SQL', 'RDBMS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepu1965/Olympics-Database',
    featured: true
  },
  {
    id: 5,
    title: 'Image & Video Generator Platform',
    description: 'Flask-MySQL app with drag-and-drop uploads, JWT-based role auth, and efficient BLOB storage for multi-format media.',
    category: 'web',
    technologies: ['Flask', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepu1965/Image-Video-Generator',
    featured: false
  },
  {
    id: 6,
    title: 'D3.js Crufts Data Dashboard',
    description: 'Interactive dashboard with 3 advanced graphs (sunburst, map, timeline) using 55+ D3 APIs for real-time updates and mobile responsiveness.',
    category: 'database',
    technologies: ['D3.js', 'JavaScript', 'Python', 'HTML', 'CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepu1965/Data-Visualisation-',
    featured: true
  },
  {
    id: 7,
    title: 'ML-Driven Collpitts Oscillator',
    description: 'Arduino-based oscillator circuit using ML regression for adaptive frequency control, <1ms latency over 2400+ sensor readings.',
    category: 'iot',
    technologies: ['Arduino', 'C++', 'Polynomial Regression', 'Sensors'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepu1965/ML-based-SELF-Adaptive-Collpitts-Oscillator-.git',
    featured: false
  },
  {
    id: 8,
    title: 'IoT Fire Detection System',
    description: 'Sensor-based fire alert system using ThingSpeak dashboard, 3 sensor fusion, and sub-5 second alerting with >90% detection accuracy.',
    category: 'iot',
    technologies: ['IoT', 'Sensors', 'ThingSpeak', 'Microcontrollers'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepu1965/IOT-Fire-Detection',
    featured: false
  },
  {
    id: 9,
    title: 'Crowd Detection with YOLO & DETR',
    description: 'Real-time people detection and movement tracking system using DETR, YOLO NAS, and Firebase for cloud updates on edge devices.',
    category: 'iot',
    technologies: ['YOLO NAS', 'DETR', 'Firebase', 'SORT', 'Computer Vision'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepu1965/QIDK-Project.git',
    featured: true
  },
  {
    id: 10,
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with React and Tailwind CSS showcasing projects, skills, and academic background.',
    category: 'web',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 11,
    title: 'CAPTCHA-Cracking',
    description: 'Developed a CNN-LSTM model with CTC loss and OpenCV for CAPTCHA analysis. Created an automated generator for 1000+ synthetic images with varied fonts and noise parameters.',
    category: 'AI',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'CNN/LSTM'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepu1965/CAPCHA-CRACKING.git',
    featured: true
  },
  {
    id: 12,
    title: 'NeuroForge: Multi-Layer Perceptron Framework',
    description: 'Built an MLP framework from scratch with custom backpropagation for classification, regression, and image recognition. Implemented multiple optimizers and activation functions.',
    category: 'AI',
    technologies: ['Python', 'NumPy', 'Pandas'],
    liveUrl: '#',
    githubUrl: 'https://github.com/deepu1965/Nuero-Forge.git',
    featured: true
  }
];


  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'iot', label: 'Algorithms & DSA', count: projects.filter(p => p.category === 'algorithms').length },
    { id: 'database', label: 'Database Systems', count: projects.filter(p => p.category === 'database').length },
    { id: 'systems', label: 'Applications', count: projects.filter(p => p.category === 'applications').length },
    { id: 'AI', label: 'AI&ML Projects', count: projects.filter(p => p.category === 'AI').length }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical projects spanning web development, machine learning, 
            mobile applications with emerging technologies .
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-gray-600 mr-4">
            <FunnelIcon className="h-5 w-5" />
            <span className="font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filter === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`card group hover:scale-105 transition-all duration-300 ${
                project.featured ? 'ring-2 ring-primary-200' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              {project.featured && (
                <div className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}

              {/* Project Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-700 font-medium text-sm transition-colors"
                  >
                    <CodeBracketIcon className="h-4 w-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to see more?</h3>
          <p className="text-gray-600 mb-6">
            Check out my GitHub profile for more projects and contributions to open source.
          </p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CodeBracketIcon className="h-5 w-5" />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
