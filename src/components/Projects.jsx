import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'AI Medical Diagnosis',
    description: 'Predict diseases using ML and Firebase history integration.',
    techStack: ['Python', 'Firebase', 'Scikit-learn'],
    image: '/projects/ai-diagnosis.png',
    link: 'https://your-project-link.com',
  },
  {
    title: 'Spotify Clone',
    description: 'A music streaming app with real-time playlists and auth.',
    techStack: ['React', 'Firebase', 'Jamendo API'],
    image: '/projects/spotify-clone.png',
    link: 'https://your-project-link.com',
  },
  {
    title: 'Consultation Booking',
    description: 'Calendar-based consultation platform with admin panel.',
    techStack: ['React', 'Tailwind CSS', 'Firebase'],
    image: '/projects/consultation.png',
    link: 'https://your-project-link.com',
  },
  {
    title: 'E-Learning Platform',
    description: 'Multi-country course dashboard with WhatsApp booking.',
    techStack: ['React', 'Firebase', 'EmailJS'],
    image: '/projects/elearning.png',
    link: '#',
  },
  {
    title: 'Portfolio Generator',
    description: 'Custom portfolio builder using JSON input and live preview.',
    techStack: ['Next.js', 'Tailwind', 'Vercel'],
    image: '/projects/portfolio.png',
    link: '#',
  },
];

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="bg-[rgb(6,0,16)] py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="border-b-4 border-blue-500 pb-2">Projects</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-white/10"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-blue-800/20 text-blue-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-blue-400 hover:text-blue-200 transition"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300"
          >
            {showMore ? 'Show Less' : 'More Projects'}
          </button>
        </div>
      </div>
    </section>
  );
}
