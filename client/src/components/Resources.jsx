import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { FaBook, FaTools, FaGithub } from "react-icons/fa";

export default function Resources() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const resources = [
    {
      id: "learning",
      icon: FaBook,
      title: "Learning Materials",
      description: "Comprehensive tutorials, documentation, and guides for robotics development and programming.",
      link: "#",
      linkText: "Access Resources",
    },
    {
      id: "tools",
      icon: FaTools,
      title: "Development Tools",
      description: "Essential software, frameworks, and hardware recommendations for robotics projects.",
      link: "#",
      linkText: "View Tools",
    },
    {
      id: "opensource",
      icon: FaGithub,
      title: "Open Source Projects",
      description: "Access our open-source robotics projects, code repositories, and collaborative development platforms.",
      link: "https://github.com",
      linkText: "Browse GitHub",
    },
  ];

  return (
    <section id="resources" className="py-20 px-4 bg-dark-grey/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-4xl font-bold text-center mb-16 text-neon-blue"
        >
          Resources
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-dark-grey rounded-xl p-6 transition-all duration-300 border border-muted hover:border-neon-blue/50 hover-shadow"
            >
              <div className="bg-neon-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <resource.icon className="text-neon-blue text-xl" />
              </div>
              <h3 className="font-orbitron text-xl font-bold mb-3 text-white">
                {resource.title}
              </h3>
              <p className="text-light-grey mb-4 text-sm">
                {resource.description}
              </p>
              <motion.a
                href={resource.link}
                target={resource.link.startsWith("http") ? "_blank" : "_self"}
                rel={resource.link.startsWith("http") ? "noopener noreferrer" : ""}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-neon-blue hover:text-white transition-colors duration-300 font-semibold text-sm inline-flex items-center"
              >
                {resource.linkText}
                <svg
                  className="w-3 h-3 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}