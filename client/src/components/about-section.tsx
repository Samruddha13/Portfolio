import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import useAnimatedCounter from "@/hooks/use-animated-counter";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const internshipsCount = useAnimatedCounter(2, isInView);
  const projectsCount = useAnimatedCounter(4, isInView);

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-mono font-bold mb-6 text-electric">About Me</h2>
            <p className="text-lg text-gray-300 mb-6">
              I'm a motivated Computer Science & Engineering student with practical experience in frontend development. 
              Currently expanding my backend knowledge to grow as a full-stack developer.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              With strong problem-solving abilities and collaborative skills, I've completed multiple internships 
              and built responsive web applications using modern technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <motion.div 
                className="glass p-6 rounded-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-neon-green mb-2">{internshipsCount}</h3>
                <p className="text-gray-400">Internships</p>
              </motion.div>
              <motion.div 
                className="glass p-6 rounded-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-neon-purple mb-2">{projectsCount}</h3>
                <p className="text-gray-400">Projects</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern coding workspace with laptop and code" 
              className="rounded-xl shadow-2xl w-full animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-electric/10 to-neon-purple/10 rounded-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
