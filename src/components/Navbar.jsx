import { useState, useEffect } from "react";

import { close, logo, menu } from "../assets";

import { navLinks } from "../constants";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  

  return (
    <nav
      className={`w-full flex flex-wrap py-6 justify-between items-center 
      navbar `}
    >
      <a href="">
        <img src={logo} alt="euskills" className="w-[100px] h-[100px]" />
      </a>

      <ul
        className="list-none sm:flex hidden justify-center
       items-center flex-1"
      >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer 
          text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} 
          text-black`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <Button styles="sm:flex hidden justify-end box-shadow " />

      <div
        className="sm:hidden flex flex-1 justify-end
      items-center"
      >
        <img
          src={toggle ? close : menu}
          alt="menu"
          className=" w-[48px] h-[86px] object-contain "
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 
        bg-black-gradient absolute top-20 right-0 mx-4 my-2
        min-w-[140px] rounded-xl flex-col sidebar`}
        >
          <ul
            className="list-none flex flex-col justify-end
            items-center flex-1"
          >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal 
                  cursor-pointer text-[16px] 
                ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} 
                text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <Button styles="justify-center mt-4" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
