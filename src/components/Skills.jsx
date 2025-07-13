import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    skill: 'Python',
    level: 95,
    icon: '🐍',
    description: 'Versatile scripting and backend development with strong OOP and automation skills.',
  },
  {
    skill: 'Full-stack Web Development',
    level: 92,
    icon: '💻',
    description: 'Building scalable web apps using frontend (React) and backend (Node.js) technologies.',
  },
  {
    skill: 'Java',
    level: 88,
    icon: '☕',
    description: 'Solid understanding of Java fundamentals, OOP, and backend application development.',
  },
  {
    skill: 'MERN Stack',
    level: 90,
    icon: '🌐',
    description: 'Proficient with MongoDB, Express, React, and Node.js to build end-to-end web apps.',
  },
  {
    skill: 'Firebase',
    level: 85,
    icon: '🔥',
    description: 'Experience with Firebase Authentication, Firestore, and real-time databases.',
  },
  {
    skill: 'SQL',
    level: 80,
    icon: '🗄️',
    description: 'Designing and querying relational databases using MySQL and PostgreSQL.',
  },
  {
    skill: 'Artificial Intelligence (AI)',
    level: 87,
    icon: '🧠',
    description: 'Understanding of intelligent systems and decision-making algorithms.',
  },
  {
    skill: 'Machine Learning (ML)',
    level: 89,
    icon: '📈',
    description: 'Hands-on with supervised and unsupervised learning using Scikit-learn and TensorFlow.',
  },
  {
    skill: 'Computer Vision',
    level: 82,
    icon: '👁️‍🗨️',
    description: 'Image processing and object detection using OpenCV and deep learning.',
  },
  {
    skill: 'Natural Language Processing (NLP)',
    level: 84,
    icon: '🗣️',
    description: 'Text classification, sentiment analysis, and language modeling using NLTK and SpaCy.',
  },
];


const fadeSlideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-[rgb(6,0,16)] text-white" >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="border-b-4 border-blue-500 pb-2">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skillsData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeSlideUp}
              className="relative group bg-[#0a011d] border border-blue-900 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-3 text-center">{item.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-center mb-2">
                {item.skill}
              </h3>

              {/* Progress bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                />
              </div>
              <span className="block text-sm text-center text-gray-400">
                {item.level}% Proficiency
              </span>

              {/* Hover card */}
              <motion.div
                className="absolute left-1/2 top-full mt-2 w-48 rounded-md bg-white text-black text-xs px-3 py-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 shadow-md z-20 transform -translate-x-1/2"
              >
                {item.description}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
