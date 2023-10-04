import React from "react";

import RegisterForm from "../../components/RegisterForm";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Register() {
  const sessions = await getServerSession(authOptions);
  if (sessions) redirect("/dashboard");
  return (
    <>
      <div className="flex justify-center items-center">
        <RegisterForm />
      </div>
    </>
  );
}

// export default Register;
