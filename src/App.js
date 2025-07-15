import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [unlockScroll, setUnlockScroll] = useState(false); // ✅ Declare the state here

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      {/* ✅ Pass setUnlockScroll to Navbar */}
      <Navbar setUnlockScroll={setUnlockScroll} />
      
      {/* ✅ Pass unlockScroll + setter to Hero */}
      <Hero unlockScroll={unlockScroll} setUnlockScroll={setUnlockScroll} />
      
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
