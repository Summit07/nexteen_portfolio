import ThemeProviders from "../Providers/theme/ThemeProviders";
import SnowProvider from "../Providers/SnowProvider/SnowProvider";
import Nav from "../../components/Nav";

export const metadata = {
  title: "Sumit Gupta - Portfolio",
  description:
    "Explore the portfolio of Sumit Gupta - Full Stack Developer specializing in Next.js, React, Node.js, Solidity, and blockchain technologies.",
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
