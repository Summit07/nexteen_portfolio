"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function RegisterForm() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      // const resUserExists = await fetch("api/userExists", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ email }),
      // });

      // const { user } = await resUserExists.json();

      // if (user) {
      //   setError("User already exists.");
      //   return;
      // }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/login");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  if (session) return router.push("/dashboard");

  return (
    <div className="w-96 grid mt-44">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-teal-400">
        <div className="flex justify-between items-center">
          {" "}
          <h1 className="text-xl font-bold my-4">Register</h1>
          <Link href={"/dashboard"}>
            {" "}
            <button className="bg-teal-600 text-white font-bold cursor-pointer px-4 py-1 rounded-lg h-10">
              Home
            </button>{" "}
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="h-12 rounded-lg from-cyan-500"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="  Full Name"
          />
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
          <button className="bg-teal-600 text-white font-bold cursor-pointer px-6 py-2  rounded-lg mt-4">
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/login"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
        {/* <div>
          <h1>Sign into Github below</h1>
          <button
            onClick={() => signIn("github")}
            className="bg-black text-white w-full"
          >
            Sign In
          </button>
          <h1>Sign into Google below</h1>
          <button
            onClick={() => signIn("google")}
            className="bg-red-500 text-white w-full"
          >
            Sign In
          </button>
        </div> */}
      </div>
    </div>
  );
}
