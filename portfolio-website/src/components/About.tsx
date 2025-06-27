import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  CodeBracketIcon, 
  LightBulbIcon,
  UserIcon 
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const skills = [
    'C', 'C++', 'Python', 'JavaScript', 'Java',
    'React.js', 'Node.js', 'HTML/CSS', 'MongoDB', 'MySQL',
    'Git', 'Linux', 'Data Structures', 'Algorithms'
  ];

  const interests = [
    { icon: CodeBracketIcon, title: 'Software Development', description: 'Building scalable and efficient applications' },
    { icon: LightBulbIcon, title: 'Data Science', description: 'Extracting insights from complex datasets' },
    { icon: AcademicCapIcon, title: 'Research', description: 'Exploring cutting-edge technologies and algorithms' },
    { icon: UserIcon, title: 'UI/UX Design', description: 'Creating intuitive and beautiful user experiences' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate Computer Science student at IIIT Hyderabad with a love for 
            technology, innovation, and solving complex problems through code.
          </p>
        </motion.div>
          {/* Personal Info */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hello! I'm Deepak Pasumarthy</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I'm currently pursuing my Bachelor's degree in Computer Science and Engineering 
                  at the International Institute of Information Technology, Hyderabad. With a strong 
                  foundation in programming and a passion for technology, I enjoy working on projects 
                  that challenge me to think creatively and solve real-world problems.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I have hands-on experience with various programming languages including C, C++, Python, 
                  JavaScript, and Java. I'm passionate about software development, data structures and 
                  algorithms, and building efficient solutions. I also have experience with web technologies 
                  like React, Node.js, and database management systems.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interests Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                className="card group hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg group-hover:bg-primary-200 transition-colors duration-300">
                    <interest.icon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{interest.title}</h4>
                <p className="text-gray-600 text-sm">{interest.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
    </section>
  );
};

export default About;
