import React from "react";
import Image from "next/image";
import Link from "next/link";
// import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 dark:text-white">
            Full-Stack &amp; Generative AI Engineer with 6+ years of software development experience.
          </p>
          <p className="py-2 text-gray-600 dark:text-white leading-relaxed">
            Focused on frontend and backend engineering, distributed systems, financial and real-time trading infrastructure, and Generative AI applications. Hands-on experience building REST APIs, microservices, multi-agent workflows, and Retrieval-Augmented Generation (RAG) systems using Node.js, NestJS, Python/FastAPI, LangChain, LangGraph, LangSmith, React.js, Next.js, Google ADK, TypeSafe AI Jev, DeepEval, Redis, PostgreSQL, MongoDB, and vector databases.
          </p>
          <p className="py-2 text-gray-600 dark:text-white leading-relaxed">
            Experienced in System 1 / System 2 decision routing, hybrid and graph retrieval, AI observability/evaluation, authentication and tenant-aware access controls, and performance optimization.
          </p>
          <Link href="/dashboard/projects">
            <p className="py-2 text-blue-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          {/* <Image src={AboutImg} className="rounded-xl" alt="/" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
