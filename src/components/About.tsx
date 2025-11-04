import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'UI/UX Design', level: 90, icon: Code, color: 'from-cyan-500 to-blue-500' },
    { name: 'Frontend Development', level: 80, icon: Palette, color: 'from-purple-500 to-pink-500' },
    { name: 'AI/ML', level: 70, icon: Zap, color: 'from-green-500 to-teal-500' },
  ];

  const techStack = {
    Frontend: ['Html', 'CSS', 'JS', 'React js', 'Bootstrap'],
    Design: ['Wireframing', 'UI Design', 'Prototyping', 'Typography', 'Color Theory'],
    AI_ML: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'NLTK/spaCy','Huggingface Transformers'],
    Tools: ['Git', 'Github', 'Figma','Adobe XD', 'Framer','Google Collab', 'Jupyter Notebook', 'VS Code', 'Adobe After Effects', 'Adobe Premiere Pro'],
  };

  return (
    <section id="about" className="min-h-screen py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Hello! I'm Abhishek</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
              I'm a UI/UX designer and web developer who loves creating simple and easy-to-use websites.
              I enjoy turning ideas into real things people can use.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
              I'm also learning about AI and machine learning, and I like building small projects to practice.
              When I'm not working, I enjoy exploring new tools and learning from others in the tech world
              </p>
              
              <motion.a
                  href="public\File\Resume_.pdf"
                  download="My_Resume.pdf"
                 className="inline-flex items-center justify-center gap-3 px-6 py-3 w-fit bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
              >
                Download Resume
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                      <div className="flex justify-between items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2 mr-4">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">Tech Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <h4 className="text-xl font-semibold mb-4 text-purple-400">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm text-cyan-300 border border-cyan-500/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
