import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Database, Wrench, Star } from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", color: "from-orange-500 to-red-500" },
  { name: "JavaScript", level: 90, category: "frontend", color: "from-yellow-500 to-orange-500" },
  { name: "React", level: 88, category: "frontend", color: "from-cyan-500 to-blue-500" },
  { name: "TypeScript", level: 85, category: "frontend", color: "from-blue-500 to-indigo-500" },
  { name: "Tailwind CSS", level: 92, category: "frontend", color: "from-teal-500 to-cyan-500" },
  { name: "Next.js", level: 80, category: "frontend", color: "from-gray-500 to-black" },

  // Backend
  { name: "Java", level: 85, category: "backend", color: "from-orange-600 to-red-600" },
  { name: "Spring Boot", level: 82, category: "backend", color: "from-green-600 to-emerald-600" },
  { name: "Spring Security", level: 78, category: "backend", color: "from-blue-600 to-indigo-600" },
  { name: "Node.js", level: 80, category: "backend", color: "from-green-500 to-emerald-500" },
  { name: "Express", level: 75, category: "backend", color: "from-gray-600 to-gray-800" },
  { name: "MongoDB", level: 75, category: "backend", color: "from-green-600 to-green-800" },
  { name: "PostgreSQL", level: 78, category: "backend", color: "from-blue-600 to-blue-800" },
  { name: "MySQL", level: 80, category: "backend", color: "from-orange-500 to-yellow-600" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", color: "from-orange-600 to-red-600" },
  { name: "Docker", level: 75, category: "tools", color: "from-blue-500 to-blue-700" },
  { name: "Redis", level: 70, category: "tools", color: "from-red-500 to-red-700" },
  { name: "Kubernetes", level: 65, category: "tools", color: "from-blue-600 to-blue-800" },
  { name: "Figma", level: 85, category: "tools", color: "from-purple-500 to-pink-500" },
  { name: "VS Code", level: 95, category: "tools", color: "from-blue-600 to-indigo-600" },
];

const categories = [
  { name: "all", icon: Star, label: "All Skills" },
  { name: "frontend", icon: Code, label: "Frontend" },
  { name: "backend", icon: Database, label: "Backend" },
  { name: "tools", icon: Wrench, label: "Tools" }
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-3d-float blur-2xl"></div>
        <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full animate-3d-bounce blur-2xl"></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full animate-3d-tilt blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text"> Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            As a fresher, I'm continuously learning and expanding my technical skills. 
            Here's what I've mastered so far:
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 font-medium floating-3d",
                activeCategory === category.name
                  ? "glass-card text-primary shadow-lg"
                  : "glass-card text-muted-foreground hover:text-primary hover:shadow-lg"
              )}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card p-8 card-3d group relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-xl gradient-text">{skill.name}</h3>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${skill.color} opacity-20 flex items-center justify-center`}>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                  </div>
                </div>

                {/* Enhanced Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Proficiency</span>
                    <span className="text-sm font-semibold gradient-text">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-secondary/30 h-3 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                      style={{ width: skill.level + "%" }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Skill Level Indicator */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Learning Journey Section */}
        <div className="mt-20 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">My Learning Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As a fresher, I believe in continuous learning and staying updated with the latest technologies. 
              Every project is an opportunity to grow and improve my skills.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="glass-card px-4 py-2 text-sm">
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  Always Learning
                </span>
              </div>
              <div className="glass-card px-4 py-2 text-sm">
                <span className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-500" />
                  Hands-on Practice
                </span>
              </div>
              <div className="glass-card px-4 py-2 text-sm">
                <span className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-green-500" />
                  Full Stack Focus
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
