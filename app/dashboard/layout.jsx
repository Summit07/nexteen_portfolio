import ThemeProviders from "../Providers/theme/ThemeProviders";
import ThemeSwitch from "../Providers/theme/ThemeSwitch";
import SnowProvider from "../Providers/SnowProvider/SnowProvider";
import About from "../../components/About";
import Nav from "../../components/Nav";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <SnowProvider />
      <ThemeProviders>
        <div className="flex flex-col text-black dark:text-white  space-y-20 ">
          <Nav />

          <div>{children}</div>
          {/* <ThemeSwitch /> */}
        </div>
      </ThemeProviders>
    </>
  );
};

export default DashboardLayout;
