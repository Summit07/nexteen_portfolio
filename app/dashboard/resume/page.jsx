import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const metadata = {
  title: "Resume - Sumit Gupta | Full Stack Developer",
  description:
    "Resume of Sumit Gupta - Full Stack Developer with expertise in Next.js, React, Node.js, Solidity, blockchain, and cryptocurrency platforms.",
  keywords: [
    "Resume",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Solidity",
    "Blockchain",
  ],
  openGraph: {
    title: "Sumit Gupta - Professional Resume",
    description: "Full Stack Developer with 2+ years of professional experience",
    url: "https://yourportfolio.com/dashboard/resume",
    type: "website",
    images: [
      {
        url: "https://yourportfolio.com/og-resume.jpg",
        width: 1200,
        height: 630,
        alt: "Sumit Gupta Resume",
      },
    ],
  },
};

const Resume = () => {
  return (
    <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
      <h1 className="text-center uppercase text-lg tracking-widest md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 from-12% via-sky-500 via-33% to-emerald-500 to-70%">
        Resume
      </h1>
      <div className="my-4 p-4 w-full flex justify-between items-center rounded-lg bg-gradient-to-tr from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-70%">
        <h2 className="text-center text-3xl uppercase tracking-wide md:text-3xl font-extrabold bg-clip-text text-transparent dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-white from-black to-neutral-400 dark:to-neutral-900">
          Sumit Gupta
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/sumit-gupta-0b4099140/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedinIn size={20} className="hover:scale-110 transition-transform" />
          </a>
          <a
            href="https://github.com/Summit07"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub size={20} className="hover:scale-110 transition-transform" />
          </a>

          <Link href="/sumiit.pdf">
            <HoverCard>
              <HoverCardTrigger asChild>
                <button
                  aria-label="Download resume PDF"
                  className="hover:scale-110 transition-transform cursor-pointer"
                >
                  <ImAttachment size={20} />
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="w-48">
                <p className="text-sm">Download resume in PDF format</p>
              </HoverCardContent>
            </HoverCard>
          </Link>
        </div>
      </div>

      <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
        <div className="hidden sm:block">
          <p>
            Proven Leadership <span className="px-1">|</span> Web Development{" "}
            <span className="px-1">|</span> Complex Problem Solving
          </p>
        </div>
        <div className="block sm:hidden">
          <p>Proven Leadership</p>
          <p className="py-2">Web Development</p>
          <p>Complex Problem Solving</p>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300">
        To make a significant impact in a reputed organization while leveraging
        my full-stack development expertise. Seeking to contribute technical
        excellence, innovation, and proven leadership to drive success in
        building scalable web applications and blockchain solutions.
      </p>

      {/* Skills */}
      <div className="text-center py-4">
        <h3 className="text-center underline text-[18px] py-2 font-semibold">
          Technical Skills
        </h3>
        <p className="py-2">
          <span className="font-bold">Frontend</span>
          <span className="px-2">|</span>Next.js<span className="px-2">|</span>
          React<span className="px-2">|</span>Tailwind CSS<span className="px-2">|</span>HTML
          <span className="px-2">|</span>CSS<span className="px-2">|</span>JavaScript
        </p>
        <p className="py-2">
          <span className="font-bold">Backend</span>
          <span className="px-2">|</span>Node.js<span className="px-2">|</span>MongoDB
          <span className="px-2">|</span>MySQL
        </p>
        <p className="py-2">
          <span className="font-bold">Blockchain & Web3</span>
          <span className="px-2">|</span>Solidity<span className="px-2">|</span>Web3.js
          <span className="px-2">|</span>Cryptocurrency<span className="px-2">|</span>Smart
          Contracts
        </p>
        <p className="py-2">
          <span className="font-bold">DevOps & Cloud</span>
          <span className="px-2">|</span>AWS<span className="px-2">|</span>Vercel
          <span className="px-2">|</span>Digital Ocean<span className="px-2">|</span>Ubuntu
          <span className="px-2">|</span>WinSCP
        </p>
      </div>

      <h3 className="text-center underline text-[18px] py-4 font-semibold">
        Professional Experience
      </h3>

      {/* BIGBANK Experience */}
      <div className="py-6">
        <p className="italic">
          <span className="font-bold italic">
            BIGBANK EXCHANGE - Cryptocurrency Trading Platform
          </span>
          <span className="px-2">|</span>Lucknow, UP
        </p>
        <p className="py-1 italic text-sm">
          Full Stack Developer (July 2023 - Present)
        </p>
        <ul className="list-disc list-outside px-7 py-1 leading-relaxed text-sm">
          <li>Architected robust backend infrastructure using Node.js for crypto trading platform integration with Flutter app</li>
          <li>Implemented buy/sell logic with real-time wallet management across the entire application</li>
          <li>Developed P2P trading functionality enabling direct cryptocurrency transfers between users</li>
          <li>Created automated trading bots for price and volume manipulation monitoring</li>
          <li>Integrated TradingView Chart API and implemented real-time chat features for coin trading</li>
          <li>Integrated external exchange APIs like CoinDCX for liquidity management and order execution</li>
        </ul>
      </div>

      {/* Future Finance Experience */}
      <div className="py-6">
        <p className="italic">
          <span className="font-bold">FUTURE FINANCE - Product-Based Company</span>
          <span className="px-2">|</span>Lucknow, UP
        </p>
        <p className="py-1 italic text-sm">
          Full Stack Developer (July 2021 - June 2023)
        </p>
        <ul className="list-disc list-outside px-7 py-1 leading-relaxed text-sm">
          <li>Contributed to multiple blockchain and cryptocurrency projects: FutureFi, Tradekia Exchange, Cryptoxin, FuFiEdge, TradeBro</li>
          <li>Developed decentralized finance (DeFi) ecosystem components using Solidity and smart contracts</li>
          <li>Built trading platform with integrated TradingView charts and multi-exchange support</li>
          <li>Created decentralized social media platform (Cryptoxin) with cryptocurrency news and earning features</li>
          <li>Implemented SID membership system with token burning mechanism for FuFi coin platform</li>
          <li>Developed real-time market manipulation detection and volume manipulation bots</li>
        </ul>
      </div>

      {/* Education */}
      <div className="py-6">
        <p className="italic">
          <span className="font-bold">Professional Certifications</span>
          <span className="px-2">|</span>
        </p>
        <p className="py-1 italic text-sm">
          O Level & CCC Certification (Dec 2020 - Aug 2022)
        </p>
        <ul className="list-disc list-outside px-7 py-1 leading-relaxed text-sm">
          <li>Completed foundational certifications in computer applications</li>
          <li>Enhanced technical knowledge during initial pandemic lockdown period</li>
          <li>Integrated learning with professional development at Future Finance</li>
        </ul>
      </div>

      {/* Open Source */}
      <div className="py-6">
        <p className="italic">
          <span className="font-bold">Open Source Contribution</span>
          <span className="px-2">|</span>GitHub
        </p>
        <p className="py-1 italic text-sm">
          Freelance Developer (Dec 2019 - Jan 2021)
        </p>
        <ul className="list-disc list-outside px-7 py-1 leading-relaxed text-sm">
          <li>Contributed to open-source projects while preparing for competitive examinations</li>
          <li>Gained practical understanding of website architecture and development workflows</li>
          <li>Learned full-stack development fundamentals through real-world project experience</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
