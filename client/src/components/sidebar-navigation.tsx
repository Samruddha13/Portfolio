import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Home, User, Code, Award, Briefcase, Mail } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";
import { TypingText } from "@/hooks/use-typing-animation";

export default function SidebarNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Code },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      {/* Menu Toggle Button */}
      <motion.button
        className="fixed top-3 left-6 z-50 glass-intense p-3 rounded-lg hover-glow cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="text-electric" size={24} />
          ) : (
            <Menu className="text-electric" size={24} />
          )}
        </motion.div>
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 top-0 h-full w-80 glass-intense z-40 border-r border-white/10"
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="p-8 h-full flex flex-col">
              {/* Logo/Header */}
              <motion.div
                className="mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-2xl font-mono font-bold text-electric  mb-2 top-6"></div>
              </motion.div>

              {/* Navigation Items */}
              <nav className="flex-1">
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-all group text-left"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ x: 10 }}
                      >
                        <Icon
                          className="text-electric group-hover:text-neon-purple transition-colors"
                          size={20}
                        />
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {item.label}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </nav>

              {/* Theme Toggle */}
              <motion.div
                className="mt-8 pt-8 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  onClick={toggleTheme}
                  className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-all group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    animate={{ rotate: theme === "dark" ? 0 : 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    {theme === "dark" ? (
                      <Sun className="text-neon-orange" size={20} />
                    ) : (
                      <Moon className="text-neon-purple" size={20} />
                    )}
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </span>
                </motion.button>

                {/* Social Links */}
                <div className="mt-6 text-center">
                  <div className="text-xs text-gray-500 mb-3">
                    <TypingText
                      texts={[
                        "Connect with me",
                        "Let's build together",
                        "Available for projects",
                      ]}
                      options={{ speed: 60, delay: 2000, startDelay: 1000 }}
                    />
                  </div>
                  <div className="flex justify-center gap-3">
                    <motion.a
                      href="https://www.linkedin.com/in/samruddhashambharkar/"
                      className="w-10 h-10 bg-electric/20 rounded-lg flex items-center justify-center hover:bg-electric hover:text-black transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-linkedin text-sm"></i>
                    </motion.a>
                    <motion.a
                      href="https://github.com/Samruddha13"
                      className="w-10 h-10 bg-neon-purple/20 rounded-lg flex items-center justify-center hover:bg-neon-purple hover:text-black transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-github text-sm"></i>
                    </motion.a>
                    <motion.a
                      href="mailto:samruddha.enter@gmail.com"
                      className="w-10 h-10 bg-neon-green/20 rounded-lg flex items-center justify-center hover:bg-neon-green hover:text-black transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail size={14} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}