"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import SGlogo from "../public/SGlogo.jpg";
import { mobileMenuStyle, mobileMenuOverlay, socialIconClasses } from "@/lib/navbarStyles";

const MobileMenu = ({ isOpen, onClose }) => {
  const navItems = [
    { href: "/dashboard", label: "Home" },
    { href: "/dashboard/about", label: "About" },
    { href: "/dashboard/skills", label: "Skills" },
    { href: "/dashboard/projects", label: "Projects" },
    { href: "/dashboard/resume", label: "Resume" },
    { href: "/dashboard/contact", label: "Contact" },
  ];

  return (
    <div className={isOpen ? mobileMenuOverlay : ""}>
      <div
        className={
          isOpen
            ? mobileMenuStyle
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-between">
          <Link href="/dashboard">
            <Image
              src={SGlogo}
              width="45"
              height="45"
              alt="Sumit Gupta Logo"
              className="cursor-pointer rounded-full bg-white"
            />
          </Link>
          <button
            onClick={onClose}
            className="rounded-full shadow-gray-400 p-3 cursor-pointer hover:bg-gray-700 transition-colors"
            aria-label="Close menu"
          >
            <AiOutlineClose />
          </button>
        </div>

        <div className="py-4 flex flex-col">
          <ul className="uppercase">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <li
                  onClick={onClose}
                  className="py-4 text-sm hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>

          <div className="pt-40">
            <p className="uppercase tracking-widest text-[#5651e5] font-semibold">
              Let's Connect
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <a
                href="https://www.linkedin.com/in/sumit-gupta-0b4099140/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <div className={socialIconClasses}>
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href="https://github.com/Summit07"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <div className={socialIconClasses}>
                  <FaGithub />
                </div>
              </a>
              <Link href="/dashboard/contact">
                <div
                  onClick={onClose}
                  className={socialIconClasses}
                  role="button"
                  tabIndex={0}
                  aria-label="Contact"
                >
                  <AiOutlineMail />
                </div>
              </Link>
              <Link href="/dashboard/resume">
                <div
                  onClick={onClose}
                  className={socialIconClasses}
                  role="button"
                  tabIndex={0}
                  aria-label="Resume"
                >
                  <BsFillPersonLinesFill />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
