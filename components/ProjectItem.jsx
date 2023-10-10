"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { signOut, signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

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

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, disable }) => {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
    <div className="relative flex items-center bg-transparent justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10 bg-current"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center ">{tech}</p>
        <div className="flex justify-center items-center">
          {!session ? (
            <AlertDialog>
              <AlertDialogTrigger
                className="text-center py-3 px-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"
                disabled={disable}
              >
                More Info
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Make sure you Logged In before getting more info?
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
            <Link href={projectUrl}>
              <p className="text-center py-3 px-2 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                More Info
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
