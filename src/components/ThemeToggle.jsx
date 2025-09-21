import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      if (isDarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
      }
      setIsAnimating(false);
    }, 150);
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "group relative p-3 glass-card rounded-xl transition-all duration-300",
        "hover:scale-105 active:scale-95",
        "hover:shadow-lg hover:shadow-primary/20",
        isAnimating && "animate-pulse"
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={cn(
            "absolute inset-0 w-6 h-6 transition-all duration-300",
            isDarkMode 
              ? "opacity-0 rotate-90 scale-0" 
              : "opacity-100 rotate-0 scale-100",
            "text-yellow-500 group-hover:text-yellow-400"
          )}
        />
        <Moon 
          className={cn(
            "absolute inset-0 w-6 h-6 transition-all duration-300",
            isDarkMode 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 -rotate-90 scale-0",
            "text-blue-400 group-hover:text-blue-300"
          )}
        />
      </div>
      
      {/* Animated background */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};
