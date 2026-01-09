const CoreCompetencies = () => {
  const aiSkills = [
    "LLM agents (LangGraph, Google ADK)",
    "Retrieval-Augmented Generation (RAG)",
    "Tool calling & agent orchestration",
    "Conversation memory & state handling",
    "LLM evaluation & hallucination analysis",
    "Vector databases (Chroma, FAISS)",
  ];

  const backendSkills = [
    "Python, TypeScript, Node.js",
    "Cloudflare Workers, Express, Hono",
    "PostgreSQL, MongoDB, Redis",
    "Observability (Prometheus, logging)",
  ];

  return (
    <section className="section-container border-b border-border">
      <h2 className="text-2xl font-semibold mb-2">Core Competencies</h2>
      <p className="text-sm text-muted-foreground mb-10">
        What I've built and operated in production.
      </p>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Applied AI - Now Primary */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-xs px-2 py-1 bg-primary text-primary-foreground rounded">
              PRIMARY
            </span>
            <h3 className="font-semibold text-lg">Applied AI & LLM Systems</h3>
          </div>
          <ul className="space-y-3">
            {aiSkills.map((skill) => (
              <li key={skill} className="competency-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Backend - Now Secondary */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-xs px-2 py-1 bg-accent text-accent-foreground rounded">
              SECONDARY
            </span>
            <h3 className="font-semibold text-lg">Backend & Infrastructure</h3>
          </div>
          <ul className="space-y-3">
            {backendSkills.map((skill) => (
              <li key={skill} className="competency-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;
