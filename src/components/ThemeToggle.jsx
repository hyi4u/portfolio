import { useDispatch, useSelector } from "react-redux";
import { MoonIcon, SunIcon } from "lucide-react";
import { setTheme } from "../features/themeSlice";
export default function ThemeToggle() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center border border-border rounded-full p-1 gap-1 bg-card">
      <button
        onClick={() => dispatch(setTheme("light"))}
        className={`
          relative flex items-center justify-center w-8 h-8 rounded-full
          transition-all duration-300 ease-in-out
          ${
            theme === "light"
              ? "bg-cta text-cta-text shadow-md scale-110"
              : "text-copy-secondary hover:text-copy-primary hover:scale-105"
          }
        `}
      >
        <SunIcon
          size={16}
          className={`transition-transform duration-300 ${
            theme === "light" ? "rotate-0" : "-rotate-90"
          }`}
        />
      </button>

      <button
        onClick={() => dispatch(setTheme("dark"))}
        className={`
          relative flex items-center justify-center w-8 h-8 rounded-full
          transition-all duration-300 ease-in-out
          ${
            theme === "dark"
              ? "bg-cta text-cta-text shadow-md scale-110"
              : "text-copy-secondary hover:text-copy-primary hover:scale-105"
          }
        `}
      >
        <MoonIcon
          size={16}
          className={`transition-transform duration-300 ${
            theme === "dark" ? "rotate-0" : "rotate-90"
          }`}
        />
      </button>
    </div>
  );
}
