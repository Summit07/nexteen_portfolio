import React from "react";

export const metadata = {
  title: "Professional Experience - Sumit Gupta",
  description: "Career journey and professional software engineering experience of Sumit Gupta.",
};

const ExperienceLayout = ({ children }) => {
  return (
    <div className="w-full min-h-screen">
      {children}
    </div>
  );
};

export default ExperienceLayout;