import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../../../public/assets/about.jpg";

export const metadata = {
  title: "About | Summiit Gupta",
  description: "Portfolio of Summiit Gupta",
};

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-lg  tracking-widest  md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr  from-indigo-500 from-12% via-sky-500 via-33% to-emerald-500 to-70%">
            About
          </p>
          <h2 className="py-4 font-semibold text-3xl md:text-5xl  bg-clip-text text-transparent dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-white from-black to-neutral-400 dark:to-neutral-900">
            Who I Am
          </h2>
          <p className="py-2 text-gray-600 dark:text-white">
            / / I am an allround developer for Frontend, Backend and Solidity
            Blockchain.
          </p>
          <p className="py-2 text-gray-600 dark:text-white">
            I have always had a knack for technology and working with computers.
            In 2019 I started working with HTML, CSS and Javascript. What I
            thought was just a few small edits on open source code There App
            turned into a love for programming.
          </p>
          <p className="py-2 text-gray-600 dark:text-white">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I am learning solidity and was even more enthused
            with making websites interactive. I am now spending my time building
            projects with Next JS and handling new technologies like Solidity
            and Blockchain.
          </p>
          <Link href="/dashboard/projects">
            <p className="py-2 text-blue-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
