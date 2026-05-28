import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../../../public/assets/about.jpg";

export const metadata = {
  title: "About Sumit Gupta - Full Stack Developer | Portfolio",
  description:
    "Learn about Sumit Gupta - a full-stack developer specializing in Next.js, React, Node.js, Solidity, and blockchain technology. View professional background and expertise.",
  keywords: ["About", "Full Stack Developer", "Next.js", "Solidity", "Blockchain"],
  openGraph: {
    title: "About Sumit Gupta - Developer",
    description: "Discover my journey from open source to full-stack development",
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
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-lg tracking-widest md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-indigo-500 from-12% via-sky-500 via-33% to-emerald-500 to-70%">
            About
          </p>
          <h1 className="py-4 font-semibold text-3xl md:text-5xl bg-clip-text text-transparent dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-white from-black to-neutral-400 dark:to-neutral-900">
            Who I Am
          </h1>
          <p className="py-2 text-gray-600 dark:text-white">
            I am a full-stack developer specializing in frontend, backend, and
            Solidity blockchain development.
          </p>
          <p className="py-2 text-gray-600 dark:text-white">
            I started my programming journey in 2019 with HTML, CSS, and
            JavaScript through open-source contributions. What began as small
            edits evolved into a genuine passion for software development and
            technological innovation.
          </p>
          <p className="py-2 text-gray-600 dark:text-white">
            Fascinated by the complexity and possibilities of programming, I
            have expanded my expertise to include Next.js, React, Node.js, and
            blockchain technologies. I am actively working on cutting-edge
            projects that leverage modern web technologies and decentralized
            systems.
          </p>
          <Link href="/dashboard/projects">
            <p className="py-2 text-blue-600 hover:text-blue-700 underline cursor-pointer transition-colors">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={AboutImg}
            className="rounded-xl"
            alt="Sumit Gupta - Full Stack Developer"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
