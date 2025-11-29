import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/arham-ali1323', label: 'GitHub' },
    { icon: FaEnvelope, href: 'mailto:arham.ali1323@gmail.com', label: 'Email' },
    { icon: FaPhone, href: 'tel:+923211051323', label: 'Phone' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-t from-black/50 to-transparent">
      {/* Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Arham Ali
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Front-End Web Developer passionate about creating beautiful, responsive, and user-friendly web applications using modern technologies.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>📍</span>
              <span>Sahiwal, Pakistan</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">
              Connect With Me
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-gray-300">
                <FaEnvelope className="text-primary" />
                <a 
                  href="mailto:arham.ali1323@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  arham.ali1323@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FaPhone className="text-primary" />
                <a 
                  href="tel:+923211051323"
                  className="hover:text-primary transition-colors"
                >
                  +92 321 105 1323
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-300 hover:text-primary hover:bg-primary/20 transition-all duration-200"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Arham Ali. All rights reserved.
            </motion.div>

            {/* Built with */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-sm"
            >
              Built with <span className="text-primary">❤️</span> using React.js & Tailwind CSS
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-300 hover:text-primary hover:bg-primary/20 transition-all duration-200"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <FaArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-primary"></div>
    </footer>
  );
};

export default Footer;
