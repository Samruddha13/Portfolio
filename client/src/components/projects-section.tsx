import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { TypingText } from "@/hooks/use-typing-animation";
import { useState } from "react";

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="h-80 sm:h-96 perspective-1000 w-full max-w-sm mx-auto sm:max-w-none"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front of Card */}
        <div className="absolute inset-0 w-full h-full backface-hidden glass-intense rounded-xl overflow-hidden border border-white/10">
          <div className="relative h-full">
            <img 
              src={image} 
              alt={title}
              className="w-full h-2/3 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-white">
                <TypingText 
                  texts={[title]}
                  options={{ speed: 80, loop: false, startDelay: delay * 200 }}
                  cursor={false}
                />
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 3).map((tech, index) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 text-xs bg-electric/20 text-electric rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-neon-purple/20 text-neon-purple rounded-full">
                    +{technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 glass-intense rounded-xl border border-white/10 p-4 sm:p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-electric">
            <TypingText 
              texts={[title]}
              options={{ speed: 60, loop: false, startDelay: 500 }}
              cursor={false}
            />
          </h3>
          
          <p className="text-gray-300 mb-4 flex-1 text-sm leading-relaxed">
            <TypingText 
              texts={[description]}
              options={{ speed: 30, loop: false, startDelay: 800 }}
              cursor={false}
            />
          </p>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-neon-green mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-1">
              {technologies.map((tech, index) => (
                <motion.span 
                  key={tech}
                  className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3">
            <motion.button 
              className="flex-1 flex items-center justify-center gap-2 bg-electric/20 hover:bg-electric hover:text-black text-electric px-3 py-2 rounded-lg transition-all text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <ExternalLink size={14} />
              Live Demo
            </motion.button>
            <motion.button 
              className="flex-1 flex items-center justify-center gap-2 bg-neon-purple/20 hover:bg-neon-purple hover:text-black text-neon-purple px-3 py-2 rounded-lg transition-all text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
            >
              <Github size={14} />
              Code
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React.js and Node.js. Features include user authentication, shopping cart, payment integration with Stripe, admin dashboard, and responsive design. Implements modern web technologies for optimal performance.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API", "JWT", "Tailwind CSS"]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates. Features drag-and-drop functionality, team collaboration, deadline tracking, and notification system. Built with modern React patterns and WebSocket integration.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React.js", "TypeScript", "Socket.io", "Redux Toolkit", "Material-UI", "Firebase"]
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard providing real-time weather data and forecasts. Features location-based weather, interactive maps, weather alerts, and historical data visualization with charts and graphs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React.js", "OpenWeather API", "Chart.js", "Geolocation API", "CSS3", "Responsive Design"]
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects and skills. Features smooth animations, interactive elements, contact form integration, and optimized performance. Built with cutting-edge web technologies.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Vite", "Email.js"]
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive social media management dashboard for content creators. Features post scheduling, analytics tracking, engagement metrics, and multi-platform integration with modern UI/UX design principles.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React.js", "Next.js", "GraphQL", "Prisma", "PostgreSQL", "Chakra UI"]
    },
    {
      title: "Learning Management System",
      description: "An educational platform for online learning with course management, progress tracking, interactive quizzes, and video streaming. Includes student and instructor dashboards with comprehensive learning analytics.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: ["React.js", "Redux", "Node.js", "MongoDB", "Video.js", "JWT", "Bootstrap"]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
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
            <span className="text-white">Projects</span>
          </h2>
          <div className="text-lg text-gray-400 max-w-2xl mx-auto">
            <TypingText 
              texts={[
                "Explore my latest projects showcasing modern web development skills",
                "Each project demonstrates different aspects of full-stack development",
                "Hover over the cards to discover more details about each project"
              ]}
              options={{ speed: 50, delay: 3000, startDelay: 500 }}
              className="block"
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-gray-400 mb-6">
            <TypingText 
              texts={[
                "Want to see more projects or discuss a collaboration?",
                "Check out my GitHub for more repositories and code samples",
                "Let's build something amazing together!"
              ]}
              options={{ speed: 60, delay: 4000, startDelay: 1000 }}
            />
          </p>
          <motion.button 
            className="magnetic-btn bg-gradient-to-r from-neon-purple to-neon-green px-8 py-4 rounded-lg font-semibold transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(236, 72, 153, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}