import React from "react";
import {
  FaCode,
  FaServer,
  FaBrain,
  FaSearch,
  FaDatabase,
  FaShieldAlt,
  FaCloud,
  FaLaptopCode,
  FaCoins,
} from "react-icons/fa";

export const metadata = {
  title: "Technical Skills - Sumit Gupta | Full-Stack & Generative AI Engineer",
  description:
    "Technical skills of Sumit Gupta: AI Agents, LangGraph, Google ADK, RAG, Python, FastAPI, Node.js, Distributed Systems, Databases, Vector Stores, and Cloud Infrastructure.",
  keywords: [
    "Technical Skills",
    "Generative AI",
    "LangGraph",
    "Google ADK",
    "RAG",
    "Next.js",
    "React",
    "Node.js",
    "FastAPI",
    "Python",
    "TypeScript",
    "PostgreSQL",
    "pgvector",
    "Docker",
  ],
  openGraph: {
    title: "Sumit Gupta - Technical Skills",
    description: "Full-Stack and Generative AI technical expertise, agent orchestration, and distributed systems",
    url: "https://sumiit-portfolio.vercel.app/dashboard/skills",
    type: "website",
  },
};

const skillCategories = [
  {
    title: "AI, Agents & Orchestration",
    icon: FaBrain,
    color: "from-purple-500 to-indigo-600",
    borderGlow: "hover:border-purple-500/50 hover:shadow-purple-500/20",
    skills: [
      "LangChain",
      "LangGraph",
      "Google Agent Development Kit (ADK)",
      "Google ADK Agents",
      "TypeSafe AI Jev (System 1 / System 2)",
      "MCP (Model Context Protocol)",
      "Multi-Agent Workflows",
      "Supervisor / Sub-Agent Orchestration",
      "Decision Routing",
      "Jev Noul / Choice / Score",
      "Jev-as-a-Judge",
      "Human-in-the-Loop (HITL)",
      "Guardrails",
      "Confidence Scoring",
      "Prompt-Injection Screening",
    ],
  },
  {
    title: "RAG, Search & Evaluation",
    icon: FaSearch,
    color: "from-emerald-500 to-teal-600",
    borderGlow: "hover:border-emerald-500/50 hover:shadow-emerald-500/20",
    skills: [
      "Retrieval-Augmented Generation (RAG)",
      "Graph RAG",
      "Hybrid RAG",
      "Dense & Sparse Retrieval",
      "Decision Reranking",
      "Evidence Gating",
      "BM25",
      "Reciprocal Rank Fusion (RRF)",
      "Multi-Query Retrieval",
      "Context Optimization",
      "LangSmith",
      "RAGAS",
      "DeepEval",
      "Faithfulness",
      "Answer Relevance",
      "Context Precision",
      "Recall",
    ],
  },
  {
    title: "Backend & Distributed Systems",
    icon: FaServer,
    color: "from-blue-500 to-cyan-600",
    borderGlow: "hover:border-blue-500/50 hover:shadow-blue-500/20",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Fastify",
      "FastAPI",
      "Spring Boot",
      "RESTful APIs",
      "Microservices",
      "Distributed Systems",
      "Asynchronous Architecture",
      "Redis",
      "BullMQ",
      "WebSockets",
      "Socket.IO",
      "API Design",
      "Background Jobs",
    ],
  },
  {
    title: "Databases & Vector Stores",
    icon: FaDatabase,
    color: "from-amber-500 to-orange-600",
    borderGlow: "hover:border-amber-500/50 hover:shadow-amber-500/20",
    skills: [
      "PostgreSQL",
      "pgvector",
      "HNSW Indexing",
      "MySQL",
      "MongoDB",
      "Neo4j",
      "Cypher",
      "ChromaDB",
      "FAISS",
      "Pinecone",
      "SQLite",
      "Vector Search",
      "Tenant / Namespace Filtering",
      "MongoDB Session Transactions",
    ],
  },
  {
    title: "Programming Languages",
    icon: FaCode,
    color: "from-sky-500 to-blue-600",
    borderGlow: "hover:border-sky-500/50 hover:shadow-sky-500/20",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "SQL",
      "NoSQL",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Security & Identity",
    icon: FaShieldAlt,
    color: "from-rose-500 to-red-600",
    borderGlow: "hover:border-rose-500/50 hover:shadow-rose-500/20",
    skills: [
      "JWT",
      "PyJWT",
      "Keycloak",
      "RBAC",
      "ABAC",
      "OAuth2 Bearer Authentication",
      "API Authentication & Authorization",
      "API Rate Limiting",
      "Password Hashing",
      "AES",
      "RSA",
    ],
  },
  {
    title: "Frontend & Web Technologies",
    icon: FaLaptopCode,
    color: "from-teal-500 to-emerald-600",
    borderGlow: "hover:border-teal-500/50 hover:shadow-teal-500/20",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Lazy Loading",
      "Code Splitting",
    ],
  },
  {
    title: "Cloud, DevOps & Infrastructure",
    icon: FaCloud,
    color: "from-indigo-500 to-blue-600",
    borderGlow: "hover:border-indigo-500/50 hover:shadow-indigo-500/20",
    skills: [
      "Docker",
      "Docker Compose",
      "Nginx",
      "PM2",
      "AWS EC2",
      "AWS S3",
      "DigitalOcean",
      "Kubernetes",
      "Terraform",
      "Azure",
    ],
  },
  {
    title: "Blockchain & Financial Integrations",
    icon: FaCoins,
    color: "from-yellow-500 to-amber-600",
    borderGlow: "hover:border-yellow-500/50 hover:shadow-yellow-500/20",
    skills: [
      "Web3.js",
      "Ethers.js",
      "Solidity",
      "Foundry",
      "Hardhat",
      "DeFi",
      "CEX / DEX Integrations",
      "Binance",
      "CoinDCX",
      "Bybit",
      "WazirX",
      "Polymarket",
      "Kalshi",
      "TradingView",
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full min-h-screen p-2 pt-28 pb-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-lg tracking-widest md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 from-12% via-sky-500 via-33% to-emerald-500 to-70%">
          Skills
        </p>
        <h2 className="py-4 font-semibold text-3xl md:text-5xl bg-clip-text text-transparent dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-white from-black to-neutral-400 dark:to-neutral-900">
          Technical Expertise
        </h2>
        <p className="pb-8 text-gray-600 dark:text-gray-300 max-w-[850px] leading-relaxed">
          Comprehensive overview of technical capabilities covering Generative AI systems, multi-agent orchestration, RAG architectures, distributed backend infrastructure, databases, and web technologies as detailed in my resume.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className={`p-6 bg-white/70 dark:bg-gray-900/40 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-none hover:shadow-xl transition-all duration-300 ${cat.borderGlow} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white shadow-md`}
                    >
                      <Icon size={18} />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1 rounded-md font-medium bg-gray-100 text-gray-800 dark:bg-gray-800/80 dark:text-gray-200 border border-gray-200/60 dark:border-gray-700/60 hover:border-cyan-500 dark:hover:border-cyan-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;