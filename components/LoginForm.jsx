"use client";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let [isloding, setIsLoding] = useState(false);
  console.log(session);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoding(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(res);
      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      router.push("/dashboard");
      setIsLoding(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (session) return router.push("/dashboard");

  return (
    <div className=" w-96 grid mt-44">
      {isloding ? (
        <div class=" flex justify-center items-center">
          <div class="animate-spin rounded-full h-32 w-32 border-b-4 border-black dark:border-gray-100"></div>
        </div>
      ) : (
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-teal-400">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold my-4">Login</h1>
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
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="  Email"
              required
            />
            <input
              className="h-12 rounded-lg from-cyan-500"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="  Password"
              required
            />
            <button className="bg-teal-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg mt-4">
              Login
            </button>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link className="text-sm mt-3 text-right" href={"/register"}>
              Don't have an account? <span className="underline">Register</span>
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
      )}
    </div>
  );
}
