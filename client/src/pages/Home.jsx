import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import ParallaxWrapper from "./parallax-wrapper";
import TrueFocus from "./TrueFocus";
import TypingAndDeleteText from "./TypingAndDeleteText";
import CyclingTypingText from "./CyclingTypingText";
import project from "./Achievements"; 
import Squares from "./Squares";
import robo from "./robo.gif";
import "./Home.css";
import hfr from "@assets/Projects/Human-following-robot.jpg";
import ieri from "@assets/Projects/IEri-Robot.jpg";
import gcra from "@assets/Projects/Gesture-controlled-Robot-arm.jpg";

export default function Home() {
  const handleScrollToSection = (id) => {
    console.log(`Scrolling to ${id}`);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    } else {
      console.warn(`Element with ID ${id} not found`);
    }
  };

  const projects = [
    {
      title: "Human Following Robot",
      description: "A human following robot with Self-driven navigation, sensor fusion, with modular design.",
      image: hfr,
    },
    {
      title: "Human Friendly AI-Robot",
      description: "A user friendly robot with AI integration for high quality conversation and chat.",
      image: ieri,
    },
    {
      title: "Modular Robotic Arm",
      description: "A versatile robotic arm with interchangeable tools and gesture control for industrial automation.",
      image: gcra,
    },
  ];

  const socialLinks = [
    { platform: "instagram", url: "https://www.instagram.com/nextronix.utd/", label: "Instagram" },
    { platform: "linkedin", url: "https://www.linkedin.com/company/nextronix-utd", label: "LinkedIn" },
    { platform: "github", url: "https://github.com/Nextronix-Club", label: "GitHub" },
    { platform: "youtube", url: "https://www.youtube.com/@NEXTRONIX-s6x", label: "YouTube" },
    { platform: "whatsapp", url: "https://whatsapp.com/channel/0029VbBFW3NHbFVCSIoORn1H", label: "Whatsapp" },
  ];

  const roboticsFacts = [
    "Hi",
    "We are NEXTRONIX",
    "Do you know the fact",
    "Robotics is the technology of future.",
    "Robots can perform tasks with precision.",
    "Mechatronics powers autonomous systems.",
  ];

  return (
    <div className="min-h-screen bg-deep-100 text-white font-roboto relative">
      <div className="absolute inset-0 z-0 opacity-90">
        <Squares
          direction="diagonal"
          speed={0.7}
          borderColor="#999"
          squareSize={100}
          hoverFillColor="#222"
        />
      </div>
      <section className="relative min-h-screen pt-20 flex items-center overflow-hidden" id="hero">
        <div className="container px-4 pb-20 pt-10 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center">
                <TrueFocus
                  sentence="NEXTRONIX"
                  manualMode={false}
                  blurAmount={3}
                  borderColor="#ffffff"
                  glowColor="rgba(0, 0, 0, 0)" // Changed to transparent to remove glow effect
                  animationDuration={0.5}
                  pauseBetweenAnimations={2}
                  textColor="#ffffff"
                />
              </div>
              <div className="flex justify-center">
                <div className="min-h-[60px] w-full flex justify-center items-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.6 }}
                    className="mt-0 mb-4 w-full text-center"
                  >
                    <TypingAndDeleteText
                      text="NEXT ERA OF MECHATRONIX"
                      className="text-cyan text-base md:text-lg font-jetbrains"
                    />
                  </motion.div>
                </div>
              </div>
              <div className="flex justify-center">
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5, duration: 0.6 }}
                >
                  <Button 
                    variant="secondary"
                    size="lg" 
                    onClick={() => handleScrollToSection('projects')}
                  >
                    Explore Projects
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    onClick={() => handleScrollToSection('about')}
                  >
                    About us
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <ParallaxWrapper speed={0.03}>
              <motion.div
                className="relative w-full max-w-[400px] mx-auto aspect-square border-2 border-secondary bg-slate-900 rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <img
                  src={robo}
                  alt="NEXTRONIX Robotics Animation"
                  className="w-full h-full object-cover rounded-xl shadow-img"
                  loading="lazy"
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-slate-900 p-4 rounded-md border border-electric-blue min-w-[200px] min-h-[40px] flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <CyclingTypingText
                    texts={roboticsFacts}
                    className="font-jetbrains text-sm text-white-cyan"
                  />
                </motion.div>
              </motion.div>
            </ParallaxWrapper>
          </div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <button
              onClick={() => {
                console.log("ChevronDown clicked");
                handleScrollToSection("projects");
              }}
              className="inline-block animate-bounce text-cyber-cyan hover:text-electric-blue"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-8 w-8" />
            </button>
          </motion.div>
        </div>
      </section>
      <motion.section
        className="py-16 bg-deep-100 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id="projects"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-center mb-12 text-white tracking-tight">
            Featured Innovations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="relative">
                <motion.div
                  className="relative bg-black rounded-xl border border-white p-6 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay:  0 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover rounded-lg mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-orbitron font-semibold mb-4 text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <Button
                    className=" hover:text-white transition-all duration-300"
                    variant = "secondary"
                    onClick={() => {
                      console.log(`${project.title} View Details clicked`);
                      handleScrollToSection(project);
                    }}
                  >
                    View Details
                  </Button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        className="py-16 bg-deep-100 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id="about"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-8 text-white tracking-tight">
            About NEXTRONIX
          </h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="relative bg-black rounded-xl border border-white-black p-6 sm:p-8">
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6">
                <span className="font-semibold">Nextronix</span>, the official Robotics Club of the University Teaching Department at Chhattisgarh Swami Vivekanand Technical University (CSVTU), operates under the esteemed <span className="font-semibold">Programmers' Paradise Technical Society</span>. We are a dynamic community of students committed to advancing robotics, embedded systems, and automation technologies through innovation and collaboration.
              </p>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6">
                Our mission is to unite passionate students in a hands-on learning environment, empowering them to design, build, and innovate through robotics projects. We foster technical excellence by exploring cutting-edge fields such as the Internet of Things (IoT), Artificial Intelligence (AI), Machine Learning (ML), microcontrollers, and automation.
              </p>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6">
                At Nextronix, we engage in diverse activities, including designing and prototyping robots, conducting research and development, and organizing workshops, hackathons, and tech talks. We actively participate in national competitions and contribute to open-source projects, promoting knowledge sharing and community growth. Join us to transform ideas into impactful solutions and shape the future of technology.
              </p>
              <div className="flex justify-center gap-6">
                {socialLinks.map(({ platform, url, label }) => (
                  <motion.a
                    key={platform}
                    href={url}
                    className="text-lg text-white/80 hover:text-cyber-cyan transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Visit NEXTRONIX on ${label}`}
                  >
                    <i className={`fab fa-${platform}`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}