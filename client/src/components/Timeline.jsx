import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { timelineData } from "../data/timelineData";

export default function Timeline() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <section id="timeline" className="py-20 px-4 bg-dark-grey/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-4xl font-bold text-center mb-16 text-neon-blue"
        >
          Our Journey
        </motion.h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-neon-blue"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="flex-1 pr-8 text-right">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-dark-grey p-6 rounded-xl border border-muted hover:border-neon-blue/50 transition-all duration-300"
                      >
                        <h3 className="font-orbitron text-xl font-bold text-neon-blue mb-2">
                          {item.year} - {item.title}
                        </h3>
                        <p className="text-light-grey">{item.description}</p>
                      </motion.div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-blue rounded-full border-4 border-black"></div>
                    <div className="flex-1 pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-blue rounded-full border-4 border-black"></div>
                    <div className="flex-1 pl-8">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-dark-grey p-6 rounded-xl border border-muted hover:border-neon-blue/50 transition-all duration-300"
                      >
                        <h3 className="font-orbitron text-xl font-bold text-neon-blue mb-2">
                          {item.year} - {item.title}
                        </h3>
                        <p className="text-light-grey">{item.description}</p>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}