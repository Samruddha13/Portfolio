import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for mouse movement
    document.addEventListener("mousemove", updateMousePosition);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, .magnetic-btn");
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
        scale: isHovering ? 3 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
      style={{
        background: isHovering 
          ? "rgba(124, 58, 237, 0.3)" 
          : "rgba(0, 245, 255, 0.8)",
      }}
    />
  );
}
