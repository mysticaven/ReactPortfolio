import { ArrowDown, Sparkles, Code, Database, Palette } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating 3D Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-3d-float blur-sm"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-lg animate-3d-bounce blur-sm"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full animate-3d-tilt blur-sm"></div>
        <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-3d-rotate blur-sm"></div>
        
        {/* Glass Morphism Elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 glass-card animate-glass"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 glass-card animate-glass" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container max-w-6xl mx-auto text-center z-10">
        <div className="space-y-8">
          {/* Main Title with 3D Effects */}
          <div className="relative">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-tight">
              <span className="opacity-0 animate-fade-in block"> Hi, I'm</span>
              <span className="gradient-text opacity-0 animate-fade-in-delay-1 block animate-3d-float">
                GOWSHIK
              </span>
              <span className="text-primary opacity-0 animate-fade-in-delay-2 block animate-3d-bounce">
                RAM
              </span>
            </h1>
            
            {/* 3D Title Shadow */}
            <div className="absolute inset-0 gradient-text opacity-20 blur-sm animate-3d-tilt">
              <span className="block"> Hi, I'm</span>
              <span className="block"> GOWSHIK</span>
              <span className="block"> RAM</span>
            </div>
          </div>

          {/* Subtitle with Animation */}
          <div className="relative">
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
              <span className="gradient-text font-semibold">Full Stack Developer</span> specializing in 
              <span className="text-primary font-semibold"> React & Java Spring Boot</span>, creating 
              <span className="gradient-text font-semibold"> enterprise-level applications</span> with modern technologies.
            </p>
            
            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 w-8 h-8 text-blue-500 animate-3d-float">
              <Code className="w-full h-full" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 text-purple-500 animate-3d-bounce" style={{animationDelay: '0.5s'}}>
              <Database className="w-full h-full" />
            </div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 text-pink-500 animate-3d-rotate">
              <Palette className="w-full h-full" />
            </div>
          </div>

          {/* Interactive Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="apple-button group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                View My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a href="#contact" className="px-8 py-4 rounded-full border-2 border-primary/50 text-primary font-semibold 
                                       transition-all duration-300 hover:bg-primary/10 hover:border-primary 
                                       hover:shadow-lg hover:scale-105 active:scale-95 floating-3d">
              Let's Connect
            </a>
          </div>

          {/* Tech Stack Floating Elements */}
          <div className="pt-12 opacity-0 animate-fade-in-delay-4">
            <p className="text-sm text-muted-foreground mb-6">Tech Stack I Love Working With</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Java', 'Spring Boot', 'TypeScript', 'MySQL', 'MongoDB'].map((tech, index) => (
                <div 
                  key={tech}
                  className="glass-card px-4 py-2 text-sm font-medium floating-3d"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}

    </section>
  );
};
