import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Cure AI(AI - Powered Disease Solutions)',
      description: 'Cure AI is an intelligent healthcare system designed to predict diseases based on user-provided symptoms.',
      image: 'File/Screenshot 2025-05-04 194736.png?w=600&h=400&fit=crop',
      technologies: ['Python', 'Scikit-learn', 'NumPy' , 'Pandas' , 'Html', 'CSS' , 'Flask'],
      githubUrl: 'https://github.com/Abhishek-Kushwaha02/CURE-AI',
      liveUrl: 'https://github.com/Abhishek-Kushwaha02/CURE-AI',
      featured: true,
    },
    {
      id: 2,
      title: 'Voice Assistant Chatbot',
      description: 'This is a computer program designed to  interact with users through voice commands.',
      image: 'File/Screenshot 2025-05-04 221946.png?w=600&h=400&fit=crop',
      technologies: ['Python', 'Sqlite3', 'Pvporcuipine' , 'Pyttsx3' , 'Html' , 'CSS' , 'JS'],
      githubUrl: 'https://github.com/Abhishek-Kushwaha02/chatbot',
      liveUrl: 'https://github.com/Abhishek-Kushwaha02/chatbot',
      featured: true,
    },
    {
      id: 3,
      title: 'The Stream',
      description: 'A UI/UX Design for a Streaming Web Application.The application was made with the user in mind, and its modern Figma-designed layout puts a focus on easy navigation, content finding, and personalized user experiences. ',
      image: 'File/Gray Simple Shapes Blank A4 Document Landscape.jpg',
      technologies: ['Figma'],
      githubUrl: 'https://github.com/Abhishek-Kushwaha02/The-Stream',
      liveUrl: 'https://www.figma.com/proto/795C9QhdaABgzoj8We5vzA/The-Stream?node-id=204-3820&p=f&t=3NopankJZQKIz3Zi-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=204%3A3820',
      featured: false,
    },
    {
      id: 4,
      title: 'Real Estate Website',
      description: 'EstateVision connects you to stunning properties, premium listings, and trusted agents. It includes features like property search, detailed listings, maps, and contact options to help users find their dream home or list their property online.',
      image: 'File/Screenshot 2025-06-04 023649.png?w=600&h=400&fit=crop',
      technologies: ['React', 'Type Script', 'Html', 'Tailwind'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in modern web development and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group perspective-1000"
              whileHover={{ 
                rotateY: 5,
                rotateX: 5,
                scale: 1.05,
                z: 50
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-500 transform-gpu hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <motion.div 
                    className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: -20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.a
                      href={project.githubUrl}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-colors"
                      whileHover={{ scale: 1.2, rotateZ: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-colors"
                      whileHover={{ scale: 1.2, rotateZ: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="p-6"
                  initial={{ z: -20 }}
                  whileHover={{ z: 20 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm text-cyan-300 border border-cyan-500/30"
                        whileHover={{ scale: 1.1, z: 10 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <motion.a
                    href={project.liveUrl !== '#' ? project.liveUrl : project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    whileHover={{ x: 5, z: 10 }}
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group perspective-1000"
              whileHover={{ 
                rotateY: 3,
                rotateX: 3,
                scale: 1.03,
                z: 30
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform-gpu hover:shadow-xl hover:shadow-purple-500/20">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-36 sm:h-40 md:h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <motion.div 
                  className="p-4"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 bg-purple-500/20 rounded text-xs text-purple-300"
                        whileHover={{ scale: 1.05, z: 5 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <motion.a 
                      href={project.githubUrl} 
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, rotateZ: 5 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a 
                      href={project.liveUrl} 
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, rotateZ: -5 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
