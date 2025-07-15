import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[rgb(6,0,16)] text-white py-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left: Branding or short quote */}
        <p className="text-sm text-gray-400 text-center sm:text-left">
          © {new Date().getFullYear()} Dwip • All rights reserved
        </p>

        {/* Right: Links */}
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
