import React from "react";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

const Home = async () => {
  // const session = await getServerSession(authOptions);

  // if (!session) return redirect("/login");
  // if (session) return redirect("/dashboard");

  return redirect("/dashboard");
  // <main>Main Root Home Page</main>;
};
export default Home;
