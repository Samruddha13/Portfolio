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
    const interactiveElements = document.querySelectorAll("a, button, .magnetic-btn, [role='button'], .cursor-pointer");
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
        x: mousePosition.x,
        y: mousePosition.y,
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 800,
        damping: 35,
      }}
      style={{
        background: isHovering 
          ? "rgba(124, 58, 237, 0.6)" 
          : "rgba(0, 245, 255, 0.8)",
        boxShadow: isHovering 
          ? "0 0 20px rgba(124, 58, 237, 0.4)" 
          : "0 0 10px rgba(0, 245, 255, 0.3)",
      }}
    />
  );
}
