// App.jsx
import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import ScrollToTopHandler from './components/ScrollToTopHandler';
import About from './components/About';

function App() {
  const [unlockScroll, setUnlockScroll] = useState(false);

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Navbar setUnlockScroll={setUnlockScroll} />
      <ScrollToTopHandler />
      <Hero unlockScroll={unlockScroll} setUnlockScroll={setUnlockScroll} />
      <Skills />
      <About />
    </div>
  );
}

export default App;
