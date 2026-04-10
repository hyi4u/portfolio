import NavBar from "../../components/Nabar";
import { motion } from "motion/react";
import HeroSection from "./HeroSection";
import TopProject from "./TopProjects";
export default function Home() {
  return (
    <motion.div className="background-primary">
      <NavBar />
      <div className="max-w-300 min-h-[100dvh] mx-auto pt-20 max-xl:max-w-auto max-xl:px-6 max-md:px-6 max-sm:px-4">
        <HeroSection />
        <TopProject />
      </div>
    </motion.div>
  );
}
