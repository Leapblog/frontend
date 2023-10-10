import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import logoMobile from "../assets/leapblog.png";
import logoDesktop from "../assets/leapblog_full.png";
import purna from "../assets/purna.webp";
import SideNav from "./SideNav";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(window.innerWidth > 768);

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleSearchButtonClick = () => {
    // Handle search button click here
  };

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  return (
    <div className="flex flex-row h-14 px-4 md:px-5 justify-between items-center sticky top-0 z-50 shadow-md backdrop-blur-md">
      <div className="flex h-5 items-center">
        <div
          onClick={mobileMenuToggle}
          className="flex h-10 w-10 justify-center items-center rounded-full md:hidden md:mr-6 cursor-pointer hover:bg-gray-700 transition-all duration-500 ease-in-out"
        >
          {mobileMenu ? (
            <CgClose
              className="text-white-clr text-xl"
              onClick={toggleSideNav}
            />
          ) : (
            <RxHamburgerMenu
              className="text-white-clr text-xl"
              onClick={toggleSideNav}
            />
          )}
        </div>
        <a href="/" className="flex h-5 items-center select-none">
          <img
            src={logoDesktop}
            alt="Logo"
            className="w-48 h-auto hidden md:block"
          />
          <img
            src={logoMobile}
            alt="Mobile Logo"
            className="w-10 h-10 md:hidden"
          />
        </a>
      </div>

      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-white-clr/[0.5] rounded-l-3xl group-focus-within:border-blue-clr">
          <input
            type="text"
            placeholder="Search"
            className="w-44 px-5 bg-transparent outline-none text-white-clr md:pl-0 md:w-64 lg:w-[500px]"
          />
        </div>
        <button
          onClick={handleSearchButtonClick}
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-white-clr/[0.5] rounded-r-3xl bg-gray-700"
          aria-label="Search"
        >
          <IoIosSearch className="text-white-clr text-xl" />
        </button>
      </div>

      <div className="flex items-center">
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4 select-none">
          <div className="cursor-pointer transition-all duration-500 ease-in-out">
            <img
              src={purna}
              alt="Purna Shrestha"
              className="w-9 h-9 object-cover"
            />
          </div>
        </div>
      </div>
      <SideNav isOpen={sideNavOpen} onClose={toggleSideNav} />
    </div>
  );
};

export default Header;
