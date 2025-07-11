import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItemProps {
  title: string;
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
  color: string;
  side: "left" | "right";
  delay: number;
}

function TimelineItem({ title, company, role, period, responsibilities, color, side, delay }: TimelineItemProps) {
  return (
    <div className="relative flex items-center mb-12">
      {side === "left" ? (
        <>
          <motion.div 
            className="w-1/2 pr-8 text-right"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
          >
            <div className="glass p-6 rounded-xl">
              <h3 className={`text-xl font-bold mb-2 ${color}`}>{company}</h3>
              <p className="text-neon-green mb-2">{role}</p>
              <p className="text-gray-400 text-sm mb-4">{period}</p>
              <ul className="text-gray-300 text-sm space-y-2">
                {responsibilities.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-dark-bg"
            style={{ backgroundColor: color === "text-electric" ? "#00F5FF" : color === "text-neon-purple" ? "#7C3AED" : "#00FF88" }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
          />
          <div className="w-1/2 pl-8"></div>
        </>
      ) : (
        <>
          <div className="w-1/2 pr-8"></div>
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-dark-bg"
            style={{ backgroundColor: color === "text-electric" ? "#00F5FF" : color === "text-neon-purple" ? "#7C3AED" : "#00FF88" }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
          />
          <motion.div 
            className="w-1/2 pl-8"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
          >
            <div className="glass p-6 rounded-xl">
              <h3 className={`text-xl font-bold mb-2 ${color}`}>{company}</h3>
              <p className="text-neon-green mb-2">{role}</p>
              <p className="text-gray-400 text-sm mb-4">{period}</p>
              <ul className="text-gray-300 text-sm space-y-2">
                {responsibilities.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "FireBlaze Technologies Pvt. Ltd.",
      role: "Frontend Developer Intern",
      period: "Feb 2025 - Present",
      responsibilities: [
        "Built responsive web interfaces using React.js",
        "Collaborated on clean, scalable frontend code",
        "Assisted in API integration and performance optimization"
      ],
      color: "text-electric",
      side: "left" as const
    },
    {
      title: "Frontend Developer Intern",
      company: "Dealintra Pvt. Ltd.",
      role: "Frontend Developer Intern", 
      period: "June 2025 - Present",
      responsibilities: [
        "Developed reusable UI components with React.js",
        "Implemented responsive design principles",
        "Managed version control using GitHub"
      ],
      color: "text-neon-purple",
      side: "right" as const
    },
    {
      title: "B-Tech Computer Science & Engineering",
      company: "Anjuman College of Engineering & Technology",
      role: "Student",
      period: "2022 - Present",
      responsibilities: [
        "Studying Computer Science & Engineering",
        "Learning modern web technologies",
        "Building projects and gaining practical experience"
      ],
      color: "text-neon-green",
      side: "left" as const
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-mono font-bold text-center mb-12 text-electric"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Experience & Timeline
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-electric via-neon-purple to-neon-green"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.company}
                title={exp.title}
                company={exp.company}
                role={exp.role}
                period={exp.period}
                responsibilities={exp.responsibilities}
                color={exp.color}
                side={exp.side}
                delay={index * 0.3}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
