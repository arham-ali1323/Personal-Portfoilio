import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillsData = [
    {
      category: 'Frontend & Web',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Responsive Design', level: 88 },
      ],
      icon: '🌐',
    },
    {
      category: 'Engineering & Workflow',
      skills: [
        { name: 'Performance Optimization', level: 80 },
        { name: 'Git & Version Control', level: 85 },
        { name: 'Problem-Solving', level: 90 },
        { name: 'Programming', level: 85 },
      ],
      icon: '⚙️',
    },
    {
      category: 'Soft Skills',
      skills: [
        { name: 'Communication', level: 85 },
        { name: 'Teamwork', level: 90 },
        { name: 'Responsibility', level: 95 },
        { name: 'Creativity', level: 85 },
        { name: 'Leadership', level: 80 },
      ],
      icon: '🤝',
    },
  ];

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

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-20 relative">
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
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={categoryVariants}
              className="glass p-6 rounded-xl"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: 0.3 + (categoryIndex * 0.1) + (skillIndex * 0.05),
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skill Pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.slice(0, 3).map((skill) => (
                  <motion.span
                    key={skill.name}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS',
              'Git', 'GitHub', 'VS Code', 'Figma', 'Responsive Design','Web Performance', 'Bootstrap', 'Modern ES6+', 'Component Architecture', 'Shadcn Ui','Material UI',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 glass text-gray-300 rounded-lg border border-gray-600 hover:border-primary hover:text-white transition-all duration-200"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.5 + index * 0.05 
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
