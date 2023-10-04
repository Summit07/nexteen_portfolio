import React from "react";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

const Home = async () => {
  // let [session, setSession] = useState(true);
  // let router = useRouter();
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/login");
  if (session) return redirect("/dashboard");

  return null;
  // <main>Main Root Home Page</main>;
};
export default Home;
