import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function About() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const socialLinks = [
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 bg-dark-grey/50"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-4xl font-bold text-center mb-16 text-neon-blue"
        >
          About NEXTRONIX
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-orbitron text-2xl font-bold mb-6 text-white">
              Our Mission
            </h3>
            <p className="text-light-grey leading-relaxed mb-6">
              NEXTRONIX is a cutting-edge robotics club dedicated to advancing
              the field of mechatronics through innovation, collaboration, and
              hands-on learning. We bring together passionate students,
              engineers, and mentors to create revolutionary robotic solutions
              that address real-world challenges.
            </p>
            <p className="text-light-grey leading-relaxed mb-6">
              Our vision is to become a leading force in robotics education and
              research, fostering the next generation of engineers and
              innovators who will shape the future of automation and artificial
              intelligence.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  className="text-neon-blue hover:text-white transition-colors duration-300"
                >
                  <social.icon className="text-2xl" />
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
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Robotics workshop"
              className="rounded-xl shadow-lg w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
