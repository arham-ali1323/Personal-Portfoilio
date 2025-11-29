import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaLanguage, FaStar, FaCheck } from 'react-icons/fa';

const LanguagesSection = () => {
  const languages = [
    {
      name: 'English',
      level: 'Proficient',
      description: 'Professional working proficiency with strong communication skills for technical and business contexts.',
      rating: 4,
      flag: '🇬🇧',
      skills: ['Speaking', 'Writing', 'Reading', 'Technical Communication'],
    },
    {
      name: 'Urdu',
      level: 'Good command',
      description: 'Native language with excellent fluency in both written and spoken communication.',
      rating: 5,
      flag: '🇵🇰',
      skills: ['Native Fluency', 'Writing', 'Speaking', 'Cultural Understanding'],
    },
    {
      name: 'Hindi',
      level: 'Good command',
      description: 'Strong understanding and communication abilities in Hindi, both spoken and written.',
      rating: 4,
      flag: '🇮🇳',
      skills: ['Speaking', 'Understanding', 'Basic Writing', 'Cultural Context'],
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

  const languageVariants = {
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="languages" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaGlobe className="w-8 h-8 text-primary" />
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="gradient-text">Languages</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Language proficiency and communication skills that enable effective collaboration in diverse environments.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              variants={languageVariants}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-xl"
            >
              {/* Language Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{language.flag}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {language.name}
                    </h3>
                    <p className="text-primary text-sm font-medium">
                      {language.level}
                    </p>
                  </div>
                </div>
                <FaLanguage className="w-6 h-6 text-primary/50" />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">{renderStars(language.rating)}</div>
                <span className="text-gray-400 text-sm">
                  ({language.rating}/5)
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {language.description}
              </p>

              {/* Skills */}
              <div>
                <h4 className="text-white font-medium mb-3">Skills</h4>
                <div className="space-y-2">
                  {language.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      className="flex items-center gap-2"
                    >
                      <FaCheck className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="mt-6">
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(language.rating / 5) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1, 
                      delay: 0.5 + index * 0.2,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Communication Stats */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Communication Capabilities
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '💬', title: 'Technical Discussions', desc: 'Clear technical communication' },
                { icon: '🤝', title: 'Team Collaboration', desc: 'Effective teamwork skills' },
                { icon: '📝', title: 'Documentation', desc: 'Well-structured writing' },
                { icon: '🌍', title: 'Cross-cultural', desc: 'Diverse environment adaptation' },
              ].map((capability, index) => (
                <motion.div
                  key={capability.title}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.5 + index * 0.1 
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl mb-2">{capability.icon}</div>
                  <h4 className="text-white font-medium mb-1">{capability.title}</h4>
                  <p className="text-gray-400 text-xs">{capability.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesSection;
