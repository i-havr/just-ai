import React from "react";
import Image from "next/image";

import logo from "@/public/images/robot.png";

import { NavBar } from "../NavBar";

export const Header = () => {
  return (
    <header className="bg-gray-300 w-full py-3 shadow-xxs">
      <div className="container flex justify-between">
        <div className="flex gap-1 items-center">
          <div className="bg-primary-200 rounded-normal p-2">
            <Image
              src={logo}
              alt="Just AI logo"
              width={36}
              className="mx-auto"
            />
          </div>
          <span className="uppercase font-bold text-xl text-primary-200 leading-none">
            Just
            <br />
            AI
          </span>
        </div>

        <NavBar />
      </div>{" "}
    </header>
  );
};
