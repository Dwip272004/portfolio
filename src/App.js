// App.jsx
import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import ScrollToTopHandler from './components/ScrollToTopHandler';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const [unlockScroll, setUnlockScroll] = useState(false);

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Navbar setUnlockScroll={setUnlockScroll} />
      <ScrollToTopHandler />
      <Hero unlockScroll={unlockScroll} setUnlockScroll={setUnlockScroll} />
      <Skills />
      <About />
      <Projects />
    </div>
  );
}

export default App;
