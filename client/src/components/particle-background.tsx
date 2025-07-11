import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!containerRef.current) return;

      const particle = document.createElement("div");
      particle.className = "particle animate-particle-float";
      particle.style.left = Math.random() * 100 + "vw";
      particle.style.animationDuration = (Math.random() * 3 + 2) + "s";
      particle.style.opacity = (Math.random() * 0.5 + 0.2).toString();
      
      containerRef.current.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 5000);
    };

    const interval = setInterval(createParticle, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ zIndex: 1 }}
    />
  );
}
