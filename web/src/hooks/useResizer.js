import { useState, useEffect } from "react";

const useResizer = () => {
  const [windowWidth, setWindowWith] = useState(window.innerWidth);

  const updateWidth = () => setWindowWith(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return windowWidth;
};

export default useResizer;
