import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { TypingText } from "@/hooks/use-typing-animation";

interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  certificateLink?: string;
  skills: string[];
  delay: number;
}

function CertificationCard({
  title,
  issuer,
  date,
  description,
  certificateLink,
  skills,
  delay,
}: CertificationProps) {
  const finalLink = certificateLink?.startsWith("http")
    ? certificateLink
    : "https://www.linkedin.com/in/samruddhashambharkar/details/certifications/";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="glass-intense p-6 rounded-xl hover-glow group"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start gap-4 mb-4">
        <motion.div
          className="p-3 bg-electric/20 rounded-lg group-hover:bg-electric group-hover:text-black transition-all"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Award size={24} className="text-electric group-hover:text-black" />
        </motion.div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-electric transition-colors">
            <TypingText
              texts={[title]}
              options={{ speed: 60, loop: false, startDelay: delay * 500 }}
              cursor={false}
            />
          </h3>
          <p className="text-neon-purple font-semibold">
            <TypingText
              texts={[issuer]}
              options={{
                speed: 80,
                loop: false,
                startDelay: delay * 500 + 800,
              }}
              cursor={false}
            />
          </p>
          <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">
        <TypingText
          texts={[description]}
          options={{ speed: 40, loop: false, startDelay: delay * 500 + 1500 }}
          cursor={false}
        />
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            className="px-3 py-1 text-xs bg-neon-green/20 text-neon-green rounded-full border border-neon-green/30"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: delay + 1 + index * 0.1,
              duration: 0.3,
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(34, 197, 94, 0.3)",
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      <motion.a
        href={finalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-electric hover:text-neon-purple transition-colors text-sm"
        whileHover={{ x: 5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 1.2, duration: 0.5 }}
      >
        <ExternalLink size={16} />
        <span>View Certificate</span>
      </motion.a>
    </motion.div>
  );
}

export default function CertificationsSection() {
  const certifications = [
    {
      title: " Data	Analytics	and	Visualization	Job Simulation",
      issuer: "Accenture North America (Forage)",
      date: "june 2024",
      description:
        "Comprehensive certification covering data analysis, dashboarding, and visualization using real-world scenarios.",
      certificateLink:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_rbdrXYMYFsZzMxyoq_1719313886896_completion_certificate.pdf",
      skills: ["Data Analysis", "Visualization"],
    },
    {
      title: "Cloud Security Fundamentals on Google Cloud",
      issuer: "Google",
      date: "July 2024",
      description:
        "Comprehensive certification covering cloud security principles, IAM, encryption, and secure networking on GCP.",
      certificateLink:
        "https://www.credly.com/badges/3dd9d1cc-9ad2-4c5a-bcbe-f619c54ede09/linked_in_profile",
      skills: ["Cloud Security", "Google Cloud Platform (GCP)"],
    },
    {
      title: "Java Programming",
      issuer: "Udemy",
      date: "July 2024",
      description:
        "Comprehensive certification covering Java fundamentals, OOP, JDBC integration, and MySQL backend logic.",
      certificateLink:
        "https://www.udemy.com/certificate/UC-fadf6876-fe83-42af-a7a5-bdfd66a5663c/",
      skills: ["Java", "JDBC", "MySQL", "Object-Oriented Programming (OOP)"],
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "July 2024",
      description:
        "Comprehensive certification covering HTML, CSS, media queries, and responsive layout techniques.",
      certificateLink: "", // fallback
      skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "Grid"],
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold mb-6">
            <span className="text-electric">My</span>{" "}
            <span className="text-white">Certifications</span>
          </h2>
          <div className="text-lg text-gray-400 max-w-2xl mx-auto">
            <TypingText
              texts={["Verified certificates from trusted platforms"]}
              options={{ speed: 60, delay: 3500, startDelay: 500 }}
              className="block"
            />
          </div>
        </motion.div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={cert.title} {...cert} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
