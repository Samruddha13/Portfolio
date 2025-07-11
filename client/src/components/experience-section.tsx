import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { TypingText } from "@/hooks/use-typing-animation";

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
    <motion.div
      initial={{ opacity: 0, y: 50, x: side === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={`relative flex items-center ${
        side === "left" ? "md:justify-end" : "md:justify-start"
      }`}
    >
      {/* Timeline content - Mobile: always left, Desktop: alternating */}
      <div className={`glass-intense p-4 sm:p-6 rounded-xl hover-glow w-full max-w-sm sm:max-w-md md:max-w-lg ${
        side === "left" ? "md:mr-8" : "md:ml-8"
      }`}>
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
          <div className="flex items-center gap-2">
            <motion.div 
              className={`p-2 rounded-lg ${color} bg-opacity-20`}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Briefcase size={18} className={color} />
            </motion.div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                <TypingText 
                  texts={[title]}
                  options={{ speed: 60, loop: false, startDelay: delay * 300 + 500 }}
                  cursor={false}
                />
              </h3>
              <p className={`font-semibold text-sm sm:text-base ${color}`}>
                <TypingText 
                  texts={[company]}
                  options={{ speed: 80, loop: false, startDelay: delay * 300 + 1000 }}
                  cursor={false}
                />
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:items-end gap-1">
            <div className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
              <Calendar size={14} />
              <span>{period}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
              <MapPin size={14} />
              <span>Remote</span>
            </div>
          </div>
        </div>

        {/* Role */}
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.6 }}
        >
          <p className="text-gray-300 font-medium text-sm sm:text-base">
            <TypingText 
              texts={[role]}
              options={{ speed: 60, loop: false, startDelay: delay * 300 + 1500 }}
              cursor={false}
            />
          </p>
        </motion.div>

        {/* Responsibilities */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-neon-green mb-2">Key Responsibilities:</h4>
          <ul className="space-y-2">
            {responsibilities.map((responsibility, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-2 text-gray-300 text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.8 + index * 0.2, duration: 0.5 }}
              >
                <motion.span 
                  className={`w-2 h-2 rounded-full ${color} bg-opacity-60 mt-2 flex-shrink-0`}
                  whileHover={{ scale: 1.5 }}
                />
                <TypingText 
                  texts={[responsibility]}
                  options={{ speed: 40, loop: false, startDelay: delay * 300 + 2000 + index * 800 }}
                  cursor={false}
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline connector - Hidden on mobile, visible on desktop */}
      <motion.div 
        className="hidden md:block absolute top-1/2 transform -translate-y-1/2 z-10"
        style={{ 
          [side === "left" ? "right" : "left"]: "-1.5rem"
        }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: delay + 0.3, duration: 0.5 }}
      >
        <div className={`w-6 h-6 rounded-full border-4 ${color} bg-background`} />
      </motion.div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "TechCorp Solutions",
      role: "React.js Developer & UI/UX Implementer",
      period: "Jun 2024 - Present",
      responsibilities: [
        "Developed responsive web applications using React.js and TypeScript",
        "Implemented modern UI/UX designs with Tailwind CSS and Framer Motion",
        "Collaborated with design team to create pixel-perfect user interfaces",
        "Optimized application performance and improved Core Web Vitals scores"
      ],
      color: "text-electric",
      side: "right" as const
    },
    {
      title: "Junior Web Developer",
      company: "StartupHub India",
      role: "Full-Stack Development Intern",
      period: "Jan 2024 - May 2024",
      responsibilities: [
        "Built full-stack applications using React, Node.js, and MongoDB",
        "Created RESTful APIs and integrated third-party services",
        "Participated in code reviews and agile development processes",
        "Contributed to open-source projects and improved documentation"
      ],
      color: "text-neon-purple",
      side: "left" as const
    },
    {
      title: "Freelance Developer",
      company: "Self-Employed",
      role: "Frontend Specialist & Consultant",
      period: "Sep 2023 - Dec 2023",
      responsibilities: [
        "Delivered custom web solutions for small businesses and startups",
        "Specialized in React.js, Next.js, and modern frontend technologies",
        "Provided technical consultation on web development best practices",
        "Managed client relationships and project timelines independently"
      ],
      color: "text-neon-green",
      side: "right" as const
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold mb-6">
            <span className="text-electric">Work</span>{" "}
            <span className="text-white">Experience</span>
          </h2>
          <div className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            <TypingText 
              texts={[
                "My professional journey in web development",
                "Building digital experiences that make a difference",
                "From internships to freelancing - continuous growth"
              ]}
              options={{ speed: 60, delay: 3000, startDelay: 500 }}
              className="block"
            />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - Hidden on mobile, visible on desktop */}
          <motion.div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-electric via-neon-purple to-neon-green rounded-full"
            style={{ height: `${experiences.length * 300}px` }}
            initial={{ height: 0 }}
            whileInView={{ height: `${experiences.length * 300}px` }}
            transition={{ duration: 2, ease: "easeOut" }}
          />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-16">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.company}
                {...experience}
                delay={index * 0.3}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div 
            className="glass p-6 sm:p-8 rounded-xl max-w-3xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-mono font-bold text-neon-green mb-4">
              <TypingText 
                texts={["Ready for New Challenges"]}
                options={{ speed: 80, loop: false, startDelay: 2000 }}
                cursor={false}
              />
            </h3>
            <div className="text-gray-300 leading-relaxed text-sm sm:text-base">
              <TypingText 
                texts={[
                  "I'm passionate about creating exceptional web experiences and always eager to take on new projects. Whether it's a startup looking to build their first product or an established company wanting to modernize their web presence, I'm here to help bring your vision to life."
                ]}
                options={{ speed: 45, loop: false, startDelay: 3000 }}
                cursor={false}
              />
            </div>
            
            <motion.button 
              className="mt-6 px-6 py-3 bg-electric text-black font-semibold rounded-lg hover:bg-electric/80 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 245, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.6 }}
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}