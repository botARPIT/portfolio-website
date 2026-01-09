interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
}

interface Connection {
  from: string;
  to: string;
  label?: string;
}

interface ArchitectureDiagramProps {
  nodes: Node[];
  connections: Connection[];
  width?: number;
  height?: number;
}

const ArchitectureDiagram = ({
  nodes,
  connections,
  width = 600,
  height = 200,
}: ArchitectureDiagramProps) => {
  const nodeWidth = 100;
  const nodeHeight = 36;

  const getNodeCenter = (nodeId: string) => {
    const node = nodes.find((n) => n.id === nodeId);
    if (!node) return { x: 0, y: 0 };
    return {
      x: node.x + nodeWidth / 2,
      y: node.y + nodeHeight / 2,
    };
  };

  return (
    <div className="diagram-container overflow-x-auto">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMinYMin meet"
        className="block"
        style={{ minWidth: width }}
      >
        {/* Connections */}
        {connections.map((conn, i) => {
          const from = getNodeCenter(conn.from);
          const to = getNodeCenter(conn.to);
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2;

          return (
            <g key={i}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="hsl(var(--diagram-stroke))"
                strokeWidth="1.5"
                markerEnd="url(#arrowhead)"
              />
              {conn.label && (
                <text
                  x={midX}
                  y={midY - 10}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-muted-foreground text-[11px] font-mono"
                >
                  {conn.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            <rect
              x={node.x}
              y={node.y}
              width={nodeWidth}
              height={nodeHeight}
              rx="4"
              fill="hsl(var(--diagram-fill))"
              stroke="hsl(var(--diagram-stroke))"
              strokeWidth="1.5"
            />
            <text
              x={node.x + nodeWidth / 2}
              y={node.y + nodeHeight / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground text-[12px] font-mono font-medium"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Arrow marker */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="hsl(var(--diagram-stroke))"
            />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default ArchitectureDiagram;
