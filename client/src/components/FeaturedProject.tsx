import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function FeaturedProject() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-4xl font-bold text-center mb-16 text-neon-blue"
        >
          Featured Project
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-dark-grey rounded-xl overflow-hidden transition-all duration-500 border border-muted hover:border-neon-blue/50 hover-shadow"
          >
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
              alt="Advanced autonomous robot"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="font-orbitron text-2xl font-bold mb-4 text-white">
                Autonomous Navigation Robot
              </h3>
              <p className="text-light-grey mb-6 leading-relaxed">
                An advanced autonomous robot capable of real-time environment
                mapping, obstacle detection, and path planning using LIDAR
                sensors and computer vision algorithms. Built with ROS2 and
                featuring machine learning capabilities.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("achievements")}
                className="inline-flex items-center bg-neon-blue text-black px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300"
              >
                View Details
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
