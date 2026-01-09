const EngineeringPhilosophy = () => {
  const principles = [
    {
      statement: "Constraints shape architecture, not the other way around.",
      context:
        "Understanding what you can't do is as valuable as knowing what you can.",
    },
    {
      statement: "If I can't explain the failure modes, I don't trust the system.",
      context:
        "Every production system fails. The question is whether you've planned for it.",
    },
    {
      statement: "Edge, AI, and infra are tools — not identities.",
      context:
        "Technology choices should be boring. The problem space is where complexity belongs.",
    },
    {
      statement: "Explicit trade-offs over implicit assumptions.",
      context:
        "Future debugging depends on present documentation.",
    },
    {
      statement: "Optimize for failure handling, not demos.",
      context: "",
    },
  ];

  return (
    <section className="section-container border-b border-border">
      <h2 className="text-2xl font-semibold mb-2">Engineering Philosophy</h2>
      <p className="text-sm text-muted-foreground mb-10">
        Principles that guide technical decisions.
      </p>

      <div className="grid gap-6">
        {principles.map((principle, i) => (
          <div key={i} className="border-l-2 border-primary/30 pl-6">
            <p className="font-medium text-foreground mb-1">
              "{principle.statement}"
            </p>
            <p className="text-sm text-muted-foreground">{principle.context}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EngineeringPhilosophy;
