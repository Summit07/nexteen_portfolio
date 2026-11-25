import Link from "next/link";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const metadata = {
  title: "Projects - Sumit Gupta | AI & Multi-Agent Systems Portfolio",
  description:
    "Explore AI, Multi-Agent systems, RAG workflows, distributed backend systems, and trading platforms built by Sumit Gupta.",
  keywords: [
    "Projects",
    "Generative AI",
    "Multi-Agent Systems",
    "LangGraph",
    "Google ADK",
    "RAG",
    "Graph RAG",
    "Hybrid RAG",
    "FastAPI",
    "Next.js",
  ],
  openGraph: {
    title: "Sumit Gupta - Selected AI & Multi-Agent Systems Projects",
    description: "Multi-agent orchestration, RAG architectures, and distributed systems",
    url: "https://sumiit-portfolio.vercel.app/dashboard/projects",
    type: "website",
  },
};

const aiProjects = [
  {
    title: "Multi-Agent Travel Planning Platform (HITL & MCP)",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "LangGraph",
      "TypeSafe AI Jev",
      "MCP",
      "PostgreSQL",
      "Docker",
    ],
    githubUrl:
      "https://github.com/Summit07/LangGraph_Multi_Agent_MCP_Guardrail_HITL_Travel_System",
    highlights: [
      "Built a full-stack travel-planning workflow using LangGraph and MCP integrations for AviationStack, Tavily, and OpenWeather, with PostgreSQL state persistence and human-in-the-loop approval workflows.",
      "Separated deterministic control flow from generative itinerary synthesis by using Jev for input guardrails, specialist-agent routing, destination parsing, and human-review revision triage; project testing reduced routing/orchestration latency from approximately 2.5 seconds to under 100 ms and workflow token spend by more than 50%.",
      "Implemented HS256 JWT authentication, salted-scrypt password security, HTTP Bearer route protection, rate limits (5 requests/minute for authentication and 100 requests/minute for APIs), and an 8,000-TPM tiktoken context-length guardrail.",
      "Added automatic model fallback, LangSmith tracing, and RAGAS evaluation to support workflow observability and response-quality assessment.",
    ],
  },
  {
    title: "Graphical RAG with Deterministic Jev Routing",
    techStack: [
      "FastAPI",
      "Neo4j",
      "Cypher",
      "LangGraph",
      "TypeSafe AI Jev",
      "Next.js",
      "Groq Qwen 27B",
      "OpenAI GPT-4o",
      "LangSmith",
      "RAGAS",
    ],
    githubUrl: "https://github.com/Summit07/graphical_rag/tree/development",
    highlights: [
      "Built a Graph RAG application using Neo4j entity relationships and Cypher traversal to retrieve grounded context across one-hop and two-hop relationships.",
      "Implemented a System 1 / System 2 decision path with TypeSafe AI Jev: eligible direct relational lookups are resolved deterministically in under 10 ms with zero LLM tokens; project benchmarks indicated approximately 75% lower LLM API cost for those eligible lookups.",
      "Orchestrated conditional LangGraph routing to send deterministic queries to graph extraction and escalate complex synthesis to generative models; added Groq-to-OpenAI provider fallback for HTTP 429 rate limits, token exhaustion, and API timeouts while preserving workflow state.",
      "Added LangSmith tracing and RAGAS evaluation for Faithfulness, Precision, and Recall; developed a Next.js dashboard with execution-path visualization, graph context exploration, and cost/latency telemetry.",
    ],
  },
  {
    title: "Google ADK Multi-Agent RAG Chatbot with RBAC",
    techStack: [
      "FastAPI",
      "Google ADK",
      "TypeSafe AI Jev",
      "Next.js",
      "PostgreSQL/pgvector",
      "ChromaDB",
      "FAISS",
      "LangSmith",
      "DeepEval",
    ],
    githubUrl: "https://github.com/Summit07/adk-chatbot-agent",
    highlights: [
      "Designed a supervisor-based multi-agent RAG application using Google Agent Development Kit (ADK) and FastAPI, coordinating five specialized department agents for Finance, HR, Engineering, Marketing, and General queries through hierarchical routing and department-specific context.",
      "Implemented a dual-layer access-control approach using PyJWT claim validation and vector-level namespace filtering to keep retrieval scoped to authorized tenants and sensitive departmental documents, reducing cross-department prompt drift.",
      "Built a pluggable vector-storage layer across PostgreSQL pgvector with HNSW cosine indexing, ChromaDB, and FAISS, including dual-store synchronization and configurable backend selection for storage portability.",
      "Developed an asynchronous Groq Llama-3 adapter by extending Google ADK BaseLlm and registering it with LLMRegistry; recorded approximately 350 ms time-to-first-token (TTFT) in the project setup.",
      "Implemented semantic CSV/table parsing with all-MiniLM-L6-v2 embeddings and multi-level database connection fallbacks across TCP, PostgreSQL Unix domain sockets (/var/run/postgresql), and local JSON storage.",
    ],
  },
  {
    title: "Enterprise Multi-Agent Harness & Quality Gating",
    techStack: [
      "LangGraph",
      "TypeSafe AI Jev (Noul / Choice / Score)",
      "FastAPI",
      "LangSmith",
      "RAGAS",
    ],
    githubUrl:
      "https://github.com/Summit07/LangGraph_Multi_Agent_Harness_Engineering/tree/dev-langsmith",
    highlights: [
      "Integrated Jev Noul binary checks, Choice intent classification, and Score confidence/risk decisions into LangGraph before agent dispatch; project notes report more than 70% lower prompt latency on the optimized workflow.",
      "Implemented a deterministic fast path for matching FAQs and safety-guardrail requests, resolving eligible requests in under 10 ms without LLM inference and avoiding up to two LLM calls per matching request.",
      "Built a Jev-as-a-Judge quality-audit node to check draft responses against safety and completeness thresholds, bypassing secondary LLM review for high-confidence drafts and reducing review-stage token usage by 50% in project benchmarks.",
      "Added a local rule-engine fallback and HTTP authentication circuit-breaker to preserve routing continuity during external decision-service degradation; instrumented state transitions and evaluation with LangSmith and RAGAS.",
    ],
  },
  {
    title: "Hybrid RAG with Fast Decision Reranking",
    techStack: [
      "FastAPI",
      "Next.js",
      "ChromaDB",
      "BM25",
      "TF-IDF",
      "RRF",
      "TypeSafe AI Jev",
      "Sentence Transformers",
      "Groq",
      "OpenAI",
    ],
    githubUrl: "https://github.com/Summit07/hybrid_rag/tree/development",
    highlights: [
      "Developed a hybrid retrieval pipeline combining dense vector search (ChromaDB) and sparse keyword retrieval (BM25/TF-IDF), fused through Reciprocal Rank Fusion (RRF).",
      "Integrated Jev decision reranking and evidence gating with a 0–2 relevance score; pruned low-relevance chunks below a 0.20 threshold before LLM synthesis. Project benchmarks reported 45–60% lower prompt-token overhead and approximately 40% lower time-to-first-token (TTFT).",
      "Implemented sub-millisecond pre-retrieval intent routing to bypass vector retrieval for conversational queries; project notes report a 0.02 ms response on the bypass path, alongside 600–900 fewer prompt tokens on selected query patterns.",
      "Built an explainable interface with retrieval/threshold telemetry, candidate-acceptance visibility, and token-efficiency indicators; configured generative models to receive selected evidence after deterministic gating.",
    ],
  },
];

