import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingDots = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    top: Math.random() * 80 + 10,
    left: Math.random() * 80 + 10,
    delay: i * 1.5,
  }));

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
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

      <div className="text-center z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-orbitron text-6xl md:text-8xl font-black mb-8 text-white"
        >
          NEXTRONIX
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative mb-12"
        >
          <TypingEffect
            text="New Era of Mechatronix"
            className="font-orbitron text-2xl md:text-4xl text-neon-blue"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("about")}
            className="bg-neon-blue text-black px-8 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300"
          >
            Know More
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="border-2 border-neon-blue text-neon-blue px-8 py-3 rounded-lg font-semibold hover:bg-neon-blue hover:text-black transition-all duration-300"
          >
            Connect With Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
