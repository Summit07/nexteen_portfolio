import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "../api/auth/[...nextauth]/route";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  // text-[#5651e5]
  // if (!session) redirect("/login");

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto   p-2 flex justify-center items-center">
        <div className="mt-4">
          <p className="uppercase  tracking-widest text-gray-600  dark:text-gray-200 text-sm lg:text-2xl mb-2">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700 lg:text-7xl text-3xl dark:text-white ">
            Hi, I&#39;m{" "}
            <span className=" text-cyan-400 bg-transparent"> Sumiit Gupta</span>
          </h1>
          <h1 className="py-2 text-gray-700 text-3xl md:text-6xl dark:text-white ">
            A Full-Stack Web & Solidity Blockchain Developer
          </h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto text-sm md:text-xl dark:text-gray-200 ">
            I’m building responsive Full-Stack web applications with back-end,
            technologies like MERN with NEXTJS.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/sumit-gupta-0b4099140/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-600 dark:shadow-orange-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Summit07"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-600 dark:text-gray-50  p-6 cursor-pointer hover:scale-110 ease-in-out duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-600 dark:shadow-blue-500  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-600 dark:shadow-green-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
