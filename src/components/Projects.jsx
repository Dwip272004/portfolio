import React, { useState } from 'react';
import { motion} from 'framer-motion';

const projects = [
  {
    title: 'AI Medical Diagnosis',
    description: 'A GUI based Project on Predict diseases using ML and Firebase history integration.',
    techStack: ['Python', 'Firebase', 'Scikit-learn'],
    image: 'https://www.hhmglobal.com/wp-content/uploads/press-releases/26315/Woman-doctor-physician-ehr-emr-tablet-stethoscope.jpg',
    link: '#',
  },
  {
    title: 'Flaskify- The Music App',
    description: 'WEB-APP:Flask + jamendo based web application with user authentication and local song uploading features',
    techStack: ['Python', 'Tailwind CSS', 'Jamendo', 'Flask','Firebase','HTML+CSS+JS'],
    image: 'https://tse4.mm.bing.net/th/id/OIP.heL0Pl9mX2u9JBPjN77h4AHaEo?rs=1&pid=ImgDetMain&o=7&rm=3',
    link: 'https://flaskify-1.onrender.com/',
  },
  {
    title: 'A Complete GUI based management system with cloud based DB connectivity',
    description: 'SOFTWARE:GUI based booking software backed by Cloud DB service',
    techStack: ['Python', 'Tkinter', 'SQL','Firebase' ,'HTML+CSS+JS'],
    image: 'https://www.agilitysystem.net/wp-content/uploads/2023/06/management-system-featured-image-scaled.webp',
    link: '#',
  },
  {
    title: 'Propcentre',
    description: 'A working Web-site for an Indore based RealEstate Company',
    techStack: ['Python', 'Flask', 'Tailwind CSS','SQL','HTML+CSS+JS' ],
    image: 'https://pix4free.org/assets/library/2021-10-24/originals/real-estate.jpg',
    link: 'Propcentre.in',
  },
  {
    title: 'GlofiHub',
    description: 'A working Web-site for a Micro-Finance company in Russia',
    techStack: ['Python', 'Flask', 'Tailwind CSS','SQL','HTML+CSS+JS','HTML+CSS+JS','Firebase' ],
    image: 'https://cdn.corporatefinanceinstitute.com/assets/microfinance.jpeg',
    link: 'glofihub.com',
  },
  {
    title: 'Many GUI based project projects & Dashboards and ML projects',
    description: 'GUI projects and Machine Learning Projects',
    techStack: ['Python', 'PyQt5','SQL','HTML+CSS+JS', 'Machine Learning' ],
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*wLUt3WBKgA1ewi43joZ2Tg.jpeg',
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
