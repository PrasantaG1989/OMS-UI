import { useState, useEffect } from "react";

export const useScrollDepth = () => {
  const [scrollDepth, setScrollDepth] = useState(0);

  useEffect(() => {
    const calculateScrollDepth = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const maxScrollTop = documentHeight - windowHeight;
      const scrollPercentage = (scrollTop / maxScrollTop) * 100;
      setScrollDepth(scrollPercentage);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", calculateScrollDepth);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", calculateScrollDepth);
    };
  }, []);

  return scrollDepth;
};

export default useScrollDepth;
