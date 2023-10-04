const ExprenceLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-row text-black dark:text-white  ">
        <div className="w-1/6 border-r min-h-screen bg-fixed   pt-20">
          Exprence Dashboard
        </div>
        <div className=" flex   pt-20 ">{children}</div>
      </div>
    </>
  );
};

export default ExprenceLayout;
