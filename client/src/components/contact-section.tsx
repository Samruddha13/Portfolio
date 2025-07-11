import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { TypingText } from "@/hooks/use-typing-animation";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    
    // Show success feedback (could integrate with a toast system)
    alert('Message sent successfully! I\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "samruddha.enter@gmail.com",
      href: "mailto:samruddha.enter@gmail.com",
      color: "text-electric"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      color: "text-neon-green"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
      color: "text-neon-purple"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/samruddha",
      color: "hover:text-electric"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/samruddha-shambharkar",
      color: "hover:text-neon-purple"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold mb-6">
            <span className="text-electric">Get In</span>{" "}
            <span className="text-white">Touch</span>
          </h2>
          <div className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            <TypingText 
              texts={[
                "Let's discuss your next project or collaboration opportunity",
                "Available for freelance work and exciting new challenges",
                "Ready to bring your ideas to life with modern web technology"
              ]}
              options={{ speed: 60, delay: 3500, startDelay: 500 }}
              className="block"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-intense p-6 sm:p-8 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-mono font-bold text-neon-green mb-6">
                <TypingText 
                  texts={["Contact Information"]}
                  options={{ speed: 80, loop: false, startDelay: 1000 }}
                  cursor={false}
                />
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 group cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + index * 0.2, duration: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className={`p-3 bg-white/5 rounded-lg ${info.color} group-hover:bg-white/10 transition-colors`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon size={20} />
                      </motion.div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium group-hover:text-electric transition-colors">
                          <TypingText 
                            texts={[info.value]}
                            options={{ speed: 60, loop: false, startDelay: 2000 + index * 300 }}
                            cursor={false}
                          />
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <motion.div 
                className="mt-8 pt-6 border-t border-white/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.6 }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">
                  <TypingText 
                    texts={["Follow Me"]}
                    options={{ speed: 80, loop: false, startDelay: 3000 }}
                    cursor={false}
                  />
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-white/5 rounded-lg text-gray-400 ${social.color} transition-all hover:scale-110 hover:bg-white/10`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 3.5 + index * 0.1, duration: 0.3 }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Availability Status */}
            <motion.div 
              className="glass p-6 rounded-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div 
                className="flex items-center justify-center gap-2 mb-3"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="w-3 h-3 bg-neon-green rounded-full"></span>
                <span className="text-neon-green font-semibold">Available for Work</span>
              </motion.div>
              <p className="text-gray-400 text-sm">
                <TypingText 
                  texts={["Currently accepting new projects and collaborations"]}
                  options={{ speed: 50, loop: false, startDelay: 2000 }}
                  cursor={false}
                />
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="glass-intense p-6 sm:p-8 rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl sm:text-2xl font-mono font-bold text-electric mb-6">
              <TypingText 
                texts={["Send me a message"]}
                options={{ speed: 80, loop: false, startDelay: 1200 }}
                cursor={false}
              />
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.5 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9, duration: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-electric text-black font-semibold py-3 px-6 rounded-lg hover:bg-electric/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 245, 255, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            <motion.p 
              className="mt-4 text-center text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              <TypingText 
                texts={["I'll get back to you within 24 hours"]}
                options={{ speed: 60, loop: false, startDelay: 3000 }}
                cursor={false}
              />
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}