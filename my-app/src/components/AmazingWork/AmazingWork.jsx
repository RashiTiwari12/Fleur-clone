import { useState, useEffect } from "react";

const AmazingWork = () => {
  return (
    <>
      {" "}
      <div
        className=" p-12 bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('')",
        }}
      >
        <div className="inset-0 flex flex-col items-center justify-center p-6">
          <p className="text-3xl md:text-2xl lg:text-3xl text-center max-w-3xl mb-8 text-white"></p>
          <p className="text-xl  text-center max-w-3xl  mt-9"></p>
        </div>
      </div>
    </>
  );
};

export default AmazingWork;
