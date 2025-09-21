import { Briefcase, Code, User, Rocket, Heart, Lightbulb, Database } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-3d-float blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full animate-3d-bounce blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text"> Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="glass-card p-8 card-3d">
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Fresh Full Stack Developer
              </h3>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hi! I'm <span className="text-primary font-semibold">Gowshik Ram</span>, a passionate 
                  full-stack developer specializing in <span className="gradient-text font-semibold">React</span> and 
                  <span className="text-primary font-semibold"> Java Spring Boot</span>. 
                  I love creating enterprise-level applications and beautiful user interfaces.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  With expertise in both <span className="gradient-text font-semibold">frontend React development</span> 
                  and <span className="text-primary font-semibold">backend Java microservices</span>, 
                  I build scalable, secure, and performant applications. I'm always exploring new technologies 
                  and best practices to deliver exceptional user experiences.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="glass-card px-4 py-2 text-sm">
                    <span className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-blue-500" />
                      Full Stack Expert
                    </span>
                  </div>
                  <div className="glass-card px-4 py-2 text-sm">
                    <span className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-green-500" />
                      Java & React
                    </span>
                  </div>
                  <div className="glass-card px-4 py-2 text-sm">
                    <span className="flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-yellow-500" />
                      Problem Solver
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="apple-button group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Let's Connect
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <button
                className="px-8 py-4 rounded-full border-2 border-primary/50 text-primary font-semibold 
                         transition-all duration-300 hover:bg-primary/10 hover:border-primary 
                         hover:shadow-lg hover:scale-105 active:scale-95 floating-3d"
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Content - Enhanced Cards */}
          <div className="space-y-6">
            <div className="glass-card p-8 card-3d group">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-xl mb-3 gradient-text">Frontend Development</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Crafting beautiful, responsive user interfaces with React, TypeScript, 
                    and modern CSS frameworks. I love creating pixel-perfect designs that users love.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 card-3d group">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-xl mb-3 gradient-text">Backend Development</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Building robust APIs and microservices with Java Spring Boot, Spring Security, 
                    and databases like MySQL and PostgreSQL. Creating scalable, secure backend solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 card-3d group">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                  <User className="h-8 w-8 text-pink-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-xl mb-3 gradient-text">UI/UX Design</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Designing intuitive user experiences and beautiful interfaces. 
                    Passionate about creating designs that are both functional and delightful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "100+", label: "Projects Built", icon: Rocket },
            { number: "24/7", label: "Learning Mode", icon: Lightbulb },
            { number: "∞", label: "Cups of Coffee", icon: Heart },
            { number: "1", label: "Dream Job", icon: Code }
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center card-3d">
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-2xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
