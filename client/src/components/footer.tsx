import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { TypingText } from "@/hooks/use-typing-animation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/samruddha",
      color: "hover:text-electric"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/samruddha-shambharkar",
      color: "hover:text-neon-purple"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:samruddha.enter@gmail.com",
      color: "hover:text-neon-green"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand & Description */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-mono font-bold text-electric mb-3">
                <TypingText 
                  texts={["&lt;/Samruddha&gt;"]}
                  options={{ speed: 100, loop: false, startDelay: 500 }}
                  cursor={false}
                />
              </h3>
              <p className="text-gray-400 leading-relaxed">
                <TypingText 
                  texts={[
                    "Frontend Developer passionate about creating beautiful, functional web experiences with modern technologies."
                  ]}
                  options={{ speed: 50, loop: false, startDelay: 1500 }}
                  cursor={false}
                />
              </p>
            </div>
            
            <motion.div 
              className="flex items-center gap-2 text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <MapPin size={16} className="text-neon-green" />
              <span>Based in India</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h4 className="text-xl font-semibold text-white mb-4">
              <TypingText 
                texts={["Quick Links"]}
                options={{ speed: 80, loop: false, startDelay: 1000 }}
                cursor={false}
              />
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-electric transition-colors cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links & Contact */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h4 className="text-xl font-semibold text-white mb-4">
              <TypingText 
                texts={["Let's Connect"]}
                options={{ speed: 80, loop: false, startDelay: 1500 }}
                cursor={false}
              />
            </h4>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/5 rounded-lg ${social.color} transition-all hover:scale-110 hover:bg-white/10`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8 + index * 0.1, duration: 0.3 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>

            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.6 }}
            >
              <p className="text-sm text-gray-400">
                <TypingText 
                  texts={["Available for freelance work"]}
                  options={{ speed: 60, loop: false, startDelay: 2500 }}
                  cursor={false}
                />
              </p>
              <motion.a
                href="mailto:samruddha.enter@gmail.com"
                className="inline-flex items-center gap-2 text-neon-green hover:text-electric transition-colors text-sm"
                whileHover={{ x: 5 }}
              >
                <Mail size={16} />
                <span>samruddha.enter@gmail.com</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.p 
            className="text-gray-400 text-sm flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <span>© {currentYear} Samruddha Shambharkar. Made with</span>
            <motion.span 
              className="text-red-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={16} fill="currentColor" />
            </motion.span>
            <span>using React & TypeScript</span>
          </motion.p>

          <motion.div 
            className="flex items-center gap-4 text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <span>Built with modern web technologies</span>
            <div className="flex gap-2">
              <span className="w-2 h-2 bg-electric rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></span>
              <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" style={{animationDelay: '1s'}}></span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}