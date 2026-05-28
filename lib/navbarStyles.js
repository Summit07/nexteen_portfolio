// Reusable navbar utility classes
export const navLinkBase = "ml-10 text-sm uppercase hover:border-b hover:border-cyan-500 dark:text-white";

export const navLinkStyleBase = "p-3 rounded-tr-xl rounded-bl-xl hover:bg-gray-600 dark:hover:bg-cyan-400 transition-all duration-200";

export const navLinkActiveStyle = "bg-gradient-to-tr from-black to-neutral-400 dark:bg-gradient-to-tr dark:from-indigo-500 dark:from-12% dark:via-sky-500 dark:via-33% dark:to-emerald-500 dark:to-70%";

export const getNavLinkClasses = (isActive) => {
  return isActive
    ? `${navLinkStyleBase} ${navLinkActiveStyle}`
    : navLinkStyleBase;
};

export const getNavLinkContainerClasses = (isActive) => {
  return isActive
    ? `${navLinkBase} border-b border-cyan-500`
    : `${navLinkBase} text-cyan-400`;
};

export const mobileMenuStyle = "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-900/50 text-white p-10 ease-in duration-500";

export const mobileMenuOverlay = "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70";

export const socialIconClasses = "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300";
