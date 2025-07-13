import React from 'react';
import profilePic from '../assets/profile.jpg'; // Replace with your own image

const About = () => {
  return (
    <section id="about" className="py-20 bg-[rgb(6,0,16)] text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A quick snapshot of who I am and what I do.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-3xl w-72 h-72 object-cover border-4 border-blue-500 shadow-xl hover:scale-105 transition duration-300"
            />
          </div>

          {/* Bio Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Hi, I'm Dwip</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate engineering student with a knack for building beautiful, high-performance web applications. I love turning ideas into interactive, user-friendly digital experiences using modern technologies like React, Node.js, and Python.
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-blue-400 text-xl mr-3">🚀</span>
                <span>Fast learner with a strong foundation in full-stack development.</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 text-xl mr-3">🎯</span>
                <span>Strong problem-solving and debugging skills.</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 text-xl mr-3">📚</span>
                <span>Constantly exploring new tools and frameworks.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
