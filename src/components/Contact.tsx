import { FileText, Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const links = [
    {
      label: "Applied AI Resume",
      href: "/Arpit-Chauhan-Applied-AI-Resume.pdf",
      icon: FileText,
      description: "LLM Systems & Agents",
    },
    {
      label: "Backend Resume",
      href: "/Arpit-Chauhan-Backend-Resume.pdf",
      icon: FileText,
      description: "Infrastructure & APIs",
    },
    {
      label: "GitHub",
      href: "https://github.com/botARPIT",
      icon: Github,
      description: "@botARPIT",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/arpit-chauhan-3b0885250",
      icon: Linkedin,
      description: "/in/arpit-chauhan",
    },
    {
      label: "Email",
      href: "mailto:arpitchauhanofficial@gmail.com",
      icon: Mail,
      description: "arpitchauhanofficial@gmail.com",
    },
  ];

  return (
    <section className="section-container">
      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <p className="text-sm text-muted-foreground mb-10">
        Get in touch.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-highlight transition-colors group min-w-0"
            >
              <div className="p-2 rounded-md bg-accent group-hover:bg-primary/10 transition-colors flex-shrink-0">
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm">{link.label}</p>
                <p className="text-xs text-muted-foreground font-mono truncate">
                  {link.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Education */}
      <div className="mt-12 pt-8 border-t border-border">
        <h3 className="font-semibold text-lg mb-4">Education</h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <p className="font-medium">B.E. Computer Engineering</p>
            <p className="text-sm text-muted-foreground">Mumbai University</p>
          </div>
          <p className="font-mono text-sm text-muted-foreground">2020 – 2024</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground font-mono">
          Built with <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Lovable</a>. Architecture and content by me.
        </p>
      </div>

    </section>
  );
};

export default Contact;
