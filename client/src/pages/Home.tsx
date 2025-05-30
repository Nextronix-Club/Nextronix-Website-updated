import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Timeline from "@/components/Timeline";
import Team from "@/components/Team";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <FeaturedProject />
        <About />
        <Achievements />
        <Timeline />
        <Team />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
