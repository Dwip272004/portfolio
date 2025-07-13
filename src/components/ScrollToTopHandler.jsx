import { useEffect, useRef } from "react";

export default function ScrollToTopHandler() {
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // If user scrolls up AND crossed threshold (e.g. 300px)
      if (currentScroll < lastScrollY.current && currentScroll < 300) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
