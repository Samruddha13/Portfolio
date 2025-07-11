import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  delay: number;
}

function ProjectCard({ title, description, image, technologies, delay }: ProjectProps) {
  return (
    <motion.div 
      className="glass p-8 rounded-xl hover:scale-105 transition-all duration-500 group"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10 }}
    >
      <motion.img 
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-6 group-hover:scale-105 transition-transform"
        whileHover={{ scale: 1.02 }}
      />
      <h3 className="text-2xl font-bold mb-4 text-neon-green">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={tech}
            className={`px-3 py-1 rounded-full text-sm ${
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
      <div className="flex gap-4">
        <motion.button 
          className="magnetic-btn bg-electric/20 border border-electric px-4 py-2 rounded-lg hover:bg-electric hover:text-black transition-all flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={16} />
          Code
        </motion.button>
        <motion.button 
          className="magnetic-btn bg-neon-purple/20 border border-neon-purple px-4 py-2 rounded-lg hover:bg-neon-purple hover:text-black transition-all flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink size={16} />
          Live Demo
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "Real Estate Admin Dashboard",
      description: "Responsive admin dashboard for managing real estate properties and user transactions. Built with React.js and TypeScript for enhanced user experience.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React.js", "TypeScript", "HTML"]
    },
    {
      title: "Shopping Trends Analysis",
      description: "Data analysis project using Python to extract useful patterns from shopping datasets. Created visualizations for better understanding of consumer behavior.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "Pandas", "Matplotlib"]
    },
    {
      title: "AI Virtual Mouse",
      description: "Virtual mouse using hand gestures for touchless system navigation. Implemented real-time gesture tracking for improved accessibility.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "OpenCV", "MediaPipe"]
    },
    {
      title: "Personal Portfolio Website",
      description: "Responsive portfolio built with React.js featuring light/dark mode toggle and smooth navigation. Showcases projects with clean, modern design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React.js", "Bootstrap", "JavaScript"]
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
