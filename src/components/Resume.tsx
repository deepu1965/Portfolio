import React from 'react';
import { motion } from 'framer-motion';
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  TrophyIcon,
  DocumentArrowDownIcon 
} from '@heroicons/react/24/outline';

const Resume: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'International Institute of Information Technology, Hyderabad',
      period: '2023 - 2027 (Expected)',
      gpa: 'CGPA: 6.59/10',
      description: 'Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Computer Networks, Operating Systems'
    },
    {
      degree: 'Higher Secondary Education (Class XII)',
      institution: 'Sri Chaitanya Junior College,Gosala,Vijayawada',
      period: '2021 - 2023',
      gpa: 'Percentage: 95.8%',
      description: 'MPC (Mathematics, Physics, Chemistry) with Computer Science'
    },
    {
      degree: 'Secondary Education (Class X)',
      institution: 'DR KKR Gowtham School,Anadapuram',
      period: '2016 - 2021',
      gpa: 'CGPA: 10/10',
      description: 'All subjects with perfect score'
    }
  ];

  const experience = [
    {
      title: 'Mobile APP Developer Intern',
      company: 'NVIRI Solutions',
      period: 'Jan 2025 - Apr 2025',
      location: 'Remote',
      description: [
        'Pursuing Bachelor of Technology in Computer Science & Engineering',
        'Maintaining CGPA of 6.59/10 with consistent academic performance',
        'Working on various academic projects and assignments related to CS',
        'Actively participating in college events'
      ]
    },
    {
      title: 'Research Student',
      company: 'IIIT Hyderabad-LTRC(Language Technologies Research Center)',
      period: '2025 - Present',
      location: 'Hyderabad, India',
      description: [
        'Developed various programming solutions using C, C++, Python, and Java',
        'Implemented data structures like linked lists, trees, graphs, and hash tables',
        'Solved algorithmic problems including sorting, searching, and graph algorithms',
        'Created web applications using HTML, CSS, JavaScript, and React'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Maintaining CGPA of 6.59/10 in Computer Science Engineering at IIIT Hyderabad',
      date: '2023-Present'
    },
    {
      title: 'JEE Mains Rank ',
      description: 'Achieved a rank of 1563 in JEE Mains 2023',
      date: '2023'
    },
    {
      title: 'Outstanding Performance in Class XII',
      description: 'Scored 95.8% in Higher Secondary Education with MPC stream',
      date: '2023'
    },
    {
      title: 'JEE Advanced Rank',
      description: 'Achieved a rank of 3384 in JEE Mains 2023',
      date: '2023'
    }
  ];

  const skills = {
    'Programming Languages': ['C', 'C++', 'Python', 'Java', 'JavaScript', 'HTML', 'CSS'],
    'Web Technologies': ['React.js', 'Node.js', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    'Databases': ['MySQL', 'MongoDB','PostgreSQL'],
    'Tools & Technologies': ['Git', 'GitHub', 'Linux', 'VS Code', 'Command Line'],
    'Core Concepts': ['Data Structures', 'Algorithms', 'OOPs', 'Software Engineering', 'Computer Networks','Operating Systems','Database Systems']
  };

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Resume</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            My educational background, professional experience, and key achievements
            that showcase my journey in technology and computer science.
          </p>
          <motion.button
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <DocumentArrowDownIcon className="h-5 w-5" />
            Download Resume
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-primary-600 p-3 rounded-lg mr-4">
                <AcademicCapIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                  <p className="text-primary-600 font-medium mb-1">{edu.institution}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-500 text-sm">{edu.period}</span>
                    <span className="text-green-600 font-medium text-sm">{edu.gpa}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-secondary-600 p-3 rounded-lg mr-4">
                <BriefcaseIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{exp.title}</h4>
                  <p className="text-primary-600 font-medium mb-1">{exp.company}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                    <span className="text-gray-500 text-sm">{exp.location}</span>
                  </div>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <span
                      key={skill}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <div className="bg-yellow-500 p-3 rounded-lg mr-4">
              <TrophyIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Achievements & Recognition</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="card border-l-4 border-yellow-500"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">{achievement.title}</h4>
                  <span className="text-yellow-600 font-medium text-sm">{achievement.date}</span>
                </div>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
