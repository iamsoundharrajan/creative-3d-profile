
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

export const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const timelineItems = [
    {
      year: '2023',
      title: 'Senior Frontend Developer',
      company: 'Tech Innovation Corp',
      description: 'Leading a team of developers in creating cutting-edge web applications'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd',
      description: 'Developed and maintained multiple client projects using React and Node.js'
    },
    {
      year: '2021',
      title: 'Frontend Developer',
      company: 'StartUp Ventures',
      description: 'Built responsive web applications and improved user experience'
    },
    {
      year: '2020',
      title: 'Junior Developer',
      company: 'Code Academy',
      description: 'Started my journey in web development with modern technologies'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate developer with a love for creating beautiful, functional, and user-friendly applications. 
            With expertise in modern web technologies, I bring ideas to life through code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-6xl font-bold">
                  JD
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-6">My Journey</h3>
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="relative pl-8 border-l-2 border-blue-400/30"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-blue-400 font-semibold">{item.year}</div>
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <div className="text-purple-400 mb-2">{item.company}</div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
