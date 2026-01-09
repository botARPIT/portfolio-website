const Hero = () => {
  const techStack = [
    "Python",
    "LangGraph",
    "Google ADK",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Cloudflare Workers",
  ];

  return (
    <section className="section-container border-b border-border">
      <div className="fade-in">
        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
          Arpit Chauhan
        </h1>

        {/* Title */}
        <p className="font-mono text-sm md:text-base text-muted-foreground mb-6">
          Applied AI Engineer · LLM Systems · Backend Infrastructure
        </p>

        {/* Value statement - design intent, not CV summary */}
        <p className="text-lg md:text-xl text-foreground max-w-3xl mb-8 leading-relaxed">
          I build LLM systems that fail predictably — multi-agent workflows, RAG pipelines, and stateful agents designed around latency, token limits, and operational constraints.
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
