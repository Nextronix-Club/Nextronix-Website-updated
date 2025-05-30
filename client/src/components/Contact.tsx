import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const socialLinks = [
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  ];

  const floatingDots = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    top: Math.random() * 80 + 10,
    left: Math.random() * 80 + 10,
    delay: i * 1.5,
  }));

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        {floatingDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute bg-neon-blue rounded-full"
            style={{
              width: dot.size,
              height: dot.size,
              top: `${dot.top}%`,
              left: `${dot.left}%`,
            }}
            animate={{
              y: [-20, 0, -20],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-4xl font-bold text-center mb-16 text-neon-blue"
        >
          Contact Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-orbitron text-2xl font-bold mb-6 text-white">
              Get In Touch
            </h3>
            <p className="text-light-grey mb-8 leading-relaxed">
              Ready to join the future of robotics? Connect with NEXTRONIX and
              become part of our innovative community. Whether you're a student,
              researcher, or industry professional, we welcome collaboration and
              new ideas.
            </p>

            <div className="space-y-4 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center"
              >
                <div className="bg-neon-blue/10 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                  <FaEnvelope className="text-neon-blue" />
                </div>
                <a
                  href="mailto:contact@nextronix.com"
                  className="text-white hover:text-neon-blue transition-colors duration-300"
                >
                  contact@nextronix.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-center"
              >
                <div className="bg-neon-blue/10 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                  <FaMapMarkerAlt className="text-neon-blue" />
                </div>
                <span className="text-white">Robotics Lab, Engineering Building</span>
              </motion.div>
            </div>

            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-neon-blue/10 w-12 h-12 rounded-lg flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300"
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Team collaboration"
              className="rounded-xl shadow-lg w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="font-orbitron text-xl font-bold text-white mb-2">
                Join Our Community
              </h4>
              <p className="text-light-grey text-sm">
                Collaborate with passionate robotics enthusiasts and shape the
                future of technology.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
