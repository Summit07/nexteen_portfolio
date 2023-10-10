import Image from "next/image";
import React from "react";

import cwtoffer from "../../../public/assets/office/cwtoffer.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[100vh] relative">
        <div className="absolute bottom-0 left-0 w-full h-[39vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cwtoffer}
          alt="/"
        />
        <div className="absolute top-[80%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-4">Coding Web Tech</h2>
          <p>
            I worked here on Bigbank Trading exchange. Creating the entire
            applicaton from scratch.
          </p>
          <p>
            All the feature related to trading exchange I integrated maximum off
            them.
          </p>
          <h3>
            {" "}
            ExpressJS / NodeJS / Prisma / Mongodb / Socket.io / TradingView
            Chart / NextJS etc are tools I used here
          </h3>
          <Link href="/dashboard/contact">
            <button className=" text-cyan-400 dark:text-white rounded-lg  font-semibold px-4 py-2 mt-4 mr-2 mb-4 bg-gradient-to-tr  from-black to-neutral-400  dark:bg-gradient-to-tr  dark:from-indigo-500 dark:from-12% dark:via-sky-500 dark:via-33% dark:to-emerald-500 dark:to-70% ">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default crypto;
