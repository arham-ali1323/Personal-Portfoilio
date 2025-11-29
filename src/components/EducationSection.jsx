import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaAward, FaBook, FaUsers, FaMicroscope } from 'react-icons/fa';

const EducationSection = () => {
  const education = {
    degree: 'Bachelor of Economics',
    institution: 'University of Sahiwal',
    period: '08/2020 – 05/2024',
    location: 'Sahiwal, Pakistan',
    highlights: [
      {
        icon: FaBook,
        title: 'Advanced Coursework',
        description: 'Completed advanced coursework in Economics with strong analytical and quantitative skills (GPA 2.9).',
      },
      {
        icon: FaMicroscope,
        title: 'Research Project',
        description: 'Conducted a research project on the impact of climate change on local ecosystems, presented at a regional science fair.',
      },
      {
        icon: FaUsers,
        title: 'Mentorship & Volunteering',
        description: 'Mentored peers in math and science, and volunteered at STEM outreach events to help younger students explore science and technology.',
      },
    ],
    achievements: [
      'Regional Science Fair Presentation',
      'STEM Outreach Volunteer',
      'Peer Mentorship Program',
      'Analytical Skills Development',
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const highlightVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
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
          {/* Main Education Card */}
          <motion.div
            variants={itemVariants}
            className="glass p-8 rounded-xl mb-8"
          >
            {/* Education Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <div className="mb-4 lg:mb-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {education.degree}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-gray-300">
                  <span className="flex items-center gap-2">
                    🏛️ {education.institution}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendar className="text-primary" />
                    {education.period}
                  </span>
                  <span className="flex items-center gap-2">
                    📍 {education.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Education Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {education.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  variants={highlightVariants}
                  className="glass p-6 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <highlight.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      {highlight.title}
                    </h4>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaAward className="text-primary" />
                Key Achievements
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {education.achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    variants={highlightVariants}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-300 text-sm">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Developed */}
          <motion.div
            variants={itemVariants}
            className="glass p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Skills Developed Through Education
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Analytical Thinking',
                'Research Methods',
                'Data Analysis',
                'Problem Solving',
                'Critical Thinking',
                'Communication',
                'Presentation Skills',
                'Team Collaboration',
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.5 + index * 0.05 
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="px-4 py-2 bg-primary/10 rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors">
                    <span className="text-gray-300 text-sm font-medium">{skill}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass p-6 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Academic Journey
            </h3>
            <div className="flex items-center justify-center space-x-4 text-gray-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm">Years of Study</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2024</div>
                <div className="text-sm">Graduation Year</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Econ</div>
                <div className="text-sm">Field of Study</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
