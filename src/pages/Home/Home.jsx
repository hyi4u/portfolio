import NavBar from "../../components/Nabar";
import { motion } from "motion/react";
import HeroSection from "./HeroSection";
export default function Home() {
  return (
    <motion.div className="background-primary">
      <NavBar />
      <div className="max-w-[75rem] min-h-screen mx-auto max-xl:max-w-auto max-xl:px-6 max-md:px-6 max-sm:px-4">
        <HeroSection />
      </div>
    </motion.div>
  );
}