const additionalProjects = [
  {
    title: "PREX Prediction-Market Aggregator",
    description:
      "Authentication/authorization design, token lifecycle management, and multi-level token-distribution workflows for a prediction-market aggregator involving Polymarket and Kalshi.",
    tags: ["Polymarket", "Kalshi", "Prediction Markets", "Node.js", "Auth"],
  },
  {
    title: "CRM TDMM",
    description:
      "Keycloak RBAC/ABAC access control, protected APIs, secure client onboarding/self-registration, freemium client management, and token-management services.",
    tags: ["Keycloak", "RBAC / ABAC", "Node.js", "Express", "Security"],
  },
  {
    title: "TDMM CEX / DEX / TradeMachine",
    description:
      "Binance, CoinDCX, and Bybit integrations; normalized exchange responses, real-time order execution/synchronization, and Redis/WebSocket price and order updates.",
    tags: ["Binance", "CoinDCX", "Bybit", "Redis", "WebSockets", "Trading"],
  },
  {
    title: "TeaPro Task & Ticket Workflows",
    description:
      "Multi-tenant task, ticket, and milestone management using MongoDB session transactions and rollback handling for failure-safe operations.",
    tags: ["Multi-Tenant", "MongoDB Transactions", "Session Rollback", "Node.js"],
  },
  {
    title: "BrainAlive Reward System",
    description:
      "Reward and points-distribution APIs with application-specific token logic, built alongside real-time WebSocket engagement workflows.",
    tags: ["APIs", "Token Logic", "Reward Points", "WebSockets"],
  },
  {
    title: "BigBank Exchange",
    description:
      "JWT-based authentication/authorization, crypto buy/sell and wallet integrations with CoinDCX/WazirX, Socket.IO P2P chat, and TradingView charts.",
    tags: ["CoinDCX", "WazirX", "TradingView", "Socket.IO", "Node.js"],
  },
  {
    title: "Tradekia Exchange",
    description:
      "JWT security, up-to-five-level hierarchical token distribution, TradingView chart integrations, Zendesk customer-support integration, and real-time P2P chat.",
    tags: ["Trading Platform", "5-Level Token", "TradingView", "Zendesk", "WebSockets"],
  },
  {
    title: "FUFI Edge",
    description:
      "Authentication and authorization APIs, hierarchical token-distribution workflows, and Web2-to-Web3 token airdrop integrations.",
    tags: ["Web2 to Web3", "Token Airdrop", "JWT APIs", "Node.js"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full min-h-screen pt-28 pb-20">
      <div className="max-w-[1240px] mx-auto px-4">
        {/* Header */}
        <p className="uppercase text-lg tracking-widest md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 from-12% via-sky-500 via-33% to-emerald-500 to-70%">
          Projects
        </p>
        <h2 className="py-4 font-semibold text-3xl md:text-5xl bg-clip-text text-transparent dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-white from-black to-neutral-400 dark:to-neutral-900">
          Selected AI &amp; Multi-Agent Systems Projects
        </h2>
        <p className="pb-8 text-gray-600 dark:text-gray-300 max-w-[850px] leading-relaxed">
          Production-grade Multi-Agent workflows, Graph &amp; Hybrid RAG architectures, deterministic decision routing with TypeSafe AI Jev, and evaluation harnesses built with LangGraph, Google ADK, and FastAPI.
        </p>

        {/* AI & Multi-Agent Projects */}
        <div className="space-y-8 mb-16">
          {aiProjects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 bg-white/70 dark:bg-gray-900/40 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gray-900 dark:bg-gray-800 hover:bg-cyan-600 dark:hover:bg-cyan-500 rounded-lg shadow transition-colors w-fit"
                >
                  <FaGithub size={16} />
                  <span>GitHub Repository</span>
                  <FaExternalLinkAlt size={12} />
                </a>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs px-2.5 py-1 rounded-md font-medium bg-cyan-50 text-cyan-800 dark:bg-cyan-950/50 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300 list-disc list-outside pl-5 leading-relaxed">
                {project.highlights.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Backend, Trading & Web3 Projects */}
        <div className="pt-8">
          <h2 className="py-4 font-semibold text-2xl md:text-4xl bg-clip-text text-transparent dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-white from-black to-neutral-400 dark:to-neutral-900">
            Additional Backend, Trading &amp; Web3 Project Experience
          </h2>
          <p className="pb-6 text-gray-600 dark:text-gray-300 max-w-[850px] leading-relaxed">
            Enterprise backend services, crypto exchange integrations, prediction market aggregators, and multi-tenant architectures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalProjects.map((proj, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/70 dark:bg-gray-900/40 rounded-xl border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;