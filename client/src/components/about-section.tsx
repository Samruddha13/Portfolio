import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react";
import { TypingText } from "@/hooks/use-typing-animation";
import useAnimatedCounter from "@/hooks/use-animated-counter";
import { useState, useEffect, useRef } from "react";
import imagePlaceholder from "../../../attached_assets/profile.jpg"; // Adjust the import path as necessary

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const yearsExperience = useAnimatedCounter(2, isVisible);
  const projectsCompleted = useAnimatedCounter(15, isVisible);
  const technologiesMastered = useAnimatedCounter(12, isVisible);
  const certifications = useAnimatedCounter(5, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const personalInfo = [
    {
      icon: Calendar,
      label: "Age",
      value: "20 years",
      color: "text-electric"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "India",
      color: "text-neon-green"
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "Computer Science",
      color: "text-neon-purple"
    },
    {
      icon: Award,
      label: "Status",
      value: "Available for work",
      color: "text-neon-pink"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-mono font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-electric">About</span>{" "}
              <span className="text-white">Me</span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="text-lg">
                <TypingText
                  texts={[
                    "Hi! I'm Samruddha Shambharkar, a passionate Computer Science student with a deep love for frontend development and creating amazing user experiences.",
                  ]}
                  options={{ speed: 50, loop: false, startDelay: 600 }}
                  cursor={false}
                />
              </div>

              <div className="text-lg">
                <TypingText
                  texts={[
                    "I specialize in React.js and modern web technologies, always staying updated with the latest trends and best practices in web development.",
                  ]}
                  options={{ speed: 50, loop: false, startDelay: 3000 }}
                  cursor={false}
                />
              </div>

              <div className="text-lg">
                <TypingText
                  texts={[
                    "My journey in programming started with curiosity and has evolved into a passion for building responsive, accessible, and performant web applications.",
                  ]}
                  options={{ speed: 50, loop: false, startDelay: 5500 }}
                  cursor={false}
                />
              </div>

              <div className="text-lg">
                <TypingText
                  texts={[
                    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or learning about the latest frontend frameworks.",
                  ]}
                  options={{ speed: 50, loop: false, startDelay: 8000 }}
                  cursor={false}
                />
              </div>
            </motion.div>

            {/* Personal Information Cards */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {personalInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    className="glass p-4 rounded-lg hover-glow"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <Icon className={`${info.color} mb-2`} size={24} />
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-semibold">
                      <TypingText
                        texts={[info.value]}
                        options={{
                          speed: 80,
                          loop: false,
                          startDelay: 10000 + index * 500,
                        }}
                        cursor={false}
                      />
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Statistics & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
           
            {/* Profile Image with Enhanced Animation */}
            <motion.div
              className="relative mx-auto w-80 h-80"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-electric via-neon-purple to-neon-green p-1 animate-gradient-shift"
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-background p-7">
                  <img
                    src={imagePlaceholder}
                    alt="Professional developer portrait"
                    className="w-full h-full object-cover "
                  />
                </div>
              </motion.div>

              {/* Floating elements around image */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-electric/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-electric font-mono font-bold">JS</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <span className="text-neon-purple font-mono font-bold">⚛️</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-neon-green font-mono text-sm">TS</span>
              </motion.div>
            </motion.div>

            {/* Quote */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <blockquote className="text-lg italic text-gray-400 border-l-4 border-electric pl-4">
                <TypingText
                  texts={[
                    '"Code is like humor. When you have to explain it, it\'s bad."',
                    '"The best error message is the one that never shows up."',
                    "\"Programming isn't about what you know; it's about what you can figure out.\"",
                  ]}
                  options={{ speed: 60, delay: 4000, startDelay: 12000 }}
                  className="text-neon-green"
                />
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}