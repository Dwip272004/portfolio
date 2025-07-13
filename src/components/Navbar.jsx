import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ setUnlockScroll }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (id === 'skills') {
      // Unlock scroll if currently locked
      setUnlockScroll(true);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 250); // delay to allow scroll unlock effect
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Pill Navbar */}
      <header className="fixed top-6 w-full flex justify-center z-50 pointer-events-none">
        <motion.nav
          className={`hidden md:flex pointer-events-auto px-6 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-lg bg-white/10 transition-all duration-300 ${
            isScrolled ? 'scale-95 opacity-90' : 'scale-100'
          }`}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex gap-6 items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="text-white font-medium text-sm hover:text-blue-400 relative transition"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>
      </header>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/10 shadow-xl flex justify-around items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className="text-white text-xs font-semibold hover:text-blue-400 transition-all"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
}
