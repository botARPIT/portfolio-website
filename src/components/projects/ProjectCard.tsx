import { ExternalLink, Github } from "lucide-react";
import ArchitectureModal from "./ArchitectureModal";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  simpleDiagram?: React.ReactNode;
  detailedDiagram?: React.ReactNode;
  children?: React.ReactNode;
  decisions: { title: string; description: string }[];
  tradeoffs: string[];
  limitations?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  simpleDiagram,
  detailedDiagram,
  children,
  decisions,
  tradeoffs,
  limitations,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  return (
    <article className="project-card">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              {subtitle}
            </p>
          </div>
          <div className="flex gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-accent transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="w-4 h-4 text-muted-foreground" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-accent transition-colors"
                aria-label="View live"
              >
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </a>
            )}
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Architecture Diagram */}
      {simpleDiagram && (
        <div className="flex items-center gap-4">
          <div className="flex-1">{simpleDiagram}</div>
          {detailedDiagram && (
            <ArchitectureModal title={title}>
              {detailedDiagram}
            </ArchitectureModal>
          )}
        </div>
      )}
      {!simpleDiagram && children}

      {/* Key Decisions */}
      <div className="mt-6">
        <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">
          Key Decisions
        </h4>
        <div className="grid gap-3">
          {decisions.map((decision, i) => (
            <div key={i} className="bg-highlight rounded-md p-3">
              <p className="font-medium text-sm mb-1">{decision.title}</p>
              <p className="text-xs text-muted-foreground">
                {decision.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Trade-offs */}
      <div className="mt-6">
        <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">
          Explicit Trade-offs
        </h4>
        <ul className="space-y-2">
          {tradeoffs.map((tradeoff, i) => (
            <li
              key={i}
              className="text-sm text-muted-foreground flex items-start gap-2"
            >
              <span className="text-primary font-mono text-xs mt-0.5">⚠</span>
              {tradeoff}
            </li>
          ))}
        </ul>
      </div>

      {/* Limitations */}
      {limitations && limitations.length > 0 && (
        <div className="mt-6">
          <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-3">
            Known Limitations
          </h4>
          <ul className="space-y-2">
            {limitations.map((limitation, i) => (
              <li
                key={i}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="font-mono text-xs mt-0.5">→</span>
                {limitation}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
