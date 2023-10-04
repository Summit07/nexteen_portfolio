"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter, useParams, usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { useRouter } from 'next/router';
// import # from "../public/assets/sgLog.jpg";
// import # from "../public/sglogo.jpg";
import { BsFillSunFill, BsMoonFill, BsCheck } from "react-icons/bs";
import { useTheme } from "next-themes";

const Navbar = () => {
  const param = usePathname();
  let active = param.split("dashboard/")[1];

  const { theme, setTheme } = useTheme();

  const handleThemeSwitch = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      // style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[10] ease-in-out duration-300 bg-gray-900/95"
          : "fixed w-full h-20 z-[10]  border-b-2 border-b-gray-50 shadow-md "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className="flex flex-row justify-between items-center space-x-4">
          <Link href="/dashboard">
            <div className="ml-2 lg:ml-8   text-teal-400 bg-gray-700 dark:bg-white h-16 w-16 rounded-full flex justify-center items-center text-3xl ">
              S G
              {/* <Image
              src={#}
              alt="/"
              width="125"
              height="50"
              className="cursor-pointer rounded-full"
            /> */}
            </div>
          </Link>
          <button
            onClick={handleThemeSwitch}
            className="p-4 bg-accent  rounded-full w-12 h-12 flex justify-center items-center"
          >
            {theme === "light" ? <BsFillSunFill /> : <BsMoonFill />}
          </button>
        </div>

        <div className="flex flex-row space-x-4 justify-between items-center ">
          <ul
            // style={{ color: `${linkColor}` }}
            className="hidden md:flex text-cyan-400"
          >
            <li
              className={
                "ml-10 text-sm uppercase hover:border-b hover:border-cyan-500 dark:text-white   " +
                (active == undefined &&
                  " border-b border-cyan-500 text-cyan-400")
              }
            >
              <Link href="/dashboard">Home</Link>
            </li>
            <li
              className={
                "ml-10 text-sm uppercase hover:border-b hover:border-cyan-500 dark:text-white text-cyan-400" +
                (active == "about" && " border-b border-cyan-500")
              }
            >
              <Link href="/dashboard/about">About</Link>
            </li>
            <li
              className={
                "ml-10 text-sm uppercase hover:border-b hover:border-cyan-500 dark:text-white  text-cyan-400" +
                (active == "skills" && " border-b border-cyan-500")
              }
            >
              <Link href="/dashboard/skills">Skills</Link>
            </li>
            <li
              className={
                "ml-10 text-sm uppercase hover:border-b hover:border-cyan-500 dark:text-white  text-cyan-400" +
                (active == "projects" && " border-b border-cyan-500")
              }
            >
              <Link href="/dashboard/projects">Projects</Link>
            </li>
            <li
              className={
                "ml-10 text-sm uppercase hover:border-b hover:border-cyan-500 dark:text-white  text-cyan-400" +
                (active == "resume" && " border-b border-cyan-500")
              }
            >
              <Link href="/dashboard/resume">Resume</Link>
            </li>
            <li
              className={
                "ml-10 text-sm uppercase hover:border-b hover:border-cyan-500 dark:text-white  text-cyan-400" +
                (active == "contact" && " border-b border-cyan-500")
              }
            >
              <Link href="/dashboard/contact">Contact</Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <div>
                  {/* <Image src={""} width="87" height="35" alt="/" /> */}
                </div>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(true)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/resumes">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/clint-briley-50056920a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/fireclint"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
