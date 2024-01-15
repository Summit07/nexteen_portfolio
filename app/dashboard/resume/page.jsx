import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PiFilePdfBold } from "react-icons/pi";
import { ImAttachment } from "react-icons/im";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const metadata = {
  title: "Resume | Summiit Gupta",
  description: "Portfolio of Summiit Gupta",
};

const resume = () => {
  return (
    <>
      <Head>
        <title>Sumiit | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/sglogo.jpg" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center uppercase text-lg    tracking-widest  md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-tr  from-indigo-500 from-12% via-sky-500 via-33% to-emerald-500 to-70%">
          Resume
        </h2>
        <div className=" my-4 p-4 w-full flex justify-between items-center rounded-lg bg-gradient-to-tr  from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-70% ">
          <h2 className="text-center  text-3xl  uppercase     tracking-wide  md:text-3xl font-extrabold bg-clip-text text-transparent dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-white from-black to-neutral-400 dark:to-neutral-900">
            Sumit Gupta
          </h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/sumit-gupta-0b4099140/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Summit07"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>

            <Link href="/sumiit.pdf">
              <HoverCard>
                <HoverCardTrigger>
                  <ImAttachment size={20} style={{ marginRight: "1rem" }} />
                </HoverCardTrigger>
                <HoverCardContent>Resume pdf download.</HoverCardContent>
              </HoverCard>
            </Link>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          To make a good position in a reputed company and work enthusiastically
          in team which provides steady career growth along with job
          satisfaction, challenges and give value contribution in the success
          and to build a challenging career with honesty and loyalty by
          translating my experience knowledge ,skills and abilities into value
          for an organization
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Full-Stack Web Developer
            <span className="px-2">|</span> NextJS{" "}
            <span className="px-2">|</span>
            ReactJS <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Solidity
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
          </p>
          <p className="py-2">
            <span className="font-bold">Ubuntu WinSCP Putty</span>
            <span className="px-2">|</span>Deploy projects via Digital Ocean,
            WinSCP & Putty. Mongodb | MySQL
          </p>
          <p className="py-2">
            <span className="font-bold">Vercel & AWS</span>
            <span className="px-2">|</span> Vercel & Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              BIGBANK EXCHANGE, CRYPTOCURRENCY TRADING PLATEFORM{" "}
            </span>
            <span className="px-2">|</span>Lucknow, UP
          </p>
          <p className="py-1 italic">
            Coding Web Tech ,Fulltime Work (01/July/2023 - Present)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Creating robust backend for crypto trading plateform in nodejs for
              the integration with flutter App.
            </li>
            <li>
              Making Buy and Sell login and maintaning user wallets updated over
              entier application .
            </li>
            <li>
              Creating P2P trading for the users for individual transfer of
              crypto coins with each other.
            </li>
            <li>
              Creating Bot for Price manipulation and Volume manipulation which
              look coins trading on the plateform .
            </li>
            <li>
              Tradeing View Chart Integration and making the Trading Plateform
              chat effective with each coin.
            </li>
            <li>
              Integration of other exchange like CoinDCX for liquidity
              maintainance , buy and sell order execution.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">
              FUTURE FINANCE , PRODUCT BASED COMPANY
            </span>
            <span className="px-2">|</span>Lucknow, UP
          </p>
          <p className="py-1 italic">
            Onenine Labs Pvt Ltd, Fulltime Work (01/July/2021 - 30/June/2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Parent Comapany OneNineLabs Pvt Ltd have lots of project related
              to blockchain , cryptocurrency and other trading plateform for
              crypto exchange.
            </li>
            <li>
              They have projects like FutureFi, Tradekia Exchange , Cryptoxin ,
              FuFiEdge , TradeBro , NFTials ,FuFi metavers etc.
            </li>
            <li>
              FutureFi related to the Future Finance Ecosystem of the whole
              Finance with effective , cashfree and decentralised ecosystem.
            </li>
            <li>
              Tradekia Exchange related to trading plateform for all the
              cryptocurrency and P2P trading. Trading View Chart and other
              Exchange integration.
            </li>
            <li>
              Cryptoxin is the decentralize social media plateform for updated
              cryptocurreny new and earning plateform for CIN coins.
            </li>
            <li>
              FuFiEdge is the plateform for FuFi coin earning. Becoming a SID
              member via burning the FuFi coins and become a FuFi coin holder.
            </li>
            <li>
              Tradebro is crypto price manipulation and volume making bot for
              the new upcoming coin. Real time market manipulater.
            </li>
            <li>
              NFTial and FuFi metavers are the ongoing future program of the
              Future Finance Ecosystem for bringing whole world together.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">O LEVEL & CCC</span>
            <span className="px-2">|</span>Jaunpur , UP
          </p>
          <p className="py-1 italic">
            New Shakti Certification (Dec/2020 – August/2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Completing my O-level and CCC from here to learn some new thing
              during the lockdown period and enhance my overall skill.
            </li>
            <li>
              During Luckdown it is a great way to utilize time and upskilling
              my knowledge.
            </li>
            <li>
              After Lockdowm remove I also join the FutureFi company along with
              my learning of O-level and CCC.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">THERE APP, OPENSOURCE PROJECT</span>
            <span className="px-2">|</span>Github
          </p>
          <p className="py-1 italic">
            Freelance / Learning (Dec/2019 – Jan/2021)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              After Completing the Btech I preparing for the Government
              competitive examination along with I also contributing on
              opensoure project for the learning purpose.
            </li>
            <li>
              It's a great experiece for me to understand the working
              arcitecture of the website.
            </li>
            <li>
              How website work under the hood and what are the procedure take
              place to run a website I learn from this open source project.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
