import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  delay: number;
}

function ProjectCard({ title, description, image, technologies, delay }: ProjectProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      className="perspective-1000 h-80"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        className="relative w-full h-full transform-style-preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.02, rotateX: 5 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden">
          <div className="relative w-full h-full glass rounded-xl overflow-hidden group">
            <motion.img 
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">{title}</h3>
              <div className="mt-2 text-electric text-sm font-medium">Click to see details →</div>
            </div>
            <div className="absolute top-4 right-4 w-8 h-8 bg-electric/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="w-2 h-2 bg-electric rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl rotate-y-180">
          <div className="glass p-6 rounded-xl h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-3 text-neon-green">{title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                  <span 
                    key={tech}
                    className={`px-2 py-1 rounded-full text-xs ${
                      index % 3 === 0 
                        ? "bg-electric/20 text-electric" 
                        : index % 3 === 1 
                        ? "bg-neon-purple/20 text-neon-purple" 
                        : "bg-neon-green/20 text-neon-green"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <motion.button 
                className="magnetic-btn bg-electric/20 border border-electric px-3 py-2 rounded-lg hover:bg-electric hover:text-black transition-all flex items-center gap-2 text-sm flex-1 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={14} />
                Code
              </motion.button>
              <motion.button 
                className="magnetic-btn bg-neon-purple/20 border border-neon-purple px-3 py-2 rounded-lg hover:bg-neon-purple hover:text-black transition-all flex items-center gap-2 text-sm flex-1 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={14} />
                Demo
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "Real Estate Admin Dashboard",
      description: "Developed a responsive admin dashboard for managing real estate properties and user transactions. Integrated APIs to dynamically display property listings, user profiles, and transaction data. Enhanced UI/UX consistency across multiple devices for a smooth and responsive user experience.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React.js", "TypeScript", "HTML", "CSS", "API Integration"]
    },
    {
      title: "Shopping Trends Analysis",
      description: "Analyzed consumer shopping trends using Python to extract useful patterns from large datasets. Visualized shopping behaviors and seasonal patterns with clear graphs and detailed data charts. Delivered insights to support data-driven marketing and customer-centric decision-making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "Pandas", "Matplotlib", "Data Visualization", "Analytics"]
    },
    {
      title: "AI Virtual Mouse",
      description: "Created a virtual mouse using hand gestures to enable smooth, touchless system navigation. Implemented real-time gesture tracking for cursor movement, click, and drag functionalities. Improved system accessibility with a gesture-based input method for seamless control.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Gesture Recognition"]
    },
    {
      title: "Personal Portfolio Website",
      description: "Built a responsive portfolio using React.js to showcase personal projects and development skills. Integrated light/dark mode toggle and smooth navigation for enhanced user experience. Displayed project highlights and a contact form with clean, modern design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React.js", "Bootstrap", "HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-mono font-bold text-center mb-12 text-electric"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
