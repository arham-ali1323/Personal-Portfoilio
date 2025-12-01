import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FloatingDockDemo } from './components/FloatingDockDemo';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import LanguagesSection from './components/LanguagesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative">
        <Routes>
          <Route path="/" element={
            <>
              <main className="relative">
                <Hero />
                <AboutSection />
                <SkillsSection />
                <ExperienceSection />
                <ProjectsSection />
                <EducationSection />
                <LanguagesSection />
                <ContactSection />
              </main>
              <Footer />
              <FloatingDockDemo />
            </>
          } />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        
        {/* Background decorative elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-indigo-500 opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-400 opacity-25 blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600 opacity-20 blur-3xl animate-pulse animation-delay-4000"></div>
          <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-indigo-400 opacity-15 blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/4 h-64 w-64 rounded-full bg-cyan-500 opacity-15 blur-3xl animate-pulse animation-delay-3000"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
