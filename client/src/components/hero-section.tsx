import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { TypingText } from "@/hooks/use-typing-animation";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative grid-bg">
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Polaroid Photo Frame */}
        <motion.div 
          className="w-64 h-80 mx-auto mb-8 relative"
          initial={{ scale: 0, opacity: 0, rotateY: 180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15, duration: 1.2 }}
          whileHover={{ 
            rotateY: 5, 
            rotateX: 5, 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          {/* Polaroid Frame */}
          <div className="w-full h-full bg-white p-4 rounded-lg shadow-2xl transform-gpu">
            {/* Photo Area */}
            <div className="w-full h-48 bg-gray-100 rounded overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="Professional developer portrait" 
                className="w-full h-full object-cover"
              />
              {/* Photo overlay effects */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-electric/10 via-transparent to-neon-purple/10"
                animate={{ opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            
            {/* Handwritten text area */}
            <div className="mt-4 space-y-2">
              <motion.div 
                className="font-handwriting text-gray-800 text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{ transform: 'rotate(-1deg)' }}
              >
                <TypingText 
                  texts={["Samruddha ♥"]}
                  options={{ speed: 120, loop: false, startDelay: 1200 }}
                  cursor={false}
                  className="text-gray-700"
                />
              </motion.div>
              <motion.div 
                className="font-handwriting text-gray-600 text-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                style={{ transform: 'rotate(0.5deg)' }}
              >
                <TypingText 
                  texts={["Frontend Dev • 2024"]}
                  options={{ speed: 100, loop: false, startDelay: 2000 }}
                  cursor={false}
                />
              </motion.div>
            </div>
          </div>

          {/* Floating tape pieces */}
          <motion.div 
            className="absolute -top-2 left-8 w-16 h-8 bg-yellow-200/80 rounded transform rotate-12"
            animate={{ rotate: [12, 8, 12] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ 
              background: 'linear-gradient(45deg, #fef3c7, #fbbf24)',
              backdropFilter: 'blur(2px)'
            }}
          />
          <motion.div 
            className="absolute -bottom-2 right-6 w-12 h-6 bg-yellow-200/80 rounded transform -rotate-6"
            animate={{ rotate: [-6, -10, -6] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            style={{ 
              background: 'linear-gradient(45deg, #fef3c7, #fbbf24)',
              backdropFilter: 'blur(2px)'
            }}
          />

          {/* Glow effect behind polaroid */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-electric/20 via-neon-purple/20 to-neon-green/20 rounded-lg blur-xl -z-10"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
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
          <TypingText 
            texts={[
              "Frontend Developer",
              "React.js Developer", 
              "Web Developer",
              "UI/UX Enthusiast"
            ]}
            className="text-neon-green"
            options={{ speed: 100, delay: 2000, startDelay: 1000 }}
          />
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
