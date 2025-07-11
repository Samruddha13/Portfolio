import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import useTypingAnimation from "@/hooks/use-typing-animation";

export default function HeroSection() {
  const typingText = useTypingAnimation([
    "Frontend Developer",
    "React.js Developer", 
    "Web Developer",
    "UI/UX Enthusiast"
  ]);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative grid-bg">
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <motion.div 
          className="w-48 h-48 mx-auto mb-8 relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
            alt="Professional developer portrait" 
            className="w-full h-full object-cover rounded-full border-4 border-electric animate-pulse-glow"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric/20 to-neon-purple/20 animate-float"></div>
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          className="text-5xl md:text-7xl font-mono font-bold mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="text-electric">Hello,</span><br />
          I'm <span className="text-white">Samruddha</span>
        </motion.h1>
        
        {/* Typing Animation */}
        <motion.div 
          className="text-2xl md:text-3xl font-mono mb-8 h-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="typing-text text-neon-green">{typingText}</span>
        </motion.div>
        
        {/* Description */}
        <motion.p 
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Computer Science student passionate about creating responsive web applications and building seamless user experiences with React.js and modern technologies.
        </motion.p>
        
        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button 
            className="magnetic-btn bg-gradient-to-r from-electric to-neon-purple px-8 py-4 rounded-lg font-semibold transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 245, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToAbout()}
          >
            View My Work
          </motion.button>
          <motion.button 
            className="magnetic-btn border-2 border-electric px-8 py-4 rounded-lg font-semibold hover:bg-electric hover:text-black transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 245, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="text-electric" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
