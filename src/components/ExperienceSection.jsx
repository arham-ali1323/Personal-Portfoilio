import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaCheckCircle } from 'react-icons/fa';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Front-End Web Developer',
      company: 'Independent / Self-Taught',
      period: 'Jan 2024 – Present',
      location: 'Remote',
      type: 'Full-time',
      achievements: [
        'Built multiple responsive web applications using React.js with clean, modern UI and smooth user experiences.',
        'Developed single-page applications and interactive user interfaces as personal and practice projects.',
        'Applied web performance best practices to deliver fast-loading, optimized websites.',
        'Collaborated with online communities and designers, using real-world feedback to improve designs and UX.',
        'Used Git for version control and followed agile-inspired workflows to organize tasks and iterations.',
        'Continuously learning modern front-end tools and libraries to stay aligned with industry trends.',
      ],
      technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Git', 'Performance Optimization'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section*/}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-8 rounded-xl mb-8"
            >
              {/* Experience Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-300">
                    <span className="flex items-center gap-2">
                      <FaBriefcase className="text-primary" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendar className="text-primary" />
                      {exp.period}
                    </span>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30">
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                {/* Location */}
                <div className="text-gray-400">
                  <span className="flex items-center gap-2">
                    📍 {exp.location}
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Key Achievements & Responsibilities
                </h4>
                <div className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      variants={achievementVariants}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-primary/20 to-purple-500/20 text-gray-300 rounded-full text-sm border border-primary/30 hover:border-primary hover:text-white transition-all duration-200"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.5 + techIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass p-6 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Professional Journey
            </h3>
            <div className="flex items-center justify-center space-x-4 text-gray-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Fresher</div>
                <div className="text-sm">Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm">Front-End Focus</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
