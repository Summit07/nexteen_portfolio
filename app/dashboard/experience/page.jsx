import React from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export const metadata = {
  title: "Experience - Sumit Gupta | Full-Stack & Generative AI Engineer",
  description:
    "Professional software development experience of Sumit Gupta across ComputeSoft, ITH Technologies, Coding Web Tech, and Future Finance Exchange.",
  keywords: [
    "Experience",
    "Full-Stack Developer",
    "Backend Developer",
    "ComputeSoft",
    "ITH Technologies",
    "Coding Web Tech",
    "Future Finance",
  ],
};

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "ComputeSoft",
    period: "May 2026 – Aug 2026",
    location: "Lucknow, India",
    points: [
      "Integrated RESTful APIs for SchoolSpine and YouthIndia Newspaper Management applications, connecting React/Next.js frontends with Spring Boot backend services.",
      "Improved frontend data fetching and rendering through React Query, lazy loading, and code splitting; refactored modules and developed reusable components to improve maintainability.",
    ],
  },
  {
    role: "Backend Developer",
    company: "ITH Technologies",
    period: "Mar 2024 – Mar 2026",
    location: "Kanpur, India",
    points: [
      "Designed authentication, authorization, and token-lifecycle flows for PREX, a prediction-market aggregator involving Polymarket and Kalshi.",
      "Implemented Keycloak RBAC/ABAC access control and protected APIs for CRM TDMM, including secure onboarding, self-registration, client management, and token-management services.",
      "Developed TeaPro multi-tenant task and ticket workflows using MongoDB session transactions and rollback handling for failure-safe operations.",
      "Built real-time WebSocket workflows for token launches and client engagement across centralized/decentralized exchanges, plus reward and points-distribution services for BrainAlive.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Coding Web Tech",
    period: "Jul 2023 – Jan 2024",
    location: "Lucknow, India",
    points: [
      "Developed JWT-based authentication and authorization APIs for the BigBank cryptocurrency exchange.",
      "Integrated CoinDCX and WazirX exchange services for crypto buy, sell, and wallet operations; implemented real-time P2P communication using Socket.IO and integrated TradingView charts for market visualization.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Future Finance Exchange",
    period: "Jul 2021 – Jun 2023",
    location: "Lucknow, India",
    points: [
      "Built authentication and authorization APIs for Tradekia and FUFI Edge trading platforms, including hierarchical token-distribution workflows supporting up to five levels.",
      "Implemented real-time market updates through WebSockets/Socket.IO, TradingView chart integrations, Zendesk customer-support integration, and P2P chat/communication.",
    ],
  },
  {
    role: "Open-Source Developer",
    company: "GitHub",
    period: "Dec 2019 – Jun 2021",
    location: "Remote",
    points: [
      "Developed RESTful backend APIs and middleware using Node.js, Express.js, and MongoDB for open-source applications and developer tooling.",
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="w-full min-h-screen pt-28 pb-20">
      <div className="max-w-[1240px] mx-auto px-4">
        <p className="uppercase text-lg tracking-widest md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 from-12% via-sky-500 via-33% to-emerald-500 to-70%">
          Experience
        </p>
        <h2 className="py-4 font-semibold text-3xl md:text-5xl bg-clip-text text-transparent dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-white from-black to-neutral-400 dark:to-neutral-900">
          Professional Experience
        </h2>
        <p className="pb-8 text-gray-600 dark:text-gray-300 max-w-[850px] leading-relaxed">
          Over 6+ years of software development experience specializing in full-stack engineering, distributed systems, financial trading infrastructure, and real-time backend services.
        </p>

        <div className="relative border-l-2 border-cyan-500/30 dark:border-cyan-500/20 ml-4 md:ml-6 space-y-10 pl-6 md:pl-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Dot on the timeline */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-white dark:ring-gray-900 group-hover:scale-125 transition-transform" />

              <div className="p-6 md:p-8 bg-white/70 dark:bg-gray-900/40 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-none hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.role}{" "}
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                      | {exp.company}
                    </span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300 list-disc list-outside pl-5 leading-relaxed">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;