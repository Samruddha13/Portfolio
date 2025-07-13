// ProjectsSection.tsx — Responsive Projects Section
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
  demoLink?: string;
  codeLink?: string;
}

function ProjectCard({
  title,
  description,
  image,
  technologies,
  delay,
  demoLink,
  codeLink,
}: ProjectProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      tabIndex={0}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="w-full max-w-md mx-auto perspective-1000 min-h-[22rem]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden glass-intense rounded-xl overflow-hidden border border-white/10">
          <div className="relative h-full">
            <img
              src={image}
              alt={title}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl font-bold mb-2 text-white">
                <TypingText
                  texts={[title]}
                  options={{ speed: 80, loop: false, startDelay: delay * 200 }}
                  cursor={false}
                />
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.slice(0, 3).map((tech) => (
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

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 glass-intense rounded-xl border border-white/10 p-4 flex flex-col">
          <h3 className="text-xl font-bold mb-3 text-electric">
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
            <h4 className="text-sm font-semibold text-neon-green mb-2">
              Technologies:
            </h4>
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
          <div className="flex gap-2 mt-auto">
            {demoLink && (
              <motion.a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 flex items-center justify-center gap-2 bg-electric/20 hover:bg-electric hover:text-black text-electric px-3 py-2 rounded-lg transition-all text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={14} /> Live Demo
              </motion.a>
            )}
            {codeLink && (
              <motion.a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 flex items-center justify-center gap-2 bg-neon-purple/20 hover:bg-neon-purple hover:text-black text-neon-purple px-3 py-2 rounded-lg transition-all text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={14} /> Code
              </motion.a>
            )}
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
      description:
        "A full-stack e-commerce platform built with React.js and Node.js. Features include user authentication, shopping cart, payment integration with Stripe, admin dashboard, and responsive design. Implements modern web technologies for optimal performance.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Stripe API",
        "JWT",
        "Tailwind CSS",
      ],
      demoLink: "https://your-ecommerce-demo.vercel.app", // 👈 replace this
      codeLink: "https://github.com/yourusername/ecommerce-platform", // 👈 replace this
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates. Features drag-and-drop functionality, team collaboration, deadline tracking, and notification system. Built with modern React patterns and WebSocket integration.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: [
        "React.js",
        "TypeScript",
        "Socket.io",
        "Redux Toolkit",
        "Material-UI",
        "Firebase",
      ],
      demoLink: "https://your-taskapp-demo.vercel.app",
      codeLink: "https://github.com/yourusername/task-manager",
    },
    {
      title: "Weather Dashboard",
      description:
        "An interactive weather dashboard providing real-time weather data and forecasts. Features location-based weather, interactive maps, weather alerts, and historical data visualization with charts and graphs.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: [
        "React.js",
        "OpenWeather API",
        "Chart.js",
        "Geolocation API",
        "CSS3",
        "Responsive Design",
      ],
      demoLink: "https://your-weatherapp-demo.vercel.app",
      codeLink: "https://github.com/yourusername/weather-dashboard",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills. Features smooth animations, interactive elements, contact form integration, and optimized performance. Built with cutting-edge web technologies.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: [
        "React.js",
        "Framer Motion",
        "Tailwind CSS",
        "TypeScript",
        "Vite",
      ],
      demoLink: "https://your-portfolio.vercel.app",
      codeLink: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media management dashboard for content creators. Features post scheduling, analytics tracking, engagement metrics, and multi-platform integration with modern UI/UX design principles.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: [
        "React.js",
        "Next.js",
        "GraphQL",
        "Prisma",
        "PostgreSQL",
        "Chakra UI",
      ],
      demoLink: "https://your-social-dashboard.vercel.app",
      codeLink: "https://github.com/yourusername/social-dashboard",
    },
    {
      title: "Library Management System",
      description:
        "An Management System for online Management with Books management, progress tracking, interactive Interface, and User Trackings. Includes student and Admin dashboards.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      technologies: [
        "React.js",
        "Redux",
        "Node.js",
        "MongoDB",
        "Video.js",
        "JWT",
        "Bootstrap",
      ],
      demoLink: "https://your-library-system.vercel.app",
      codeLink: "https://github.com/yourusername/library-management",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
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
              ]}
              options={{ speed: 50, delay: 3000, startDelay: 500 }}
              className="block"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 0.2} />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-gray-400 mb-6">
            <TypingText
              texts={["Want to see more projects?"]}
              options={{ speed: 60, delay: 4000, startDelay: 1000 }}
            />
          </p>
          <motion.button
            className="magnetic-btn bg-gradient-to-r from-neon-purple to-neon-green px-8 py-4 rounded-lg font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://github.com/Samruddha13" target="blank">
              View All Projects
            </a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
