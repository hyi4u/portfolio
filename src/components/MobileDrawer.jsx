import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import FillButton from "./FillButton";

export default function MobileDrawer({ isOpen, onClose, location, navItems }) {
  return createPortal(
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 glass flex flex-col gap-8 p-8
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between text-white">
          <h3>Haider.dev</h3>
          <button onClick={onClose} className=" ">
            <X size={22} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 text-left">
          {navItems.map((item) => (
            <li
              key={item.title}
              className={`pb-1 text-lg text-white ${
                item.title === location
                  ? "border-b border-b-primary  font-semibold"
                  : ""
              }`}
            >
              <Link to={`/${item.title}`}>{item.text}</Link>
            </li>
          ))}
          <FillButton fillClass="#9baa8a" className="text-bold">
            Get In Touch
          </FillButton>
        </ul>
      </div>
    </>,
    document.body,
  );
}
