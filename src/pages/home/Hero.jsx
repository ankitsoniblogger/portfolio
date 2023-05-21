import React from "react";

const Hero = () => {
  return (
    <div className="pt-[140px] pb-[140px] ">
      <div className="flex flex-col justify-center">
        <h1 className="xl:text-[125px] lg:text-[90px] md:text-[70px] text-[48px] leading-tight font-medium text-Primary tracking-tight">
          Digital Designer{" "}
          <span className=" md:border-[6px] border-2 rounded-full lg:px-[22px] md:px-[15px] px-[6px] font-normal lg:text-[70px] md:text-[50px] text-[20px]">
            &{" "}
          </span>{" "}
          <br />
        </h1>
      </div>
      <div className="flex items-center  ">
        <h1 className="xl:text-[125px] lg:text-[90px] md:text-[70px] text-[40px] leading-tight font-medium text-Primary tracking-tight">
          Front-End Developer
        </h1>
      </div>
      <div>
        <div>
          <div className="w-[20%] flex flex-col items-center">
            <h1 className="text-6xl text-Primary font-medium">
              {" "}
              <span className="text-3xl">#</span> 983{" "}
              <span className="text-3xl">K</span>
            </h1>
            <p className="text-Primary font-semibold ">Successful Project</p>
          </div>
          <div className=""> </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
