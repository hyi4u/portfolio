import { motion } from "motion/react";

export default function FillButton({
  children,
  fillColor = "#9baa8a",
  className = "",
  onClick,
}) {
  return (
    <motion.button
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      // Removed bg-white so the background is clean for the animation
      className={`relative overflow-hidden px-8 py-3 rounded-2xl font-bold cursor-pointer border-none bg-white text-black ${className}`}
    >
      {/* The Animated Fill Layer */}
      <motion.span
        variants={{
          initial: { scale: 0 ,opacity:1 },
          hover: { scale: 1 ,opacity:1},
          top: { scale: 1 , opacity:1},
        }}
        transition={{
          duration: 0.8,
          ease: [0.19, 1, 0.22, 1],
        }}
        // Use the style prop for the dynamic background color
        style={{
          backgroundColor: fillColor ,
          width: "150%",
          height: "400%",
          position: "absolute",
          top: "-150%",
          left: "-25%",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      {/* The Text Layer */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
