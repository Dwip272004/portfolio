// components/Backgrounds/SafeHyperspeed.jsx
import React, { useEffect, useRef, useState } from 'react';
import Hyperspeed from './Hyperspeed';

export default function SafeHyperspeed() {
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (width > 0 && height > 0) {
        setReady(true);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {ready && <Hyperspeed />}
    </div>
  );
}

