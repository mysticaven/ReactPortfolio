import { cn } from "@/lib/utils";
import { Menu, X, Code } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500",
        isScrolled 
          ? "py-3 glass-card mx-4 mt-4 rounded-2xl shadow-lg" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          className="text-xl font-bold flex items-center gap-2 group"
          href="#hero"
        >
          <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                        group-hover:scale-110 transition-transform duration-300">
            <Code className="w-6 h-6 text-primary" />
          </div>
          <span className="relative z-10">
            <span className="gradient-text font-bold">Gowshik</span>
            <span className="text-foreground/80 ml-1">Ram</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-4 py-2 rounded-full transition-all duration-300 font-medium",
                "hover:scale-105 active:scale-95",
                activeSection === item.href.replace('#', '')
                  ? "glass-card text-primary shadow-lg"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              )}
            >
              {item.name}
              {activeSection === item.href.replace('#', '') && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>
              )}
            </a>
          ))}
          
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-3 glass-card rounded-xl text-foreground z-50 
                   hover:scale-105 transition-transform duration-300"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={cn(
            "fixed inset-0 glass-card z-40 flex flex-col items-center justify-center",
            "transition-all duration-500 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto backdrop-blur-xl"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "px-8 py-4 glass-card rounded-2xl text-center min-w-[200px]",
                  "transition-all duration-300 font-semibold",
                  "hover:scale-105 active:scale-95",
                  activeSection === item.href.replace('#', '')
                    ? "gradient-text shadow-lg"
                    : "text-foreground/80 hover:text-primary"
                )}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Theme Toggle */}
          <div className="mt-8 mb-4">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-4 glass-card rounded-2xl text-foreground/80 
                     hover:text-primary transition-colors duration-300"
          >
            Close Menu
          </button>
        </div>
      </div>
    </nav>
  );
};
