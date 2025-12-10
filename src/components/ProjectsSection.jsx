import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaPalette, FaMobile, FaDatabase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AlphaSoft-360',
      description: 'A modern e-commerce website developed at AlphaSoft360, featuring a fully functional shopping cart, advanced product filtering, and secure payment integration. The platform is built using React and Tailwind CSS, ensuring a fast, responsive, and seamless user experience.',
      image: '/AlphaSoft360.png',
      technologies: ['React.js', 'Tailwind CSS', 'Context API', 'Local Storage'],
      category: 'web',
      liveUrl: '#',
      githubUrl: 'https://github.com/arham-ali1323',
      featured: true,
      icon: FaCode,
    },
    {
      id: 2,
      title: 'ShopHub',
      description: 'A modern ShopHub e-commerce website featuring a fully functional shopping cart, advanced product filtering, and seamless payment integration. Built with React and Tailwind CSS for a fast, responsive, and clean user experience.',
      image: '/ShopHub.png',
      technologies: ['React.js', 'Framer Motion', 'Local Storage', 'CSS Animations'],
      category: 'app',
      liveUrl: '#',
      githubUrl: 'https://github.com/arham-ali1323',
      featured: true,
      icon: FaPalette,
    },
    {
      id: 3,
      title: 'CarRental',
      description: 'A real-time car rental application featuring live vehicle availability, location-based search, interactive maps, and smooth UI components for a modern booking experience.',
      image: '/CarRental.png',
      technologies: ['React.js', 'Weather API', 'Chart.js', 'Geolocation'],
      category: 'web',
      liveUrl: '#',
      githubUrl: 'https://github.com/arham-ali1323',
      featured: false,
      icon: FaMobile,
    },
    {
      id: 4,
      title: 'Gym and Fitness',
      description: 'A stunning personal gym portfolio website designed to showcase trainers, classes, and success stories with smooth animations and responsive layouts. Modern UI components and clear calls-to-action create an engaging experience that converts visitors into members.',
      image: '/Gym and Fitness.png',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      category: 'design',
      liveUrl: '#',
      githubUrl: 'https://github.com/arham-ali1323',
      featured: false,
      icon: FaDatabase,
    },
  ];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
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
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Explore my recent projects showcasing my skills in React.js, modern web technologies, and creative problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ y: -5 }}
              className="glass rounded-xl overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-900/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.liveUrl}
                        className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="View live project"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="w-10 h-10 bg-primary/90 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="View GitHub repository"
                      >
                        <FaGithub className="w-4 h-4" />
                      </motion.a>
                    </div>
                    {project.featured && (
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium border border-yellow-500/30">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    className="flex-1 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 transition-colors text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex-1 px-4 py-2 glass text-white rounded-lg font-medium hover:bg-white/10 transition-colors text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/projects">
            <motion.div
              className="inline-flex items-center gap-2 px-8 py-3 glass text-white rounded-full font-medium hover:bg-white/10 transition-all duration-200 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View More Projects
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
