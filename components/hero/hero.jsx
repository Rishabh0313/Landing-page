import React from "react";

const Hero = () => {
  return (
    <div className=" z-[100] flex flex-col items-center justify-center mt-28">
      <div className="flex items-center justify-center  ">
        <h4 className=" text-center text-white text-[16px] text-medium">
          {" "}
          Startup 3
        </h4>
      </div>
      <div className="flex items-center justify-center mt-6">
        <p className=" text-4xl text-white font-medium ">Forget About Code</p>
      </div>
      <div className="flex items-center justify-center mt-6 w-[430px]">
        <p className=" flex text-sm text-white font-medium text-center ">
        Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. 
        </p>
      </div>
      <div className='flex items-center justify-center w-40 h-10 mt-14 '>
        <button className=" text-white w-full h-full rounded-full bg-[#2F1893] text-sm "> Create an Account</button>
      </div>
    </div>
  );
};

export default Hero;
