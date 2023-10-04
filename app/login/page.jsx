import React from "react";
import LoginForm from "../../components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "../api/auth/[...nextauth]/route";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");

  return (
    <>
      {!session && (
        <div className="flex justify-center items-center">
          <LoginForm />
        </div>
      )}
    </>
  );
};

export default LoginPage;
