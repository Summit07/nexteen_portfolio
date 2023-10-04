"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function LoginForm() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let [isloding, setIsLoding] = useState(false);

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
        "loding...."
      ) : (
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-teal-400">
          <h1 className="text-xl font-bold my-4">Login</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
        </div>
      )}
    </div>
  );
}
