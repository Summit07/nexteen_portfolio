"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { signOut, signIn } from "next-auth/react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import ContactImg from "../../../public/assets/contact.jpg";
import Offers from "../../../components/Offers";
import cwt3y from "../../../public/assets/office/CWTimage.jpg";
import cwtpvr from "../../../public/assets/office/pvrcwt.jpg";
import holifufi from "../../../public/assets/office/holifufi.jpg";
import fufid from "../../../public/assets/office/idCard.jpg";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Contact = () => {
  let { data: session } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [subject, setsubject] = useState("");
  const [tmessage, settmessage] = useState("");
  const [error, setError] = useState("");
  let router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, phone);

    try {
      const res = await fetch("/api/offers", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          tmessage,
        }),
      })
        .then((response) => response.json())
        .then((result) => console.log(result));

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      // router.push("/dashboard/contact");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <div className="flex justify-between items-center mb-2">
          <div>
            {" "}
            <div className="pl-0.5 uppercase text-lg tracking-widest  md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-tr  from-indigo-500 from-12% via-sky-500 via-33% to-emerald-500 to-70%">
              Contact
            </div>
            <h2 className="py-4 font-semibold text-3xl md:text-5xl bg-clip-text text-transparent dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-white from-black to-neutral-400 dark:to-neutral-900  ">
              Get In Touch
            </h2>
          </div>
          <div className="flex justify-end">
            {session ? (
              <button
                onClick={() => signOut()}
                className=" text-cyan-400 dark:text-white rounded-lg  font-semibold px-4 py-2 mt-4 mr-2 mb-4 bg-gradient-to-tr  from-black to-neutral-400  dark:bg-gradient-to-tr  dark:from-indigo-500 dark:from-12% dark:via-sky-500 dark:via-33% dark:to-emerald-500 dark:to-70% "
              >
                Log Out
              </button>
            ) : (
              <AlertDialog>
                <AlertDialogTrigger className="text-cyan-400 dark:text-white rounded-lg  font-semibold px-6 py-2 mt-4 mr-2 mb-4 bg-gradient-to-tr  from-black to-neutral-400  dark:bg-gradient-to-tr  dark:from-indigo-500 dark:from-12% dark:via-sky-500 dark:via-33% dark:to-emerald-500 dark:to-70% ">
                  Log In
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Make sure you Logged In before contacting me?
                    </AlertDialogTitle>

                    <div>
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3 mt-6"
                      >
                        <input
                          className="h-12 rounded-lg from-cyan-500"
                          onChange={(e) => setEmail(e.target.value)}
                          type="text"
                          placeholder="  Email"
                        />
                        <input
                          className="h-12 rounded-lg from-cyan-500"
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          placeholder="  Password"
                        />
                        <button className="bg-teal-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg h-12">
                          Login
                        </button>
                        {error && (
                          <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 ">
                            {error}
                          </div>
                        )}

                        <Link
                          className="text-sm mt-3 text-right text-gray-700 mr-4 dark:text-white"
                          href={"/register"}
                        >
                          Don't have an account?{" "}
                          <span className="underline text-cyan-400 ">
                            Register
                          </span>
                        </Link>
                      </form>
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        </div>
        <div className=" mb-16">
          <Offers />
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-3 tracking-wide  text-gray-800 text-3xl font-semibold dark:text-white">
                  Sumiit Gupta
                </h2>
                <p>Full-Stack Developer</p>
                <p>summitgupta07@gmail.com</p>
                <p>7355708603</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/sumit-gupta-0b4099140/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400  dark:shadow-orange-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Summit07"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400  dark:text-gray-50 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <Link href="/SumitRelieving.pdf">
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-blue-500  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <HoverCard>
                        <HoverCardTrigger>
                          <ImAttachment size={20} />
                        </HoverCardTrigger>
                        <HoverCardContent>
                          Resume pdf download.
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  </Link>
                  <Link href="/dashboard/resume">
                    <div>
                      <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-green-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    onChange={(e) => setsubject(e.target.value)}
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    onChange={(e) => settmessage(e.target.value)}
                    name="tmessage"
                    required
                  ></textarea>
                </div>
                {/* <button
                  className="w-full p-4 text-gray-100 mt-4 bg-teal-600 rounded-lg "
                  disabled={!session}
                >
                  Send Message
                </button> */}
                {!session ? (
                  <AlertDialog>
                    <AlertDialogTrigger className="w-full p-4 text-gray-100 mt-4 bg-teal-600 rounded-lg">
                      Send Message
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Make sure you Logged In before contacting me?
                        </AlertDialogTitle>

                        <div>
                          <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-3 mt-6"
                          >
                            <input
                              className="h-12 rounded-lg from-cyan-500"
                              onChange={(e) => setEmail(e.target.value)}
                              type="text"
                              placeholder="  Email"
                            />
                            <input
                              className="h-12 rounded-lg from-cyan-500"
                              onChange={(e) => setPassword(e.target.value)}
                              type="password"
                              placeholder="  Password"
                            />
                            <button className="bg-teal-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg h-12">
                              Login
                            </button>
                            {error && (
                              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 ">
                                {error}
                              </div>
                            )}

                            <Link
                              className="text-sm mt-3 text-right text-gray-700 mr-4 dark:text-white"
                              href={"/register"}
                            >
                              Don't have an account?{" "}
                              <span className="underline text-cyan-400 ">
                                Register
                              </span>
                            </Link>
                          </form>
                        </div>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                ) : (
                  <button className="w-full p-4 text-gray-100   rounded-lg hover:bg-cyan-400  px-4 py-4 mt-4 mr-2 mb-4 bg-gradient-to-tr  from-indigo-500 from-12% via-sky-500 via-33% to-emerald-500 to-70% ">
                    Send Message
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 mt-8">
          <p className=" py-4 font-semibold text-lg  md:text-2xl bg-clip-text text-transparent dark:bg-gradient-to-tr bg-gradient-to-tr dark:from-white from-black to-neutral-400 dark:to-neutral-900">
            Memories
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group ">
              <Image className="rounded-xl " src={cwt3y} alt="/" />
            </div>
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group ">
              <Image className="rounded-xl " src={cwtpvr} alt="/" />
            </div>
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group ">
              <Image className="rounded-xl " src={fufid} alt="/" />
            </div>
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group ">
              <Image className="rounded-xl " src={holifufi} alt="/" />
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center py-12">
          <Link href="/dashboard">
            <div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </div>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
