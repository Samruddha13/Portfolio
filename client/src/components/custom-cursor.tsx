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
    document.addEventListener("mousemove", updateMousePosition, { passive: true });

    // Function to update interactive elements
    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll("a, button, .magnetic-btn, [role='button'], .cursor-pointer, input, textarea, select");
      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
      });
      
      return interactiveElements;
    };

    const elements = updateInteractiveElements();

    // Re-scan for new elements periodically
    const interval = setInterval(updateInteractiveElements, 1000);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        background: isHovering 
          ? "rgba(124, 58, 237, 0.6)" 
          : "rgba(0, 245, 255, 0.8)",
        boxShadow: isHovering 
          ? "0 0 20px rgba(124, 58, 237, 0.4)" 
          : "0 0 10px rgba(0, 245, 255, 0.3)",
        transform: `translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`,
      }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 40,
      }}
    />
  );
}
