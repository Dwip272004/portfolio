import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ setUnlockScroll }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const contactLinks = [
    { label: 'Email', href: 'mailto:dwiplahare3@gmail.com', icon: '📩' },
    { label: 'Instagram', href: 'https://www.instagram.com/cursed_saphire/', icon: '📸' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dwip-lahare-7b7842255/', icon: '💼' },
    { label: 'WhatsApp', href: 'https://wa.me/9752645639', icon: '💬' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (id === 'skills') {
      setUnlockScroll(true);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 250);
    } else if (id === 'contact') {
      setShowContactOptions((prev) => !prev);
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
          <ul className="flex gap-6 items-center relative">
            {navItems.map((item) => (
              <li key={item.id} className="relative">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="text-white font-medium text-sm hover:text-blue-400 relative transition"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full" />
                </button>

                {/* Contact Dropdown */}
                {item.id === 'contact' && showContactOptions && (
                  <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 z-50">
                    <div className="relative w-56 h-56 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl grid grid-cols-2 gap-3 p-4 animate-fade-in">
                      {contactLinks.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex flex-col items-center justify-center text-white hover:text-blue-400 text-xs transition-all"
                        >
                          <div className="w-14 h-14 bg-blue-800/30 rounded-full flex items-center justify-center shadow-md text-2xl">
                            {link.icon}
                          </div>
                          <span className="mt-1">{link.label}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                )}
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
