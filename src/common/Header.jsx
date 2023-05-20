import React from "react";
import logo from "../assets/logo.png";

const navItem = ["Home", "About", "Blog", "Contact"];

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="w-40">
          <img src={logo} alt="logo" />
        </div>
        <div className="md:flex hidden">
          <ul className="uppercase underline text-sm flex gap-4 text-Primary font-medium">
            {navItem.map((menu, index) => (
              <li className="cursor-pointer" key={index}>
                {" "}
                {menu}{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="xl:flex hidden">
          <h2 className="text-Primary text-sm">
            DESIGNER / FRONT END DEVELOPER <br /> PORTFOLIO / 2019 — 2023
          </h2>
        </div>
        <div className="lg:flex hidden">
          <h2 className="text-Primary text-sm">
            AVAILABLE FOR FREELANCE <br />
            PROJECTS IN APR 2023
          </h2>
        </div>
        <div className="md:flex flex-col hidden items-end">
          <h2 className="text-right  text-Primary text-sm">
            <span className="underline cursor-pointer hover:text-Accent ">
              hello@ankitsoni.in
            </span>{" "}
            <br /> (+62) 81 115 3568
          </h2>
        </div>
      </div>
      <button className="uppercase ease-in duration-300 float-right md:mt-6 -mt-7 px-7 py-2 text-base tracking-wider bg-Accent  hover:bg-Primary hover:text-Secondary hover:px-6 hover:font-medium hover:text-sm rounded-full border border-Primary">
        Let's Talk
      </button>
    </div>
  );
};

export default Header;
