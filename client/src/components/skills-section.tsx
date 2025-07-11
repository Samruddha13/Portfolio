import { motion } from "framer-motion";
import { TypingText } from "@/hooks/use-typing-animation";
import { useState, useEffect, useRef } from "react";

interface SkillProps {
  name: string;
  percentage: number;
  delay: number;
}

function SkillBar({ name, percentage, delay }: SkillProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate percentage from 0 to target
          const timer = setTimeout(() => {
            const interval = setInterval(() => {
              setCurrentPercentage(prev => {
                if (prev >= percentage) {
                  clearInterval(interval);
                  return percentage;
                }
                return prev + 1;
              });
            }, 20);
          }, delay * 1000);
          
          return () => {
            clearTimeout(timer);
          };
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, [percentage, delay]);

  const getSkillColor = (skill: string) => {
    const colors = {
      'React.js': 'from-electric to-neon-purple',
      'JavaScript': 'from-neon-green to-electric',
      'TypeScript': 'from-neon-purple to-neon-pink',
      'HTML5': 'from-neon-orange to-electric',
      'CSS3': 'from-electric to-neon-green',
      'Tailwind CSS': 'from-neon-green to-neon-purple',
      'Node.js': 'from-neon-green to-electric',
      'Next.js': 'from-electric to-neon-purple',
      'Git & GitHub': 'from-neon-purple to-neon-orange',
      'Responsive Design': 'from-neon-pink to-electric',
      'REST APIs': 'from-electric to-neon-green',
      'MongoDB': 'from-neon-green to-neon-purple'
    };
    return colors[skill as keyof typeof colors] || 'from-electric to-neon-purple';
  };

  return (
    <motion.div
      ref={skillRef}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-white font-semibold group-hover:text-electric transition-colors">
          <TypingText 
            texts={[name]}
            options={{ speed: 80, loop: false, startDelay: delay * 800 }}
            cursor={false}
          />
        </h4>
        <span className="text-gray-400 font-mono text-sm">
          {currentPercentage}%
        </span>
      </div>
      
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden relative">
        <motion.div
          className={`h-full bg-gradient-to-r ${getSkillColor(name)} rounded-full relative`}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${currentPercentage}%` : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const frontendSkills = [
    { name: "React.js", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "TypeScript", percentage: 80 },
    { name: "HTML5", percentage: 95 },
    { name: "CSS3", percentage: 90 },
    { name: "Tailwind CSS", percentage: 88 }
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 75 },
    { name: "Next.js", percentage: 82 },
    { name: "REST APIs", percentage: 78 },
    { name: "MongoDB", percentage: 70 }
  ];

  const toolsSkills = [
    { name: "Git & GitHub", percentage: 85 },
    { name: "Responsive Design", percentage: 92 }
  ];

  const allSkills = [
    { title: "Frontend Development", skills: frontendSkills, color: "text-electric" },
    { title: "Backend & Frameworks", skills: backendSkills, color: "text-neon-purple" },
    { title: "Tools & Others", skills: toolsSkills, color: "text-neon-green" }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            <span className="text-electric">My</span>{" "}
            <span className="text-white">Skills</span>
          </h2>
          <div className="text-lg text-gray-400 max-w-2xl mx-auto">
            <TypingText 
              texts={[
                "Technologies and tools I use to bring ideas to life",
                "Constantly learning and improving my technical skills",
                "From frontend magic to backend logic, I love it all"
              ]}
              options={{ speed: 60, delay: 3000, startDelay: 500 }}
              className="block"
            />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {allSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="glass-intense p-8 rounded-xl hover-glow"
            >
              <motion.h3 
                className={`text-2xl font-mono font-bold mb-6 ${category.color}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: categoryIndex * 0.2 + 0.3, duration: 0.6 }}
              >
                <TypingText 
                  texts={[category.title]}
                  options={{ speed: 80, loop: false, startDelay: 1000 + categoryIndex * 500 }}
                  cursor={false}
                />
              </motion.h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={categoryIndex * 0.3 + skillIndex * 0.1 + 0.5}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div 
            className="glass p-8 rounded-xl max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-mono font-bold text-neon-green mb-4">
              <TypingText 
                texts={["Always Learning & Growing"]}
                options={{ speed: 80, loop: false, startDelay: 2000 }}
                cursor={false}
              />
            </h3>
            <div className="text-gray-300 leading-relaxed">
              <TypingText 
                texts={[
                  "I'm passionate about continuous learning and staying up-to-date with the latest web development trends. Currently exploring GraphQL, Three.js, and advanced React patterns. Always excited to take on new challenges and expand my skill set!"
                ]}
                options={{ speed: 40, loop: false, startDelay: 3000 }}
                cursor={false}
              />
            </div>
            
            {/* Learning Path */}
            <motion.div 
              className="mt-6 flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              {["GraphQL", "Three.js", "Next.js 13+", "Docker", "AWS", "Testing"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-sm bg-gradient-to-r from-electric/20 to-neon-purple/20 text-white rounded-full border border-white/10"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <TypingText 
                    texts={[tech]}
                    options={{ speed: 100, loop: false, startDelay: 3000 + index * 200 }}
                    cursor={false}
                  />
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}