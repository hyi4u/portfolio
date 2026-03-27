import { useState } from "react";
import { motion } from "motion/react";
export default function FillButton({
  children,
 
  fillColor = "#9baa8a",
  borderClass = "border-black text-black",
  onClick,
  className = " ",
}) {

  
  return (
    <motion.button
      
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className={`overflow-hidden sm:relative px-8 py-3 rounded-2xl font-bold cursor-pointer bg-white text-black border-none ${className}`}
    >

      <motion.span
        variants={{
          initial: { scale: 0, opacity: 1 },
          hover: { scale: 1.5, opacity: 1  }, 
        }}
        transition={{
          duration: 1,
          ease: [0.19, 1, 0.22, 1], 
        }}
        className={`absolute inset-0 bg-[${fillColor}] rounded-full`}
        style={{
          width: "160%", 
          height: "500%", 
          left: "-30%",
          top: "-200%",
          zIndex: 0,
        }}
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
