import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { TypingText } from "@/hooks/use-typing-animation";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialId?: string;
  skills: string[];
  delay: number;
}

function CertificationCard({ title, issuer, date, description, credentialId, skills, delay }: CertificationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="glass-intense p-6 rounded-xl hover-glow group"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start gap-4 mb-4">
        <motion.div 
          className="p-3 bg-electric/20 rounded-lg group-hover:bg-electric group-hover:text-black transition-all"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Award size={24} className="text-electric group-hover:text-black" />
        </motion.div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-electric transition-colors">
            <TypingText 
              texts={[title]}
              options={{ speed: 60, loop: false, startDelay: delay * 500 }}
              cursor={false}
            />
          </h3>
          <p className="text-neon-purple font-semibold">
            <TypingText 
              texts={[issuer]}
              options={{ speed: 80, loop: false, startDelay: delay * 500 + 800 }}
              cursor={false}
            />
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">
        <TypingText 
          texts={[description]}
          options={{ speed: 40, loop: false, startDelay: delay * 500 + 1500 }}
          cursor={false}
        />
      </p>

      {credentialId && (
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.8, duration: 0.5 }}
        >
          <p className="text-sm text-gray-400">
            Credential ID: <span className="text-neon-green font-mono">{credentialId}</span>
          </p>
        </motion.div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            className="px-3 py-1 text-xs bg-neon-green/20 text-neon-green rounded-full border border-neon-green/30"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 1 + index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(34, 197, 94, 0.3)" }}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      <motion.button 
        className="flex items-center gap-2 text-electric hover:text-neon-purple transition-colors text-sm"
        whileHover={{ x: 5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 1.2, duration: 0.5 }}
      >
        <ExternalLink size={16} />
        <span>View Certificate</span>
      </motion.button>
    </motion.div>
  );
}

export default function CertificationsSection() {
  const certifications = [
    {
      title: "React.js Developer Certification",
      issuer: "Meta (Facebook)",
      date: "March 2024",
      description: "Comprehensive certification covering React fundamentals, hooks, state management, and modern React patterns. Includes hands-on projects and real-world application development.",
      credentialId: "FB-REACT-2024-001",
      skills: ["React.js", "JSX", "Hooks", "State Management", "Component Design"]
    },
    {
      title: "Frontend Web Development",
      issuer: "FreeCodeCamp",
      date: "January 2024",
      description: "Complete frontend development curriculum covering HTML5, CSS3, JavaScript ES6+, responsive design, and modern frontend frameworks with practical projects.",
      credentialId: "FCC-FE-2024-002",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Accessibility"]
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "December 2023",
      description: "Advanced JavaScript programming concepts including algorithms, data structures, functional programming, and problem-solving techniques.",
      credentialId: "FCC-JS-2023-003",
      skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"]
    },
    {
      title: "Modern Web Development with TypeScript",
      issuer: "Udemy",
      date: "November 2023",
      description: "Comprehensive TypeScript course covering type system, advanced types, generics, and integration with modern frameworks like React and Node.js.",
      credentialId: "UD-TS-2023-004",
      skills: ["TypeScript", "Type System", "Generics", "React TypeScript"]
    },
    {
      title: "Git and GitHub Mastery",
      issuer: "GitHub",
      date: "October 2023",
      description: "Complete version control mastery including Git workflows, branching strategies, collaboration best practices, and advanced GitHub features.",
      credentialId: "GH-GIT-2023-005",
      skills: ["Git", "GitHub", "Version Control", "Collaboration", "CI/CD"]
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
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
            <span className="text-white">Certifications</span>
          </h2>
          <div className="text-lg text-gray-400 max-w-2xl mx-auto">
            <TypingText 
              texts={[
                "Professional certifications that validate my technical expertise",
                "Continuous learning through industry-recognized programs",
                "Building credibility through verified skills and knowledge"
              ]}
              options={{ speed: 60, delay: 3500, startDelay: 500 }}
              className="block"
            />
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.title}
              {...cert}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Learning Journey */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.div 
            className="glass p-8 rounded-xl max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-mono font-bold text-neon-green mb-4">
              <TypingText 
                texts={["Commitment to Excellence"]}
                options={{ speed: 80, loop: false, startDelay: 2000 }}
                cursor={false}
              />
            </h3>
            <div className="text-gray-300 leading-relaxed mb-6">
              <TypingText 
                texts={[
                  "Each certification represents hours of dedicated learning and practical application. I believe in validating my skills through recognized industry standards and continuously updating my knowledge to stay current with evolving technologies."
                ]}
                options={{ speed: 45, loop: false, startDelay: 3000 }}
                cursor={false}
              />
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-electric mb-2">5+</div>
                <p className="text-gray-400 text-sm">Certifications Earned</p>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-neon-purple mb-2">200+</div>
                <p className="text-gray-400 text-sm">Hours of Learning</p>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-neon-green mb-2">10+</div>
                <p className="text-gray-400 text-sm">Skills Validated</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}