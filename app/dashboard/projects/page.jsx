"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../../../public/assets/projects/property.jpg";
import cryptoImg from "../../../public/assets/projects/crypto.jpg";
import netflixImg from "../../../public/assets/projects/netflix.jpg";
import twitchImg from "../../../public/assets/projects/twitch.jpg";
import tradekia from "../../../public/assets/projects/tradekia.png";
import tradekiaapp from "../../../public/assets/projects/tradkiyaapp.png";
import bistro from "../../../public/assets/projects/bristro.png";
import fufi from "../../../public/assets/projects/fufi.png";
import fufiedge from "../../../public/assets/projects/fufiedge.png";
import onenine from "../../../public/assets/projects/oneninelabs.png";
import bigbankexchange from "../../../public/assets/projects/bigbankexchange.png";
import bigbank from "../../../public/assets/projects/bigbankapp.png";
import homeland from "../../../public/assets/projects/homeland.png";
import { useSession } from "next-auth/react";
// import netflixImg from "../../../public/next.svg";

// import twitchImg from "../../../public/vercel.svg";

import ProjectItem from "../../../components/ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-8 md:py-16">
        <p className=" uppercase text-lg    tracking-widest  md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr  from-indigo-500 from-12% via-sky-500 via-33% to-emerald-500 to-70%">
          Projects
        </p>
        <h2 className="py-4 font-semibold text-3xl md:text-5xl bg-clip-text text-transparent dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-white from-black to-neutral-400 dark:to-neutral-900">
          What I&apos;ve Built
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Tradekia Crypto Exchange"
            backgroundImg={tradekia}
            projectUrl="https://tradekia.com"
            tech="MERN Stack"
          />
          <ProjectItem
            title="Bistro UI"
            backgroundImg={bistro}
            projectUrl="https://bistro-cafe-seven.vercel.app"
            tech="ReactJS + Framer Motion"
          />
          <ProjectItem
            title="FutureFi UI"
            backgroundImg={fufi}
            projectUrl="https://fufi.info"
            tech="React JS + AOS"
          />

          <ProjectItem
            title="OneNineLabs UI"
            backgroundImg={onenine}
            projectUrl="https://oneninelabs.com"
            tech="React JS"
          />
          <ProjectItem
            title="FuFi Edge App"
            backgroundImg={fufiedge}
            projectUrl="https://play.google.com/store/apps/details?id=com.futurefinance.fufiedge&hl=en-IN"
            tech="Flutter + NodeJS"
          />
          <ProjectItem
            title="Tradekia Crypto App"
            backgroundImg={tradekiaapp}
            projectUrl="https://play.google.com/store/apps/details?id=com.finance.tradekiya&hl=en-IN"
            tech="Flutter + NodeJS"
          />
          <ProjectItem
            title="BigBank UI"
            backgroundImg={bigbankexchange}
            projectUrl="https://bigbankexchange.com"
            tech="ReactJS + AOS"
          />

          <ProjectItem
            title="BigBank App"
            backgroundImg={bigbank}
            projectUrl="https://play.google.com/store/apps/details?id=www.bigbankxchange.com&hl=en-IN"
            tech="Flutter + NodeJS"
          />

          <ProjectItem
            title="Homeland UI"
            backgroundImg={homeland}
            projectUrl="/dashboard"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
