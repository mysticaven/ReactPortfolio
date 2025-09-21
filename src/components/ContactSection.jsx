import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/gowshik-ram-r/", label: "LinkedIn", color: "text-blue-600", id: "linkedin" },
    { icon: Twitter, href: "https://www.linkedin.com/in/gowshik-ram-r/", label: "Twitter", color: "text-blue-400", id: "twitter" },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-3d-float blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full animate-3d-bounce blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full animate-3d-tilt blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text"> Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Ready to bring your ideas to life? As a fresher full-stack developer, 
            I'm excited to collaborate on new projects and learn from every opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 card-3d">
              <h3 className="text-3xl font-bold mb-8 gradient-text">
                Let's Connect!
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-6 group">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-8 w-8 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Email</h4>
                    <a
                      href="mailto:gowshikram2004@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-lg"
                    >
                      gowshikram2004@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-8 w-8 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Phone</h4>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-primary transition-colors text-lg"
                    >
                      +91 (9088997074)
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Location</h4>
                    <span className="text-muted-foreground text-lg">
                      India • Open to Remote
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 card-3d">
              <h4 className="font-bold text-xl mb-6 gradient-text">Follow My Journey</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    className="group flex items-center gap-3 p-4 rounded-xl border border-primary/20 
                             hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 
                             floating-3d"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                                   group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon className={`w-5 h-5 ${social.color}`} />
                    </div>
                    <span className="font-medium text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 card-3d">
            <h3 className="text-3xl font-bold mb-8 gradient-text">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-6 py-4 rounded-xl border-2 border-primary/20 bg-background/50 
                           backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 
                           focus:border-primary transition-all duration-300 text-lg"
                  placeholder="Your name..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-6 py-4 rounded-xl border-2 border-primary/20 bg-background/50 
                           backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 
                           focus:border-primary transition-all duration-300 text-lg"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-3 text-foreground">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-6 py-4 rounded-xl border-2 border-primary/20 bg-background/50 
                           backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 
                           focus:border-primary transition-all duration-300 resize-none text-lg"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "apple-button w-full group relative overflow-hidden flex items-center justify-center gap-3 text-lg py-4"
                )}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Ready to work together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to take on new challenges and learn from every project. 
              Whether you have a full project or just want to chat about development, I'd love to hear from you!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="glass-card px-4 py-2 text-sm">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-500" />
                  Quick Response
                </span>
              </div>
              <div className="glass-card px-4 py-2 text-sm">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-green-500" />
                  Available for Calls
                </span>
              </div>
              <div className="glass-card px-4 py-2 text-sm">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-pink-500" />
                  Remote Friendly
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
