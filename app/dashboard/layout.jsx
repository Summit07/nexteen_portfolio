import ThemeProviders from "../Providers/theme/ThemeProviders";
import SnowProvider from "../Providers/SnowProvider/SnowProvider";
import Nav from "../../components/Nav";

export const metadata = {
  title: "Sumit Gupta - Full-Stack & Generative AI Engineer | Portfolio",
  description:
    "Explore the portfolio of Sumit Gupta - Full-Stack & Generative AI Engineer specializing in distributed systems, multi-agent workflows, RAG, Next.js, Node.js, and Python/FastAPI.",
};

const DashboardLayout = ({ children }) => {
  return (
    <>
      <SnowProvider />
      <ThemeProviders>
        <div className="flex flex-col text-black dark:text-white space-y-20">
          <Nav />
          <div>{children}</div>
        </div>
      </ThemeProviders>
    </>
  );
};

export default DashboardLayout;
