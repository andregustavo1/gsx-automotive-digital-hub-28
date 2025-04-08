
import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const windowHeight = scrollHeight - clientHeight;
      const progress = windowHeight > 0 ? `${scrollTop / windowHeight * 100}%` : "0%";
      
      setScrollProgress(scrollTop / windowHeight * 100);
    };

    window.addEventListener("scroll", calculateScrollProgress);
    return () => window.removeEventListener("scroll", calculateScrollProgress);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollProgress;
