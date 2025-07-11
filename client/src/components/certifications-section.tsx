import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

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
      className="glass p-8 rounded-xl hover:scale-105 transition-all duration-500 group"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10 }}
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-electric/20 to-neon-purple/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <Award className="text-electric" size={28} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-neon-green">{title}</h3>
          <p className="text-gray-300 font-medium mb-1">{issuer}</p>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span 
            key={skill}
            className={`px-3 py-1 rounded-full text-xs ${
              index % 3 === 0 
                ? "bg-electric/20 text-electric" 
                : index % 3 === 1 
                ? "bg-neon-purple/20 text-neon-purple" 
                : "bg-neon-green/20 text-neon-green"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
      
      {credentialId && (
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">ID: {credentialId}</span>
          <motion.button 
            className="magnetic-btn bg-electric/20 border border-electric px-3 py-2 rounded-lg hover:bg-electric hover:text-black transition-all flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={14} />
            Verify
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const certifications = [
    {
      title: "React.js Development Certification",
      issuer: "Meta (Facebook)",
      date: "2024",
      description: "Comprehensive certification covering React fundamentals, hooks, state management, and modern React patterns. Demonstrated proficiency in building scalable web applications.",
      credentialId: "META-REACT-2024",
      skills: ["React.js", "JSX", "Hooks", "State Management", "Component Architecture"]
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2024", 
      description: "Completed comprehensive curriculum covering JavaScript fundamentals, ES6+, algorithms, data structures, and functional programming concepts.",
      credentialId: "FCC-JS-ALG-2024",
      skills: ["JavaScript", "ES6+", "Algorithms", "Data Structures", "Problem Solving"]
    },
    {
      title: "Frontend Web Development",
      issuer: "Coursera",
      date: "2023",
      description: "Specialization in modern frontend development practices including responsive design, CSS frameworks, and JavaScript libraries.",
      credentialId: "COURSERA-FE-2023",
      skills: ["HTML5", "CSS3", "Bootstrap", "Responsive Design", "JavaScript"]
    },
    {
      title: "Python for Data Analysis",
      issuer: "DataCamp",
      date: "2023",
      description: "Comprehensive course covering Python programming for data analysis, including pandas, matplotlib, and statistical analysis techniques.",
      credentialId: "DC-PYTHON-2023",
      skills: ["Python", "Pandas", "Matplotlib", "Data Analysis", "Statistics"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-dark-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-mono font-bold text-center mb-12 text-electric"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Certifications & Achievements
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.title}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              description={cert.description}
              credentialId={cert.credentialId}
              skills={cert.skills}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-electric mb-2">4+</div>
            <div className="text-gray-400 text-sm">Certifications</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-neon-purple mb-2">15+</div>
            <div className="text-gray-400 text-sm">Skills Acquired</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-neon-green mb-2">2+</div>
            <div className="text-gray-400 text-sm">Years Learning</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-electric mb-2">100%</div>
            <div className="text-gray-400 text-sm">Completion Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}