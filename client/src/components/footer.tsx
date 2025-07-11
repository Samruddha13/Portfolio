import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer 
      className="py-8 border-t border-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400">
          © 2025 Samruddha Shambharkar. Built with passion and <span className="text-electric">React.js</span>
        </p>
      </div>
    </motion.footer>
  );
}
