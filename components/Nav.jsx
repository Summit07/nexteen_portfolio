"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import SGlogo from "../public/SGlogo.jpg";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const pathname = usePathname();
  const activeTab = pathname.split("dashboard/")[1];
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = [
    { href: "/dashboard", label: "Home", id: undefined },
    { href: "/dashboard/about", label: "About", id: "about" },
    { href: "/dashboard/skills", label: "Skills", id: "skills" },
    { href: "/dashboard/projects", label: "Projects", id: "projects" },
    { href: "/dashboard/resume", label: "Resume", id: "resume" },
    { href: "/dashboard/contact", label: "Contact", id: "contact" },
  ];

  return (
    <>
      <div
        className={
          hasShadow
            ? "fixed w-full h-20 shadow-xl z-[10] ease-in-out duration-300 bg-gray-900/75"
            : "fixed w-full h-20 z-[10] border-b-2 border-b-gray-50 shadow-md"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          {/* Logo and Theme Toggle */}
          <div className="flex flex-row justify-between items-center space-x-4">
            <Link href="/dashboard">
              <div className="ml-2 lg:ml-8 shadow-xl dark:shadow-teal-600 h-16 w-16 rounded-full flex justify-center items-center hover:scale-105 transition-transform">
                <Image
                  src={SGlogo}
                  alt="Sumit Gupta Logo"
                  width="125"
                  height="50"
                  className="cursor-pointer rounded-full bg-white"
                />
              </div>
            </Link>
            <button
              onClick={toggleTheme}
              className="p-4 bg-accent rounded-full w-12 h-12 flex justify-center items-center hover:scale-110 transition-transform"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <BsFillSunFill /> : <BsMoonFill />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="flex flex-row space-x-4 justify-between items-center">
            <ul className="hidden md:flex text-cyan-400">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={activeTab === link.id}
                />
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-black dark:text-white hover:scale-110 transition-transform"
              aria-label="Toggle mobile menu"
            >
              <AiOutlineMenu size={25} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
