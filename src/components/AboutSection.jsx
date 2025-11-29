import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaPalette, FaRocket } from 'react-icons/fa';

const AboutSection = () => {
  const features = [
    { icon: FaCode, title: 'Clean Code', description: 'Writing maintainable and scalable code following best practices' },
    { icon: FaReact, title: 'React Expert', description: 'Specialized in building modern React applications with hooks and context' },
    { icon: FaPalette, title: 'UI/UX Focus', description: 'Creating beautiful and intuitive user interfaces with great UX' },
    { icon: FaRocket, title: 'Performance', description: 'Optimizing applications for speed and smooth user experience' },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 relative">
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
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                Front-End Web Developer
              </h3>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 leading-relaxed mb-6"
            >
              I'm a self-taught Front-End Web Developer with experience building responsive web applications using React.js. I focus on clean UI design, smooth user experiences, and optimized performance.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 leading-relaxed mb-6"
            >
              I've worked on multiple personal and practice projects, applying modern front-end tools, version control with Git, and agile-inspired workflows to deliver polished interfaces.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 leading-relaxed mb-8"
            >
              I enjoy learning, collaborating with online communities, and continuously improving my craft.
            </motion.p>

            {/* Key Highlights */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Experience</h4>
                <p className="text-gray-300 text-sm">2+ Years of Development</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Projects</h4>
                <p className="text-gray-300 text-sm">10+ Completed Projects</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Technologies</h4>
                <p className="text-gray-300 text-sm">React, Tailwind, Git</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Focus</h4>
                <p className="text-gray-300 text-sm">Front-End Development</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass p-6 rounded-xl text-center group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
