"use client";
import React, { useEffect, useState } from "react";
import { BsFillSunFill, BsMoonFill, BsCheck } from "react-icons/bs";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeSwitch = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      <div className="flex justify-around">
        <div>Navbar</div>
        <button
          onClick={handleThemeSwitch}
          className="p-4 bg-accent dark:text-white text-black rounded-full w-12 h-12 flex justify-center items-center"
        >
          {theme === "light" ? <BsMoonFill /> : <BsFillSunFill />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
