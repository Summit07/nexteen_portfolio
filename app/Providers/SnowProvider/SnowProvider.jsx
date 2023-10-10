"use client";
import React from "react";
import Snowfall from "react-snowfall";

const SnowProvider = () => {
  return (
    <div>
      {" "}
      <Snowfall
        snowflakeCount={200}
        color="grey"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -90,
        }}
        speed={"140"}
        radius={"12"}
      />
    </div>
  );
};

export default SnowProvider;
