import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      id: 1,
      title: 'Masters in Computer Application(AI/ML)',
      institution: 'Chandigarh University',
      location: 'Mohali , Punjab',
      period: '2023 - 2025',
      description: 'I am currently pursuing my Masters in Computer Application with specialization in AI/ML with a CGPA of 7.1, focusing on advanced concepts in computer science, artificial intelligence, and machine learning, demonstrating my dedication to mastering these dynamic fields.',
      logo: '🎓',
    },
    {
      id: 2,
      title: 'Bachelor in Computer Application',
      institution: 'University of Lucknow',
      location: 'Lucknow , U.P.',
      period: '2020 - 2023',
      description: 'I completed my  Bachelor degree in Cpmputer Application  with a score of 74.1%, reflecting my commitment to academic excellence and my foundation in scientific principles.',
      logo: '🎓',
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-600" />
            
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-20 pb-12"
              >
                <div className="absolute left-6 top-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900" />
                
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{edu.logo}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{edu.title}</h4>
                      <h5 className="text-lg text-purple-400 mb-2">{edu.institution}</h5>
                      <div className="flex flex-col sm:flex-row gap-4 text-gray-400 text-sm mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
