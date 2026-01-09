import ProjectCard from "./projects/ProjectCard";
import multiAgentArchitecture from "@/assets/multi-agent-architecture.png";
import langgraphArchitecture from "@/assets/langgraph-architecture.png";
import ragArchitecture from "@/assets/rag-architecture.png";
import agenticSimple from "@/assets/agentic-simple.png";
import multiagentSimple from "@/assets/multiagent-simple.png";
import ragSimple from "@/assets/rag-simple-new.png";
import elibrarySimple from "@/assets/elibrary-simple.png";
import elibraryArchitecture from "@/assets/elibrary-architecture.png";
import blogifySimple from "@/assets/blogify-simple.png";
import blogifyArchitecture from "@/assets/blogify-architecture.png";

const FeaturedProjects = () => {
  // Multi-Agent ADK architecture (Sequential Agent Pipeline)
  const adkNodes = [
    { id: "input", label: "User Input", x: 20, y: 120 },
    { id: "outline", label: "Outline Agent", x: 140, y: 120 },
    { id: "writer", label: "Writer Agent", x: 270, y: 120 },
    { id: "factcheck", label: "Fact Checker", x: 400, y: 120 },
    { id: "editor", label: "Editor Agent", x: 530, y: 120 },
    { id: "output", label: "Output", x: 660, y: 120 },
    { id: "search", label: "Google Search", x: 330, y: 30 },
  ];

  const adkConnections = [
    { from: "input", to: "outline" },
    { from: "outline", to: "writer", label: "blog_outline" },
    { from: "writer", to: "factcheck", label: "blog_draft" },
    { from: "factcheck", to: "editor", label: "fact_check" },
    { from: "editor", to: "output", label: "final_blog" },
    { from: "outline", to: "search", label: "google_search" },
    { from: "factcheck", to: "search", label: "google_search" },
  ];

  // RAG architecture
  const ragNodes = [
    { id: "docs", label: "Documents", x: 20, y: 80 },
    { id: "embed", label: "Embeddings", x: 160, y: 80 },
    { id: "vector", label: "Vector DB", x: 300, y: 30 },
    { id: "query", label: "Query", x: 300, y: 130 },
    { id: "llm", label: "LLM", x: 440, y: 80 },
  ];

  const ragConnections = [
    { from: "docs", to: "embed" },
    { from: "embed", to: "vector", label: "store" },
    { from: "query", to: "vector", label: "retrieve" },
    { from: "vector", to: "llm" },
    { from: "query", to: "llm" },
  ];

  // LangGraph architecture
  const langgraphNodes = [
    { id: "state", label: "State", x: 20, y: 80 },
    { id: "graph", label: "LangGraph", x: 160, y: 80 },
    { id: "eval", label: "Evaluate", x: 320, y: 30 },
    { id: "route", label: "Route", x: 320, y: 80 },
    { id: "refine", label: "Refine", x: 320, y: 130 },
    { id: "checkpoint", label: "Checkpoint", x: 480, y: 80 },
  ];

  const langgraphConnections = [
    { from: "state", to: "graph" },
    { from: "graph", to: "eval", label: "parallel" },
    { from: "graph", to: "route" },
    { from: "graph", to: "refine", label: "loop" },
    { from: "eval", to: "checkpoint" },
    { from: "route", to: "checkpoint" },
    { from: "refine", to: "checkpoint" },
  ];

  // Blogify architecture
  const blogifyNodes = [
    { id: "client", label: "Client", x: 20, y: 80 },
    { id: "edge", label: "CF Worker", x: 160, y: 80 },
    { id: "cache", label: "KV Cache", x: 320, y: 30 },
    { id: "prisma", label: "Accelerate", x: 320, y: 130 },
    { id: "db", label: "PostgreSQL", x: 480, y: 80 },
  ];

  const blogifyConnections = [
    { from: "client", to: "edge" },
    { from: "edge", to: "cache", label: "read" },
    { from: "edge", to: "prisma", label: "query" },
    { from: "prisma", to: "db" },
    { from: "cache", to: "db" },
  ];

  // E-Library architecture
  const elibraryNodes = [
    { id: "api", label: "Express", x: 20, y: 80 },
    { id: "auth", label: "Auth", x: 160, y: 30 },
    { id: "books", label: "Books", x: 160, y: 130 },
    { id: "redis", label: "Redis", x: 320, y: 30 },
    { id: "mongo", label: "MongoDB", x: 320, y: 80 },
    { id: "cloud", label: "Cloudinary", x: 320, y: 130 },
  ];

  const elibraryConnections = [
    { from: "api", to: "auth" },
    { from: "api", to: "books" },
    { from: "auth", to: "redis", label: "cache" },
    { from: "books", to: "mongo" },
    { from: "books", to: "cloud", label: "files" },
  ];

  return (
    <section className="section-container border-b border-border">
      <h2 className="text-2xl font-semibold mb-2">Featured Projects</h2>
      <p className="text-sm text-muted-foreground mb-10">
        System case studies with explicit trade-offs and architectural decisions.
      </p>

      {/* Applied AI Section - Primary */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-xs px-2 py-1 bg-primary text-primary-foreground rounded">
            APPLIED AI
          </span>
          <span className="text-sm text-muted-foreground">Core focus area</span>
        </div>

        <div className="space-y-8">
          {/* Multi-Agent ADK */}
          <ProjectCard
            title="Multi-Agent LLM System"
            subtitle="Google ADK · Python · Gemini 2.5 Flash Lite"
            description="Multi-agent workflows for blog writing, fact-checking, and editorial review."
            decisions={[
              {
                title: "Token limits forced event compaction",
                description:
                  "Long-running conversations exceeded context windows. Implemented session persistence with aggressive event compaction to preserve intent without exceeding model constraints.",
              },
              {
                title: "Sequential & conditional agent handoffs",
                description:
                  "Agents hand off tasks based on output quality gates. Research → Write → Fact-check with conditional routing on quality scores.",
              },
              {
                title: "Tool failure required retry with correction",
                description:
                  "Google Search and custom functions failed silently on malformed inputs. Built retry logic with corrective prompts on tool misuse.",
              },
            ]}
            tradeoffs={[
              "Flash Lite trades accuracy for latency/cost — acceptable for draft generation",
              "Streaming adds complexity — necessary for multi-stage pipeline UX",
              "Tool schemas require maintenance — schema drift causes silent failures",
            ]}
            limitations={[
              "Documented hallucination patterns and mitigation strategies",
              "Identified tool misuse modes and built corrective prompt templates",
            ]}
            githubUrl="https://github.com/botARPIT/agent-development-kit-practice"
            simpleDiagram={
              <img 
                src={multiagentSimple} 
                alt="Multi-Agent System Overview" 
                className="w-full rounded-md"
                loading="lazy"
                decoding="async"
              />
            }
            detailedDiagram={
              <img 
                src={multiAgentArchitecture} 
                alt="Multi-Agent Blog Writer Architecture" 
                className="w-full rounded-md"
                loading="lazy"
                decoding="async"
              />
            }
          />

          {/* RAG Systems */}
          <ProjectCard
            title="LLM Architecture & RAG Systems"
            subtitle="LangChain · FAISS · Chroma · Mistral · Qwen (Ollama)"
            description="RAG pipelines for YouTube transcript Q&A and document-based assistants."
            decisions={[
              {
                title: "Vector store choice depends on deployment context",
                description:
                  "FAISS: faster in-memory search, no persistence. Chroma: persistent, easier debugging. Evaluated trade-offs for latency vs durability requirements.",
              },
              {
                title: "Chunking strategy affects recall and latency",
                description:
                  "512-token overlap preserved context across chunk boundaries. No perfect solution — documented failure modes for different chunk sizes.",
              },
              {
                title: "Parallel retrieval reduced end-to-end latency",
                description:
                  "Independent retrieval steps parallelized. Conditional routing based on query type (factual vs open-ended).",
              },
            ]}
            tradeoffs={[
              "In-memory FAISS loses data on restart — documented migration path",
              "Local models (Qwen) trade quality for privacy/cost — acceptable for document Q&A",
              "Chunking has no perfect answer — optimized for recall over precision",
            ]}
            limitations={[
              "Measured hallucination rate on factual queries (~2-5%)",
              "Context overflow causes silent degradation — requires monitoring",
            ]}
            githubUrl="https://github.com/botARPIT/genAiPractice"
            simpleDiagram={
              <img 
                src={ragSimple} 
                alt="RAG System Overview" 
                className="w-full rounded-md"
                loading="lazy"
                decoding="async"
              />
            }
            detailedDiagram={
              <img 
                src={ragArchitecture} 
                alt="LLM Architecture & RAG Systems Pipeline" 
                className="w-full rounded-md"
                loading="lazy"
                decoding="async"
              />
            }
          />

          {/* LangGraph */}
          <ProjectCard
            title="AgenticAI Workflows"
            subtitle="LangGraph · Python · Ollama (Qwen 1.7B)"
            description="Graph-based LLM workflows with parallel evaluation, conditional routing, and iterative refinement."
            decisions={[
              {
                title: "Fault tolerance required checkpointing",
                description:
                  "Typed state schemas enable debugging and replay. Checkpoints allow resumption from any graph node on failure.",
              },
              {
                title: "Non-determinism controlled via iteration limits",
                description:
                  "Refinement loops without bounds cause runaway costs. Hard limits + Pydantic validation on all outputs.",
              },
              {
                title: "Graph structure over prompt chaining",
                description:
                  "Explicit nodes and edges make flow visible. Easier to add conditional logic, parallel paths, and human-in-the-loop.",
              },
            ]}
            tradeoffs={[
              "Sync execution limits throughput — async adds debugging complexity",
              "Small models (Qwen 1.7B) trade capability for cost/latency",
              "Checkpointing adds storage overhead — necessary for fault tolerance",
            ]}
            limitations={[
              "No retries, no observability, sync-only — identified production gaps",
              "Proposed hardened architecture with exponential backoff and metrics",
            ]}
            githubUrl="https://github.com/botARPIT/agenticAIPractice"
            simpleDiagram={
              <img 
                src={agenticSimple} 
                alt="Agentic AI Workflows Overview" 
                className="w-full rounded-md"
                loading="lazy"
                decoding="async"
              />
            }
            detailedDiagram={
              <img 
                src={langgraphArchitecture} 
                alt="LangGraph Agentic AI Workflows Architecture" 
                className="w-full rounded-md"
                loading="lazy"
                decoding="async"
              />
            }
          />
        </div>
      </div>

      {/* Systems Projects Section - Secondary */}
      <div>
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-xs px-2 py-1 bg-accent text-accent-foreground rounded">
            SYSTEMS
          </span>
          <span className="text-sm text-muted-foreground">Supporting infrastructure experience</span>
        </div>

        <div className="space-y-8">
          {/* Blogify */}
          <ProjectCard
            title="Blogify"
            subtitle="Edge-Native Platform · Cloudflare Workers · Hono · Prisma"
            description="Globally distributed blogging backend built under strict edge runtime constraints."
            decisions={[
              {
                title: "Edge CPU limits forced bcrypt replacement",
                description:
                  "Worker CPU time limits made bcrypt impractical. Replaced with native Web Crypto APIs, reducing auth latency ~2-3x.",
              },
              {
                title: "No direct DB connections at edge",
                description:
                  "Cloudflare Workers cannot open persistent connections. Used Prisma Accelerate for HTTP-based PostgreSQL access.",
              },
              {
                title: "Global distribution via edge deployment",
                description:
                  "Sub-minute deployments worldwide. KV cache for read-heavy operations, reducing origin hits.",
              },
            ]}
            tradeoffs={[
              "Edge constraints limit compute — acceptable for I/O-bound workloads",
              "Prisma Accelerate adds latency vs direct connections — necessary for edge compatibility",
              "KV eventual consistency — acceptable for blog content",
            ]}
            githubUrl="https://github.com/botARPIT/hono_blogApp"
            liveUrl="https://blogify.arpitdev.site"
            simpleDiagram={
              <img 
                src={blogifySimple} 
                alt="Blogify System Overview" 
                className="w-full rounded-md"
                loading="lazy"
                decoding="async"
              />
            }
            detailedDiagram={
              <img 
                src={blogifyArchitecture} 
                alt="Blogify Architecture" 
                className="w-full rounded-md"
                loading="lazy"
                decoding="async"
              />
            }
          />

          {/* E-Library */}
          <ProjectCard
            title="E-Library"
            subtitle="REST API · Node.js · Express · MongoDB · Redis · Prometheus"
            description="Authenticated content platform with observability and large file handling."
            decisions={[
              {
                title: "Observability added early",
                description:
                  "Prometheus metrics and structured logging with correlation IDs. Enables debugging in production without adding instrumentation later.",
              },
              {
                title: "Large file uploads required chunked streaming",
                description:
                  "PDFs up to 70MB couldn't be buffered in memory. Implemented chunked streaming to Cloudinary.",
              },
              {
                title: "Redis caching for read-heavy patterns",
                description:
                  "Book metadata accessed frequently. Cache-aside pattern with TTL-based invalidation.",
              },
            ]}
            tradeoffs={[
              "MongoDB over PostgreSQL — schema flexibility for evolving book metadata",
              "Cloudinary dependency — trades control for managed media handling",
              "Redis adds operational overhead — necessary for read performance",
            ]}
            githubUrl="https://github.com/botARPIT/elibrary-apis-node"
            liveUrl="https://elib.arpitdev.site"
            simpleDiagram={
              <img 
                src={elibrarySimple} 
                alt="E-Library System Overview" 
                className="w-full rounded-md"
                loading="lazy"
                decoding="async"
              />
            }
            detailedDiagram={
              <img 
                src={elibraryArchitecture} 
                alt="E-Library Architecture" 
                className="w-full rounded-md"
                loading="lazy"
                decoding="async"
              />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
