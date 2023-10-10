import Image from "next/image";
import React from "react";
import Html from "../../../public/assets/skills/html.png";
import Css from "../../../public/assets/skills/css.png";
import Javascript from "../../../public/assets/skills/javascript.png";
import ReactImg from "../../../public/assets/skills/react.png";
import Tailwind from "../../../public/assets/skills/tailwind.png";
import Github from "../../../public/assets/skills/github1.png";
import NextJS from "../../../public/assets/skills/nextjs.png";
import Mongo from "../../../public/assets/skills/mongo.png";
import express from "../../../public/assets/skills/expressjs-icon.svg";
import Nodejs from "../../../public/assets/skills/node.png";
import solidity from "../../../public/assets/skills/solidity-icon.png";
import framer from "../../../public/assets/skills/framer-motion.svg";
import reactQuery from "../../../public/assets/skills/react-query-icon.png";
import swagger from "../../../public/assets/skills/swagger.svg";

import vercel from "../../../public/assets/skills/logo-vercel.svg";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 mt-20 md:mt-40 pb-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-lg   tracking-widest  md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr  from-indigo-500 from-12% via-sky-500 via-33% to-emerald-500 to-70%">
          Skills
        </p>
        <h2 className="py-4 font-semibold text-3xl  md:text-5xl bg-clip-text text-transparent dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-white from-black to-neutral-400 dark:to-neutral-900">
          What I Can Do
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="p-6 shadow-xl bg-gray-900/30 dark:bg-gray-200/20  dark:shadow-orange-700 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-gray-900/30 dark:bg-gray-200/20  dark:shadow-blue-700 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-gray-900/30 dark:bg-gray-200/20  dark:shadow-yellow-700 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-gray-900/30 dark:bg-gray-200/20  dark:shadow-teal-600 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-gray-900/30 dark:bg-gray-200/20 dark:shadow-green-700  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mongo} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Mongodb</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-gray-900/30 dark:bg-gray-200/20 dark:shadow-white  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center  mt-2 md:mt-6">
              <div className="m-auto">
                <Image src={express} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Express JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-gray-900/30 dark:bg-gray-200/20  dark:shadow-cyan-500 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl bg-gray-900/30 dark:bg-gray-200/20 dark:shadow-green-700  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Nodejs} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl bg-gray-900/30 dark:bg-gray-200/20  dark:shadow-blue-700 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-gray-900/30 dark:bg-gray-200/20  dark:shadow-red-700 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={reactQuery} width="164px" height="164px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React Query</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-gray-900/30 dark:bg-gray-200/20  dark:shadow-pink-500 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={framer} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Framer Motion</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-gray-900/30 dark:bg-gray-200/20 dark:shadow-blue-600  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={solidity} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Solidity</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl bg-gray-900/30 dark:bg-gray-200/20  dark:shadow-white rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-gray-900/30 dark:bg-gray-200/20 dark:shadow-green-700  rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={swagger} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Swagger Api</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-gray-900/30 dark:bg-gray-200/20 dark:shadow-white   rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={vercel} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Vercel</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl bg-gray-900/30 dark:bg-gray-200/20  dark:shadow-cyan-500 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React Native</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
