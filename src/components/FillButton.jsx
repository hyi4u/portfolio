import { motion } from "motion/react";

export default function FillButton({
  children,
  fillColor = "#9baa8a",
  className = "",
  onClick,
  href, // ← add this
  download, // ← add this
  target,
  rel,
}) {
  const Tag = href ? motion.a : motion.button; // ← swap element type

  return (
    <Tag
      href={href}
      download={download}
      target={target}
      rel={rel}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className={`relative overflow-hidden px-8 py-3 rounded-2xl font-bold cursor-pointer border-none bg-white text-black select-none outline-none ${className}`}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Animated Fill Layer */}
      <motion.span
        variants={{
          initial: { scale: 0, opacity: 1 },
          hover: { scale: 1, opacity: 1 },
          top: { scale: 1, opacity: 1 },
        }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        style={{
          backgroundColor: fillColor,
          width: "150%",
          height: "400%",
          position: "absolute",
          top: "-150%",
          left: "-25%",
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none", // ← prevent this span from capturing touch
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      />

      {/* Text Layer */}
      <span
        className="relative z-10"
        style={{
          pointerEvents: "none", // ← prevent text from being "tappable"
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      >
        {children}
      </span>
    </Tag>
  );
}
