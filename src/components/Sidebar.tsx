
import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Clock, Mail } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
}

const Sidebar = ({ activeSection }: SidebarProps) => {
  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'experience', icon: Clock, label: 'Experience' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-0 top-0 h-full w-20 z-50">
      {/* Main sidebar container with enhanced glassmorphism */}
      <div className="h-full w-full bg-black/20 backdrop-blur-xl border-r border-white/10 shadow-2xl shadow-black/30">
        {/* Navigation items container with increased spacing */}
        <div className="flex flex-col items-center justify-center h-full py-8 px-2 space-y-6">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <motion.div
                key={item.id}
                className="relative w-full"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                {/* Active background indicator with faster animation */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-400/40 shadow-lg shadow-cyan-500/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 500, 
                      damping: 20,
                      duration: 0.15 
                    }}
                    layoutId="activeBackground"
                  />
                )}
                
                {/* Navigation button */}
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative w-full h-12 rounded-xl transition-all duration-150 group flex items-center justify-center ${
                    isActive 
                      ? 'text-cyan-300 scale-105' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5 hover:scale-105'
                  }`}
                  whileHover={{ scale: isActive ? 1.05 : 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20, duration: 0.1 }}
                >
                  {/* Icon with enhanced styling */}
                  <Icon className={`w-5 h-5 transition-all duration-150 ${
                    isActive ? 'drop-shadow-lg filter brightness-110' : 'group-hover:drop-shadow-md'
                  }`} />
                  
                  {/* Enhanced tooltip */}
                  <div className="absolute left-full ml-3 px-3 py-2 bg-black/90 backdrop-blur-md rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20 border border-white/10">
                    <span className="text-white font-medium">{item.label}</span>
                    {/* Tooltip arrow */}
                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-black/90"></div>
                  </div>
                </motion.button>
                
                {/* Side active indicator line with faster animation */}
                {isActive && (
                  <motion.div
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full shadow-lg shadow-cyan-400/50"
                    initial={{ opacity: 0, scaleY: 0, x: 5 }}
                    animate={{ opacity: 1, scaleY: 1, x: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 600, 
                      damping: 20,
                      duration: 0.1
                    }}
                    layoutId="activeIndicator"
                  />
                )}
                
                {/* Subtle glow effect for active item */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-xl blur-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
        
        {/* Bottom decorative element */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-40" />
      </div>
    </div>
  );
};

export default Sidebar;
