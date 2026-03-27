import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import { Menu } from "lucide-react";
import { useMenuState } from "../hooks/useMenuState";
import MobileDrawer from "./MobileDrawer";
import { motion, scale } from "motion/react";
import logoImage from "../assets/logo.png";
import FillButton from "./FillButton";
export default function Navbar() {
  const location = useLocation().pathname.split("/")[1];
  const { isOpen, toggle, setIsOpen } = useMenuState();

  const NAV_ITEMS = [
    { title: "", text: "Home" },
    { title: "project", text: "Project" },
    { title: "about", text: "About me" },
  ];
  return (
    <>
      <div className="max-w-8xl bg-background flex items-center justify-between py-4 px-5 shadow-sm text-white sticky top-0 left-0 right-0 glass  z-50 ">
        <div className=" pb-1 flex-center gap-1">
          <button
            onClick={toggle}
            className="sm:hidden text-copy-secondary hover:text-copy-primary transition-colors"
            aria-label="فتح القائمة"
          >
            <Menu />
          </button>
          <div className="w-10 h-10">
            <img className="w-full h-full" src={logoImage} alt="" />
          </div>
          <h3 className="">Haider.dev</h3>
        </div>
        <ul className=" hidden sm:flex sm:flex-[0.9] md:flex-[0.7]  items-center   justify-evenly ">
          {[
            { title: "", text: "Home" },
            { title: "project", text: "Project" },
            { title: "about", text: "About me" },
          ].map((item, index) => (
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
              className={`${item.title === location ? "border-b border-b-primary " : ""} `}
            >
              <Link to={`/${item.title}`}>{item.text}</Link>
            </motion.li>
          ))}
        </ul>
        <div className="hidden sm:flex justify-between items-center gap-1">
          <FillButton fillClass="#9baa8a" className="text-bold">
            Get In Touch
          </FillButton>
        </div>
      </div>
      <MobileDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        location={location}
        navItems={NAV_ITEMS}
      />
    </>
  );
}
