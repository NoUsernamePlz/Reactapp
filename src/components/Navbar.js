import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Data", link: "/data" },
    { name: "Transaction", link: "/transaction" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <nav className=" w-[100%] h-[12vh] z-40 flex items-center justify-around font-semibold text-gray-800 bg-white shadow-md font-sans sticky top-0 left-0 z-100 py-1 ">
      <div className="flex-grow flex justify-start">
        <div className="flex items-center space-x-4  xs:space-x-0 ">
          <div
            onClick={() => setOpen(!open)}
            className=" absolute right-[18vw] cursor-pointer lg:hidden text-purple-blue z-50 "
          >
            {open ? (
              <AiOutlineClose className="h-6 w-6" />
            ) : (
              <GiHamburgerMenu className="h-6 w-6" />
            )}
          </div>

          <ul
            className={`lg:flex items-center sm:max-lg:py-5 md:pb-0  absolute lg:static list-none text-base opacity-100  left-0 right-0 w-[100vw] lg:w-auto md:pl-3  bg-white xs:max-lg:w-[100%] transition-all duration-500 ease-in ${
              open ? "top-[-10px] left-[-20px] px-[20vw] md:max-lg:[30vw] " : "top-[-490px]"
            } `}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="lg:ml-[9vw]  text-xl md:my-0 my-5   nav"
              >
                <a
                  href={link.link}
                  className=" hover:text-gray-500 duration-500 no-underline text-base "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
