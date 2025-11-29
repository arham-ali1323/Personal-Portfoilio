import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaPalette, FaMobile, FaDatabase } from 'react-icons/fa';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce website with shopping cart, product filtering, and payment integration. Built with React and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      technologies: ['React.js', 'Tailwind CSS', 'Context API', 'Local Storage'],
      category: 'web',
      liveUrl: '#',
      githubUrl: 'https://github.com/arham-ali1323',
      featured: true,
      icon: FaCode,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A comprehensive task management application with drag-and-drop functionality, categories, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
      technologies: ['React.js', 'Framer Motion', 'Local Storage', 'CSS Animations'],
      category: 'app',
      liveUrl: '#',
      githubUrl: 'https://github.com/arham-ali1323',
      featured: true,
      icon: FaPalette,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and beautiful data visualizations.',
      image: 'https://images.unsplash.com/photo-1592210454771-2a0c9c7b5c38?w=800&h=400&fit=crop',
      technologies: ['React.js', 'Weather API', 'Chart.js', 'Geolocation'],
      category: 'web',
      liveUrl: '#',
      githubUrl: 'https://github.com/arham-ali1323',
      featured: false,
      icon: FaMobile,
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A stunning personal portfolio website with smooth animations, responsive design, and modern UI components.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      category: 'design',
      liveUrl: '#',
      githubUrl: 'https://github.com/arham-ali1323',
      featured: false,
      icon: FaDatabase,
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Apps' },
    { value: 'app', label: 'Applications' },
    { value: 'design', label: 'Design' },
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

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === category.value
                  ? 'bg-primary text-white shadow-lg'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
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
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
          <motion.a
            href="https://github.com/arham-ali1323"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 glass text-white rounded-full font-medium hover:bg-white/10 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="w-5 h-5" />
            View More Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
