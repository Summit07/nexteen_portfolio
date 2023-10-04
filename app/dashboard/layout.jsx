import ThemeProviders from "../Providers/theme/ThemeProviders";
import ThemeSwitch from "../Providers/theme/ThemeSwitch";
import About from "../../components/About";
import Nav from "../../components/Nav";
import Navbar from "../../components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <ThemeProviders>
        <div className="flex flex-col text-black dark:text-white  space-y-20 ">
          <Nav />
          {/* <Navbar /> */}
          {/* <About /> */}

          <div>{children}</div>
          {/* <ThemeSwitch /> */}
        </div>
      </ThemeProviders>
    </>
  );
};

export default DashboardLayout;
