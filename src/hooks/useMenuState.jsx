import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useMenuState() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // close on ESC
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  // lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return { isOpen, setIsOpen, toggle: () => setIsOpen((p) => !p) };
}
