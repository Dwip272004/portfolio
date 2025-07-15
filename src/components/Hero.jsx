import React, { lazy, Suspense } from 'react';

const Threads = lazy(() => import('../Backgrounds/Threads/Threads'));

export default function Hero({ setUnlockScroll }) {
  const handleUnlock = () => {
    setUnlockScroll(true);
    requestAnimationFrame(() => {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden text-white bg-[rgb(6,0,16)]"
    >
      {/* Background Threads without mouse interaction */}
      <Suspense fallback={<div className="w-full h-full bg-[rgb(6,0,16)]" />}>
        <div className="absolute inset-0 z-0">
          <Threads
            amplitude={1.5}
            distance={0.4}
            enableMouseInteraction={false} // <-- disables mouse effect
            speed={1}
          />
        </div>
      </Suspense>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          <span className="text-blue-300">Welcome, I’m</span> Dwip
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl max-w-3xl text-gray-100 font-medium">
          An innovative engineering student dedicated to building impactful solutions and immersive digital experiences.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
          <button
            onClick={handleUnlock}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore Skills
          </button>
        </div>
      </div>
    </section>
  );
}
