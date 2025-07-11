import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface SkillProps {
  name: string;
  percentage: number;
  delay: number;
}

function SkillBar({ name, percentage, delay }: SkillProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay * 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage, delay]);

  return (
    <div className="skill-item" ref={ref}>
      <div className="flex justify-between mb-2">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-bar bg-gray-700 rounded-full h-2">
        <motion.div 
          className="progress-fill rounded-full h-full"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: delay * 0.1 }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const frontendSkills = [
    { name: "React.js", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "HTML/CSS", percentage: 95 },
  ];

  const frameworkSkills = [
    { name: "Bootstrap", percentage: 88 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "TypeScript", percentage: 80 },
  ];

  const otherSkills = [
    { name: "Git/GitHub", percentage: 85 },
    { name: "Java", percentage: 75 },
    { name: "Data Analytics", percentage: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-mono font-bold text-center mb-12 text-electric"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <motion.div 
            className="glass p-8 rounded-xl hover:scale-105 transition-all duration-300"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-3xl text-electric mb-4">
              <i className="fab fa-html5"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name} 
                  percentage={skill.percentage} 
                  delay={index + 1}
                />
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Tools */}
          <motion.div 
            className="glass p-8 rounded-xl hover:scale-105 transition-all duration-300"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-3xl text-neon-purple mb-4">
              <i className="fas fa-tools"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Frameworks & Tools</h3>
            <div className="space-y-4">
              {frameworkSkills.map((skill, index) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name} 
                  percentage={skill.percentage} 
                  delay={index + 4}
                />
              ))}
            </div>
          </motion.div>

          {/* Other Technologies */}
          <motion.div 
            className="glass p-8 rounded-xl hover:scale-105 transition-all duration-300"
            initial={{ y: 100, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-3xl text-neon-green mb-4">
              <i className="fas fa-code-branch"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">Other Technologies</h3>
            <div className="space-y-4">
              {otherSkills.map((skill, index) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name} 
                  percentage={skill.percentage} 
                  delay={index + 7}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
