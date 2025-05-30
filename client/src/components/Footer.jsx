import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  ];

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "Team", id: "team" },
    { label: "Achievements", id: "achievements" },
    { label: "Timeline", id: "timeline" },
  ];

  return (
    <footer className="bg-dark-grey border-t border-muted py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="font-orbitron text-2xl font-bold text-neon-blue mb-4">
              NEXTRONIX
            </div>
            <p className="text-light-grey text-sm mb-4">
              Pioneering the future of robotics through innovation, education,
              and collaboration.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  viewport={{ once: true }}
                  className="text-neon-blue hover:text-white transition-colors duration-300"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-orbitron text-lg font-bold text-white mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-light-grey hover:text-neon-blue transition-colors duration-300 text-sm text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-orbitron text-lg font-bold text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-2 text-sm">
              <p className="text-light-grey">Engineering Building, Room 301</p>
              <p className="text-light-grey">University Campus</p>
              <a
                href="mailto:contact@nextronix.com"
                className="text-neon-blue hover:text-white transition-colors duration-300 block"
              >
                contact@nextronix.com
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-muted mt-8 pt-8 text-center"
        >
          <p className="text-light-grey text-sm">
            © 2024 NEXTRONIX Robotics Club. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}