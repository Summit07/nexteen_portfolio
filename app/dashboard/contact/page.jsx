"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { signOut, signIn } from "next-auth/react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import ContactImg from "../../../public/assets/contact.jpg";
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      router.push("/dashboard/contact");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <div className="flex justify-between items-center">
          <div>
            {" "}
            <div className="uppercase text-xl font-semibold  text-gray-600 tracking-widest dark:text-cyan-400 md:text-3xl">
              Contact
            </div>
            <h2 className="py-4 text-gray-800 text-5xl dark:text-white">
              Get In Touch
            </h2>
          </div>
          <div className="flex justify-end">
            {session ? (
              <button
                onClick={() => signOut()}
                className="bg-teal-500 text-white rounded-lg hover:bg-teal-700 font-semibold px-4 py-2 mt-4 mr-2 mb-4"
              >
                Log Out
              </button>
            ) : (
              // <button
              //   onClick={() => router.push("/login")}
              //   className="bg-teal-500 text-white rounded-lg hover:bg-teal-700 font-semibold px-4 py-2 mt-4 mr-2 mb-4"
              // >
              //   Log In
              // </button>
              <AlertDialog>
                <AlertDialogTrigger className="bg-teal-500 text-white rounded-lg hover:bg-teal-700 font-semibold px-4 py-2 mt-4 mr-2 mb-4">
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

                  <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-blue-500  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <Link href="/resume">
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
              <form method="POST">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 bg-teal-600 rounded-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
