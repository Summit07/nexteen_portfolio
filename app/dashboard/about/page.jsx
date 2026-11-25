import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../../../public/assets/about.jpg";

export const metadata = {
  title: "About Sumit Gupta - Full-Stack & Generative AI Engineer | Portfolio",
  description:
    "Learn about Sumit Gupta - Full-Stack & Generative AI Engineer with 6+ years of experience specializing in distributed systems, multi-agent workflows, RAG, Next.js, and Node.js.",
  keywords: [
    "About",
    "Full-Stack Engineer",
    "Generative AI",
    "Multi-Agent Systems",
    "RAG",
    "Next.js",
    "FastAPI",
    "Node.js",
  ],
  openGraph: {
    title: "About Sumit Gupta - Full-Stack & Generative AI Engineer",
    description: "Discover my background in distributed systems, multi-agent workflows, and Generative AI applications.",
    url: "https://yourportfolio.com/dashboard/about",
    type: "profile",
    images: [
      {
        url: "https://yourportfolio.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Sumit Gupta - About",
      },
    ],
  },
};

const About = () => {
  return (
    <div id="about" className="w-full md:min-h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-lg tracking-widest md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 from-12% via-sky-500 via-33% to-emerald-500 to-70%">
            About
          </p>
          <h1 className="py-4 font-semibold text-3xl md:text-5xl bg-clip-text text-transparent dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-white from-black to-neutral-400 dark:to-neutral-900">
            Who I Am
          </h1>
          <p className="py-2 text-gray-600 dark:text-white leading-relaxed">
            I am a <span className="font-semibold text-cyan-500 dark:text-cyan-400">Full-Stack &amp; Generative AI Engineer</span> with 6+ years of software development experience. Focused on frontend and backend engineering, distributed systems, financial and real-time trading infrastructure, and Generative AI applications.
          </p>
          <p className="py-2 text-gray-600 dark:text-white leading-relaxed">
            I have hands-on experience building REST APIs, microservices, multi-agent workflows, and Retrieval-Augmented Generation (RAG) systems using Node.js, NestJS, Python/FastAPI, LangChain, LangGraph, LangSmith, React.js, Next.js, Google ADK, TypeSafe AI Jev, DeepEval, Redis, PostgreSQL, MongoDB, and vector databases.
          </p>
          <p className="py-2 text-gray-600 dark:text-white leading-relaxed">
            Experienced in System 1 / System 2 decision routing, hybrid and graph retrieval, AI observability/evaluation, authentication and tenant-aware access controls, and performance optimization. Interested in building secure, reliable, observable systems while reducing unnecessary model calls, latency, and token usage.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link href="/dashboard/projects">
              <span className="py-2 text-blue-600 hover:text-blue-700 underline cursor-pointer transition-colors font-medium">
                Check out my selected projects &rarr;
              </span>
            </Link>
            <Link href="/dashboard/resume">
              <span className="py-2 text-emerald-600 hover:text-emerald-700 underline cursor-pointer transition-colors font-medium">
                View my complete resume &rarr;
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={AboutImg}
            className="rounded-xl"
            alt="Sumit Gupta - Full-Stack & Generative AI Engineer"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
