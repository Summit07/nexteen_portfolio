import React from "react";
import { FaGithub, FaLinkedinIn, FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const metadata = {
  title: "Resume - Sumit Gupta | Full-Stack & Generative AI Engineer",
  description:
    "Official resume of Sumit Gupta: Full-Stack & Generative AI Engineer with 6+ years of experience in distributed systems, multi-agent workflows, RAG, Next.js, and FastAPI.",
  keywords: [
    "Resume",
    "Sumit Gupta",
    "Full-Stack Engineer",
    "Generative AI Engineer",
    "LangGraph",
    "Google ADK",
    "RAG",
    "Next.js",
    "FastAPI",
    "Node.js",
  ],
  openGraph: {
    title: "Sumit Gupta - Professional Resume",
    description: "Full-Stack & Generative AI Engineer with 6+ years of professional experience",
    url: "https://sumiit-portfolio.vercel.app/dashboard/resume",
    type: "website",
  },
};

const Resume = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-4 pt-[120px] pb-24 text-gray-800 dark:text-gray-200">
      {/* Top Banner / Actions */}
      <div className="text-center mb-6">
        <h1 className="uppercase text-lg tracking-widest md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 from-12% via-sky-500 via-33% to-emerald-500 to-70%">
          Resume
        </h1>
      </div>

      <div className="my-4 p-5 w-full flex flex-col sm:flex-row justify-between items-center gap-4 rounded-xl bg-gradient-to-tr from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-70% shadow-lg">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
            SUMIT GUPTA
          </h2>
          <p className="text-white/90 text-sm md:text-base font-medium">
            Full-Stack &amp; Generative AI ENGINEER
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/sumit-gupta-0b4099140/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-transform hover:scale-110"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://github.com/Summit07"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-transform hover:scale-110"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="/sumiit.pdf"
            download="Sumit_Gupta_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg shadow hover:bg-gray-100 transition-transform hover:scale-105 text-sm"
          >
            <FaDownload size={14} />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="text-center py-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800 flex flex-wrap justify-center items-center gap-2 sm:gap-3">
        <span>Lucknow, India</span>
        <span>•</span>
        <a href="tel:+917355708603" className="hover:text-cyan-500">+91 7355708603</a>
        <span>•</span>
        <a href="mailto:summitgupta07@gmail.com" className="hover:text-cyan-500">summitgupta07@gmail.com</a>
        <span>•</span>
        <a href="https://www.linkedin.com/in/sumit-gupta-0b4099140/" target="_blank" rel="noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">LinkedIn</a>
        <span>•</span>
        <a href="https://github.com/Summit07" target="_blank" rel="noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">GitHub</a>
        <span>•</span>
        <a href="https://sumiit-portfolio.vercel.app/" target="_blank" rel="noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">Portfolio</a>
      </div>

      {/* PROFESSIONAL SUMMARY */}
      <section className="py-6 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
          Professional Summary
        </h3>
        <p className="leading-relaxed text-sm md:text-base text-gray-700 dark:text-gray-300">
          Software engineer with 6+ years of software development experience. Focused on frontend and backend engineering, distributed systems, financial and real-time trading infrastructure, and Generative AI applications. Hands-on experience building REST APIs, microservices, multi-agent workflows, and Retrieval-Augmented Generation (RAG) systems using Node.js, NestJS, Python/FastAPI, LangChain, LangGraph, LangSmith, React.js, Next.js, Google ADK, TypeSafe AI Jev, DeepEval, FDE, Redis, PostgreSQL, MongoDB, and vector databases. Experienced in System 1 / System 2 decision routing, hybrid and graph retrieval, AI observability/evaluation, authentication and tenant-aware access controls, and performance optimization. Interested in building secure, reliable, observable systems while reducing unnecessary model calls, latency, and token usage.
        </p>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="py-6 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
          Technical Skills
        </h3>
        <div className="space-y-2.5 text-sm">
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">Programming Languages:</span>{" "}
            <span className="text-gray-700 dark:text-gray-300">JavaScript, TypeScript, Python, Java, SQL, NoSQL, HTML, CSS</span>
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">Backend &amp; Distributed Systems:</span>{" "}
            <span className="text-gray-700 dark:text-gray-300">Node.js, Express.js, NestJS, Fastify, FastAPI, Spring Boot, RESTful APIs, microservices, distributed systems, asynchronous architecture, Redis, BullMQ, WebSockets, Socket.IO, API design, background jobs</span>
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">AI, Agents &amp; Orchestration:</span>{" "}
            <span className="text-gray-700 dark:text-gray-300">LangChain, LangGraph, Google Agent Development Kit (ADK), Google ADK Agents, TypeSafe AI Jev (System 1 / System 2), MCP (Model Context Protocol), multi-agent workflows, supervisor/sub-agent orchestration, decision routing, Jev Noul / Choice / Score, Jev-as-a-Judge, Human-in-the-Loop (HITL), guardrails, confidence scoring, prompt-injection screening</span>
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">RAG, Search &amp; Evaluation:</span>{" "}
            <span className="text-gray-700 dark:text-gray-300">Retrieval-Augmented Generation (RAG), Graph RAG, Hybrid RAG, dense and sparse retrieval, decision reranking, evidence gating, BM25, Reciprocal Rank Fusion (RRF), multi-query retrieval, context optimization, LangSmith, RAGAS, DeepEval, Faithfulness, Answer Relevance, Context Precision, Recall</span>
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">Databases &amp; Vector Stores:</span>{" "}
            <span className="text-gray-700 dark:text-gray-300">PostgreSQL, pgvector, HNSW indexing, MySQL, MongoDB, Neo4j, Cypher, ChromaDB, FAISS, Pinecone, SQLite, vector search, tenant/namespace filtering, MongoDB session transactions</span>
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">Security &amp; Identity:</span>{" "}
            <span className="text-gray-700 dark:text-gray-300">JWT, PyJWT, Keycloak, RBAC, ABAC, OAuth2 Bearer authentication, API authentication and authorization, API rate limiting, password hashing, AES, RSA</span>
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">Cloud, DevOps &amp; Infrastructure:</span>{" "}
            <span className="text-gray-700 dark:text-gray-300">Docker, Docker Compose, Nginx, PM2, AWS EC2, AWS S3, DigitalOcean, Kubernetes, Terraform, Azure</span>
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">Frontend &amp; Web Technologies:</span>{" "}
            <span className="text-gray-700 dark:text-gray-300">React, Next.js, TypeScript, Tailwind CSS, React Query, lazy loading, code splitting</span>
          </p>
          <p>
            <span className="font-semibold text-gray-900 dark:text-white">Blockchain &amp; Financial Integrations:</span>{" "}
            <span className="text-gray-700 dark:text-gray-300">Web3.js, Ethers.js, Solidity, Foundry, Hardhat, DeFi, CEX/DEX integrations, Binance, CoinDCX, Bybit, WazirX, Polymarket, Kalshi, TradingView</span>
          </p>
        </div>
      </section>

      {/* SELECTED AI & MULTI-AGENT SYSTEMS PROJECTS */}
      <section className="py-6 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
          Selected AI &amp; Multi-Agent Systems Projects
        </h3>
        <div className="space-y-6">
          {/* Project 1 */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h4 className="font-bold text-base text-gray-900 dark:text-white">
                Multi-Agent Travel Planning Platform (HITL &amp; MCP)
              </h4>
              <a
                href="https://github.com/Summit07/LangGraph_Multi_Agent_MCP_Guardrail_HITL_Travel_System"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 dark:text-cyan-400 hover:underline text-xs sm:text-sm font-medium inline-flex items-center gap-1"
              >
                GitHub Link <FaExternalLinkAlt size={10} />
              </a>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 italic">
              Next.js, React, TypeScript, FastAPI, LangGraph, TypeSafe AI Jev, MCP, PostgreSQL, Docker
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Built a full-stack travel-planning workflow using LangGraph and MCP integrations for AviationStack, Tavily, and OpenWeather, with PostgreSQL state persistence and human-in-the-loop approval workflows.</li>
              <li>Separated deterministic control flow from generative itinerary synthesis by using Jev for input guardrails, specialist-agent routing, destination parsing, and human-review revision triage; project testing reduced routing/orchestration latency from approximately 2.5 seconds to under 100 ms and workflow token spend by more than 50%.</li>
              <li>Implemented HS256 JWT authentication, salted-scrypt password security, HTTP Bearer route protection, rate limits (5 requests/minute for authentication and 100 requests/minute for APIs), and an 8,000-TPM tiktoken context-length guardrail.</li>
              <li>Added automatic model fallback, LangSmith tracing, and RAGAS evaluation to support workflow observability and response-quality assessment.</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h4 className="font-bold text-base text-gray-900 dark:text-white">
                Graphical RAG with Deterministic Jev Routing
              </h4>
              <a
                href="https://github.com/Summit07/graphical_rag/tree/development"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 dark:text-cyan-400 hover:underline text-xs sm:text-sm font-medium inline-flex items-center gap-1"
              >
                GitHub Link <FaExternalLinkAlt size={10} />
              </a>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 italic">
              FastAPI, Neo4j, Cypher, LangGraph, TypeSafe AI Jev, Next.js, Groq Qwen 27B, OpenAI GPT-4o, LangSmith, RAGAS
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Built a Graph RAG application using Neo4j entity relationships and Cypher traversal to retrieve grounded context across one-hop and two-hop relationships.</li>
              <li>Implemented a System 1 / System 2 decision path with TypeSafe AI Jev: eligible direct relational lookups are resolved deterministically in under 10 ms with zero LLM tokens; project benchmarks indicated approximately 75% lower LLM API cost for those eligible lookups.</li>
              <li>Orchestrated conditional LangGraph routing to send deterministic queries to graph extraction and escalate complex synthesis to generative models; added Groq-to-OpenAI provider fallback for HTTP 429 rate limits, token exhaustion, and API timeouts while preserving workflow state.</li>
              <li>Added LangSmith tracing and RAGAS evaluation for Faithfulness, Precision, and Recall; developed a Next.js dashboard with execution-path visualization, graph context exploration, and cost/latency telemetry.</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h4 className="font-bold text-base text-gray-900 dark:text-white">
                Google ADK Multi-Agent RAG Chatbot with RBAC
              </h4>
              <a
                href="https://github.com/Summit07/adk-chatbot-agent"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 dark:text-cyan-400 hover:underline text-xs sm:text-sm font-medium inline-flex items-center gap-1"
              >
                GitHub Link <FaExternalLinkAlt size={10} />
              </a>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 italic">
              FastAPI, Google ADK, TypeSafe AI Jev, Next.js, PostgreSQL/pgvector, ChromaDB, FAISS, LangSmith, DeepEval
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Designed a supervisor-based multi-agent RAG application using Google Agent Development Kit (ADK) and FastAPI, coordinating five specialized department agents for Finance, HR, Engineering, Marketing, and General queries through hierarchical routing and department-specific context.</li>
              <li>Implemented a dual-layer access-control approach using PyJWT claim validation and vector-level namespace filtering to keep retrieval scoped to authorized tenants and sensitive departmental documents, reducing cross-department prompt drift.</li>
              <li>Built a pluggable vector-storage layer across PostgreSQL pgvector with HNSW cosine indexing, ChromaDB, and FAISS, including dual-store synchronization and configurable backend selection for storage portability.</li>
              <li>Developed an asynchronous Groq Llama-3 adapter by extending Google ADK BaseLlm and registering it with LLMRegistry; recorded approximately 350 ms time-to-first-token (TTFT) in the project setup.</li>
              <li>Implemented semantic CSV/table parsing with all-MiniLM-L6-v2 embeddings and multi-level database connection fallbacks across TCP, PostgreSQL Unix domain sockets (/var/run/postgresql), and local JSON storage.</li>
            </ul>
          </div>

          {/* Project 4 */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h4 className="font-bold text-base text-gray-900 dark:text-white">
                Enterprise Multi-Agent Harness &amp; Quality Gating
              </h4>
              <a
                href="https://github.com/Summit07/LangGraph_Multi_Agent_Harness_Engineering/tree/dev-langsmith"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 dark:text-cyan-400 hover:underline text-xs sm:text-sm font-medium inline-flex items-center gap-1"
              >
                GitHub Link <FaExternalLinkAlt size={10} />
              </a>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 italic">
              LangGraph, TypeSafe AI Jev (Noul / Choice / Score), FastAPI, LangSmith, RAGAS
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Integrated Jev Noul binary checks, Choice intent classification, and Score confidence/risk decisions into LangGraph before agent dispatch; project notes report more than 70% lower prompt latency on the optimized workflow.</li>
              <li>Implemented a deterministic fast path for matching FAQs and safety-guardrail requests, resolving eligible requests in under 10 ms without LLM inference and avoiding up to two LLM calls per matching request.</li>
              <li>Built a Jev-as-a-Judge quality-audit node to check draft responses against safety and completeness thresholds, bypassing secondary LLM review for high-confidence drafts and reducing review-stage token usage by 50% in project benchmarks.</li>
              <li>Added a local rule-engine fallback and HTTP authentication circuit-breaker to preserve routing continuity during external decision-service degradation; instrumented state transitions and evaluation with LangSmith and RAGAS.</li>
            </ul>
          </div>

          {/* Project 5 */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h4 className="font-bold text-base text-gray-900 dark:text-white">
                Hybrid RAG with Fast Decision Reranking
              </h4>
              <a
                href="https://github.com/Summit07/hybrid_rag/tree/development"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-600 dark:text-cyan-400 hover:underline text-xs sm:text-sm font-medium inline-flex items-center gap-1"
              >
                GitHub Link <FaExternalLinkAlt size={10} />
              </a>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 italic">
              FastAPI, Next.js, ChromaDB, BM25, TF-IDF, RRF, TypeSafe AI Jev, Sentence Transformers, Groq, OpenAI
            </p>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Developed a hybrid retrieval pipeline combining dense vector search (ChromaDB) and sparse keyword retrieval (BM25/TF-IDF), fused through Reciprocal Rank Fusion (RRF).</li>
              <li>Integrated Jev decision reranking and evidence gating with a 0–2 relevance score; pruned low-relevance chunks below a 0.20 threshold before LLM synthesis. Project benchmarks reported 45–60% lower prompt-token overhead and approximately 40% lower time-to-first-token (TTFT).</li>
              <li>Implemented sub-millisecond pre-retrieval intent routing to bypass vector retrieval for conversational queries; project notes report a 0.02 ms response on the bypass path, alongside 600–900 fewer prompt tokens on selected query patterns.</li>
              <li>Built an explainable interface with retrieval/threshold telemetry, candidate-acceptance visibility, and token-efficiency indicators; configured generative models to receive selected evidence after deterministic gating.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section className="py-6 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
          Professional Experience
        </h3>
        <div className="space-y-6">
          {/* ComputeSoft */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h4 className="font-bold text-base text-gray-900 dark:text-white">
                Full-Stack Developer <span className="font-semibold text-cyan-600 dark:text-cyan-400">| ComputeSoft</span>
              </h4>
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                May 2026 – Aug 2026 | Lucknow, India
              </span>
            </div>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Integrated RESTful APIs for SchoolSpine and YouthIndia Newspaper Management applications, connecting React/Next.js frontends with Spring Boot backend services.</li>
              <li>Improved frontend data fetching and rendering through React Query, lazy loading, and code splitting; refactored modules and developed reusable components to improve maintainability.</li>
            </ul>
          </div>

          {/* ITH Technologies */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h4 className="font-bold text-base text-gray-900 dark:text-white">
                Backend Developer <span className="font-semibold text-cyan-600 dark:text-cyan-400">| ITH Technologies</span>
              </h4>
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Mar 2024 – Mar 2026 | Kanpur, India
              </span>
            </div>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Designed authentication, authorization, and token-lifecycle flows for PREX, a prediction-market aggregator involving Polymarket and Kalshi.</li>
              <li>Implemented Keycloak RBAC/ABAC access control and protected APIs for CRM TDMM, including secure onboarding, self-registration, client management, and token-management services.</li>
              <li>Developed TeaPro multi-tenant task and ticket workflows using MongoDB session transactions and rollback handling for failure-safe operations.</li>
              <li>Built real-time WebSocket workflows for token launches and client engagement across centralized/decentralized exchanges, plus reward and points-distribution services for BrainAlive.</li>
            </ul>
          </div>

          {/* Coding Web Tech */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h4 className="font-bold text-base text-gray-900 dark:text-white">
                Backend Developer <span className="font-semibold text-cyan-600 dark:text-cyan-400">| Coding Web Tech</span>
              </h4>
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Jul 2023 – Jan 2024 | Lucknow, India
              </span>
            </div>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Developed JWT-based authentication and authorization APIs for the BigBank cryptocurrency exchange.</li>
              <li>Integrated CoinDCX and WazirX exchange services for crypto buy, sell, and wallet operations; implemented real-time P2P communication using Socket.IO and integrated TradingView charts for market visualization.</li>
            </ul>
          </div>

          {/* Future Finance Exchange */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h4 className="font-bold text-base text-gray-900 dark:text-white">
                Backend Developer <span className="font-semibold text-cyan-600 dark:text-cyan-400">| Future Finance Exchange</span>
              </h4>
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Jul 2021 – Jun 2023 | Lucknow, India
              </span>
            </div>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Built authentication and authorization APIs for Tradekia and FUFI Edge trading platforms, including hierarchical token-distribution workflows supporting up to five levels.</li>
              <li>Implemented real-time market updates through WebSockets/Socket.IO, TradingView chart integrations, Zendesk customer-support integration, and P2P chat/communication.</li>
            </ul>
          </div>

          {/* GitHub Open Source */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h4 className="font-bold text-base text-gray-900 dark:text-white">
                Open-Source Developer <span className="font-semibold text-cyan-600 dark:text-cyan-400">| GitHub</span>
              </h4>
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                Dec 2019 – Jun 2021 | Remote
              </span>
            </div>
            <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Developed RESTful backend APIs and middleware using Node.js, Express.js, and MongoDB for open-source applications and developer tooling.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ADDITIONAL BACKEND, TRADING & WEB3 PROJECT EXPERIENCE */}
      <section className="py-6 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
          Additional Backend, Trading &amp; Web3 Project Experience
        </h3>
        <ul className="list-disc list-outside pl-5 space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <li>
            <strong className="text-gray-900 dark:text-white">PREX:</strong> Authentication/authorization design, token lifecycle management, and multi-level token-distribution workflows for a prediction-market aggregator. <strong className="text-gray-900 dark:text-white">CRM TDMM:</strong> Keycloak RBAC/ABAC, protected APIs, client onboarding/self-registration, freemium client management, and token dashboards.
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">TDMM CEX / DEX / TradeMachine:</strong> Binance, CoinDCX, and Bybit integrations; normalized exchange responses, real-time order execution/synchronization, and Redis/WebSocket price and order updates. <strong className="text-gray-900 dark:text-white">TeaPro:</strong> Multi-tenant task, ticket, and milestone management using MongoDB session transactions and rollback-safe operations.
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">BrainAlive:</strong> Reward and points-distribution APIs with application-specific token logic. <strong className="text-gray-900 dark:text-white">BigBank Exchange:</strong> Crypto buy/sell and wallet integrations with CoinDCX/WazirX, Socket.IO P2P chat, and TradingView charts. <strong className="text-gray-900 dark:text-white">Tradekia Exchange:</strong> JWT security, up-to-five-level token distribution, TradingView, Zendesk, and P2P chat. <strong className="text-gray-900 dark:text-white">FUFI Edge:</strong> JWT APIs and Web2-to-Web3 token airdrop integrations.
          </li>
        </ul>
      </section>

      {/* CERTIFICATION & EDUCATION */}
      <section className="py-6">
        <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
          Certification &amp; Education
        </h3>
        <div className="space-y-4 text-xs sm:text-sm">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="font-bold text-gray-900 dark:text-white">
                Oracle Cloud Infrastructure (OCI) AI Foundations Certified Associate
              </span>
              <span className="text-gray-500 dark:text-gray-400">October 2025</span>
            </div>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <span className="font-bold text-gray-900 dark:text-white">
                Bachelor of Technology (B.Tech), Electrical Engineering
              </span>
              <span className="text-gray-500 dark:text-gray-400">2019 | 75%</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Dr. A.P.J. Abdul Kalam Technical University (AKTU)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;