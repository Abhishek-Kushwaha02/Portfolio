import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import InteractiveBackground from './InteractiveBackground';
import { useIsMobile } from '../hooks/use-mobile';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <InteractiveBackground />
      
      <div className="relative z-10">
        {/* Desktop Sidebar */}
        {!isMobile && <Sidebar activeSection={activeSection} />}
        {/* Mobile Sidebar Drawer */}
        {isMobile && mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 flex">
            <div className="w-4/5 max-w-xs bg-black/90 h-full shadow-xl">
              <Sidebar activeSection={activeSection} mobile />
            </div>
            <div className="flex-1" onClick={() => setMobileSidebarOpen(false)} />
          </div>
        )}
        {/* Mobile Nav Button */}
        {isMobile && (
          <button
            className="fixed top-4 left-4 z-50 p-3 rounded-full bg-black/70 text-white shadow-lg md:hidden"
            onClick={() => setMobileSidebarOpen(true)}
            aria-label="Open navigation"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          </button>
        )}
        <main className={isMobile ? "mt-0" : "ml-20"}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
