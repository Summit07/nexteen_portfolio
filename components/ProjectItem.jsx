"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import LoginModal from "./LoginModal";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, disable }) => {
  const { data: session } = useSession();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleMoreInfo = () => {
    if (!session) {
      setShowLoginModal(true);
    } else {
      window.location.href = projectUrl;
    }
  };

  return (
    <>
      <div className="relative flex items-center bg-transparent justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] overflow-hidden">
        <Image
          className="rounded-xl group-hover:opacity-10 transition-opacity duration-300"
          src={backgroundImg}
          alt={title}
          priority={false}
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
          <h3 className="text-2xl text-white tracking-wider">{title}</h3>
          <p className="py-2 text-white text-sm">{tech}</p>
          <button
            onClick={handleMoreInfo}
            disabled={disable}
            className="py-3 px-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            More Info
          </button>
        </div>
      </div>
      
      <LoginModal isOpen={showLoginModal} onOpenChange={setShowLoginModal} />
    </>
  );
};

export default ProjectItem;
