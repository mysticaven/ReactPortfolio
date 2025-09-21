import { ArrowRight, ExternalLink, Github, Sparkles, Star, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Real Estate React Web Application",
    description: "A comprehensive real estate platform with property listings, advanced search filters, virtual tours, and user authentication. Features include property comparison, favorites, and agent contact system.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    gradient: "from-blue-500 to-purple-600",
    level: "Intermediate",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "React Digital Business Admin Panel",
    description: "An advanced enterprise-level admin dashboard with real-time analytics, user management, role-based access control, data visualization, and comprehensive reporting system.",
    image: "/projects/project2.png",
    tags: ["React", "TypeScript", "Redux", "Chart.js", "Material-UI"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    gradient: "from-green-500 to-blue-600",
    level: "Advanced",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Java Spring Boot E-Commerce API",
    description: "Robust RESTful API for e-commerce platform with microservices architecture, payment integration, inventory management, and order processing system.",
    image: "/projects/project3.png",
    tags: ["Java", "Spring Boot", "MySQL", "Redis", "Docker"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    gradient: "from-orange-500 to-red-600",
    level: "Advanced",
    category: "Backend"
  },
  {
    id: 4,
    title: "Java Spring Security Authentication System",
    description: "Comprehensive authentication and authorization system with JWT tokens, OAuth2 integration, role-based access control, and password encryption.",
    image: "/projects/project1.png",
    tags: ["Java", "Spring Security", "JWT", "OAuth2", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "from-cyan-500 to-blue-600",
    level: "Intermediate",
    category: "Backend"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A stunning 3D animated portfolio website showcasing my skills as a fresher full-stack developer with Apple-like design aesthetics.",
    image: "/projects/project2.png",
    tags: ["React", "TailwindCSS", "3D Animations"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "from-purple-500 to-pink-600",
    level: "Intermediate",
    category: "Frontend"
  },
  {
    id: 6,
    title: "Java Microservices Banking System",
    description: "Distributed banking application with account management, transaction processing, fraud detection, and real-time notifications using microservices.",
    image: "/projects/project3.png",
    tags: ["Java", "Spring Cloud", "Kafka", "Docker", "Kubernetes"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "from-indigo-500 to-purple-600",
    level: "Advanced",
    category: "Full Stack"
  },
  {
    id: 7,
    title: "E-Learning Platform",
    description: "Interactive learning management system with real-time progress tracking, video streaming, quizzes, and certificate generation.",
    image: "/projects/project1.png",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "from-teal-500 to-green-600",
    level: "Intermediate",
    category: "Full Stack"
  },
  {
    id: 8,
    title: "Task Management App",
    description: "Modern task management application with drag-and-drop functionality, team collaboration features, and project tracking.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "Express", "PostgreSQL", "WebSocket"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "from-pink-500 to-orange-600",
    level: "Intermediate",
    category: "Full Stack"
  }
];

export const ProjectsSection = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-28 h-28 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-3d-float blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-36 h-36 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full animate-3d-bounce blur-2xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full animate-3d-tilt blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="gradient-text"> Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            As a fresher, I've built several projects to showcase my learning journey. 
            Each project represents my growth and passion for creating amazing digital experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              <h3 className="text-2xl font-bold gradient-text">Featured Work</h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="glass-card p-8 card-3d group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 glass-card px-3 py-1 text-xs font-semibold">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </span>
                </div>

                {/* Level Badge */}
                <div className="absolute top-4 left-4 glass-card px-3 py-1 text-xs font-semibold">
                  <span className={cn(
                    "flex items-center gap-1",
                    project.level === "Advanced" ? "text-red-400" : "text-yellow-400"
                  )}>
                    {project.level}
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="h-48 rounded-2xl overflow-hidden mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="glass-card px-3 py-1 text-xs font-semibold">
                        <span className="text-blue-400">{project.category}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag}
                            className="glass-card px-2 py-1 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold gradient-text">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="apple-button group/btn relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="p-3 rounded-full border-2 border-primary/50 text-primary 
                                 transition-all duration-300 hover:bg-primary/10 hover:border-primary 
                                 hover:shadow-lg hover:scale-105 active:scale-95 floating-3d"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-2">
              <Rocket className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl font-bold gradient-text">More Projects</h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={project.id}
                className="glass-card p-6 card-3d group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="h-40 rounded-xl overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag}
                          className="glass-card px-2 py-1 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-lg font-bold gradient-text">{project.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description.substring(0, 80)}...
                    </p>

                    <div className="flex items-center gap-3 pt-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-primary hover:text-primary/80 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile to explore all my projects and contributions.
            </p>
            <a
              className="apple-button group relative overflow-hidden inline-flex items-center gap-2"
              target="_blank"
              href="https://github.com/mysticaven"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Github className="w-5 h-5" />
                Visit My GitHub
                <ArrowRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
