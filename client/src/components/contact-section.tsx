import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-mono font-bold text-center mb-12 text-electric"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="glass p-8 rounded-xl"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-neon-green">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-dark-card border-gray-600 focus:border-electric"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-dark-card border-gray-600 focus:border-electric"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message..."
                  required
                  className="bg-dark-card border-gray-600 focus:border-electric"
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-electric to-neon-purple hover:scale-105 transition-all"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2" size={16} />
                </Button>
              </motion.div>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="glass p-6 rounded-xl hover:scale-105 transition-transform"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-electric/20 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-electric" size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-400">samruddha.enter@gmail.com</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass p-6 rounded-xl hover:scale-105 transition-transform"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-neon-purple" size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-400">+91 72085 52797</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass p-6 rounded-xl hover:scale-105 transition-transform"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-neon-green" size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-gray-400">Nagpur, India</p>
                </div>
              </div>
            </motion.div>
            
            <div className="flex space-x-4">
              <motion.a 
                href="#"
                className="magnetic-btn w-12 h-12 bg-electric/20 rounded-lg flex items-center justify-center hover:bg-electric hover:text-black transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="#"
                className="magnetic-btn w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center hover:bg-neon-purple hover:text-black transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="mailto:samruddha.enter@gmail.com"
                className="magnetic-btn w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center hover:bg-neon-green hover:text-black transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
