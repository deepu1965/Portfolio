import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { ChartBarIcon, ComputerDesktopIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DataVisualization: React.FC = () => {
  const [activeChart, setActiveChart] = useState('skills');

  // Skills proficiency data
  const skillsData = {
    labels: ['JavaScript', 'Python', 'React', 'Node.js', 'Java', 'C++', 'SQL', 'MongoDB'],
    datasets: [
      {
        label: 'Proficiency Level',
        data: [90, 85, 88, 82, 75, 70, 80, 78],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(245, 101, 101, 0.8)',
          'rgba(251, 191, 36, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(239, 68, 68, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(245, 101, 101, 1)',
          'rgba(251, 191, 36, 1)',
          'rgba(168, 85, 247, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  // Academic progress data
  const academicData = {
    labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'],
    datasets: [
      {
        label: 'CGPA',
        data: [6.17, 6.21, 6.50, 6.59,],
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.3,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  };

  // Project categories data
  const projectsData = {
    labels: ['Web Development', 'Machine Learning', 'Mobile Apps', 'Data Science'],
    datasets: [
      {
        data: [2, 2, 1,1],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(139, 92, 246, 0.8)',
          'rgba(245, 101, 101, 0.8)',
          'rgba(251, 191, 36, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(245, 101, 101, 1)',
          'rgba(251, 191, 36, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: activeChart === 'academic' ? 10 : 100,
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  const chartTabs = [
    { id: 'skills', label: 'Skills Proficiency', icon: ChartBarIcon },
    { id: 'academic', label: 'Academic Progress', icon: AcademicCapIcon },
    { id: 'projects', label: 'Project Distribution', icon: ComputerDesktopIcon },
  ];

  const renderChart = () => {
    switch (activeChart) {
      case 'skills':
        return (
          <div className="h-80">
            <Bar data={skillsData} options={chartOptions} />
          </div>
        );
      case 'academic':
        return (
          <div className="h-80">
            <Line data={academicData} options={chartOptions} />
          </div>
        );
      case 'projects':
        return (
          <div className="h-80">
            <Doughnut data={projectsData} options={doughnutOptions} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="data-viz" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Data Visualizations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Interactive charts showcasing my skills, academic progress, and project distribution.
            These visualizations provide insights into my technical competencies and growth journey.
          </p>
        </motion.div>

        {/* Chart Navigation Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {chartTabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveChart(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeChart === tab.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="h-5 w-5" />
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Chart Container */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {chartTabs.find(tab => tab.id === activeChart)?.label}
            </h3>
            <p className="text-gray-600">
              {activeChart === 'skills' && 'Self-assessed proficiency levels in various programming languages and technologies'}
              {activeChart === 'academic' && 'Semester-wise CGPA progression throughout my undergraduate studies'}
              {activeChart === 'projects' && 'Distribution of projects across different technology domains and categories'}
            </p>
          </div>
          
          <motion.div
            key={activeChart}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderChart()}
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Projects Completed', value: '10+', color: 'bg-blue-500' },
            { label: 'Technologies Learned', value: '15+', color: 'bg-green-500' },
            { label: 'Open Source Contributions', value: '0', color: 'bg-purple-500' },
            { label: 'Hackathons Participated', value: '2', color: 'bg-red-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="card text-center group hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-lg">{stat.value.charAt(0)}</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h4>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DataVisualization;
