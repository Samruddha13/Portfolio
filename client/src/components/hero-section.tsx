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
        {/* Animated Profile Circle */}
        <motion.div 
          className="w-48 h-48 mx-auto mb-8 relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15, duration: 1.2 }}
        >
          {/* Main Circle */}
          <motion.div 
            className="w-full h-full rounded-full bg-gradient-to-r from-electric via-neon-purple to-neon-green p-1"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* Inner Circle */}
            <motion.div 
              className="w-full h-full rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Text */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.div 
                  className="text-2xl font-bold text-electric mb-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <TypingText 
                    texts={["S"]}
                    options={{ speed: 200, loop: false, startDelay: 1200 }}
                    cursor={false}
                  />
                </motion.div>
                <motion.div 
                  className="text-sm text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.8 }}
                >
                  <TypingText 
                    texts={["Dev"]}
                    options={{ speed: 150, loop: false, startDelay: 2200 }}
                    cursor={false}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div 
            className="absolute -top-4 -right-4 w-8 h-8 bg-electric/20 rounded-full"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-purple/20 rounded-full"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="absolute top-1/2 -left-8 w-4 h-4 bg-neon-green/20 rounded-full"
            animate={{ 
              x: [0, -5, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
          />

          {/* Glow effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-electric/20 via-neon-purple/20 to-neon-green/20 rounded-full blur-xl -z-10"
            animate={{ 
              scale: [1, 1.2, 1],
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
