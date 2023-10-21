import React, { useState } from "react";
// import { AiFillHome } from "react-icons/ai";
import { BiSolidSearch, BiSolidUser } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
// import { FaPlus } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import logo from "../assets/leapblog.png";
import styled from "styled-components";
import "../assets/css/complex.css";

const ActiveBefore = styled.span`
  border-bottom-right-radius: 15px;
  box-shadow: 4.5px 4.5px 0 4.5px #021a24;
`;
const ActiveAfter = styled.span`
  border-bottom-left-radius: 15px;
  box-shadow: -5px 5px 0 5px #021a24;
`;

const NavbarMobile = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const navItems = [
    // { icon: <AiFillHome className="icon" />, text: "Home", href: "#home" },
    {
      icon: <BsFillPeopleFill className="icon" />,
      text: "Batch",
      href: "#batch",
    },
    {
      icon: <BiSolidSearch className="icon" />,
      text: "Search",
      href: "#search",
    },
    {
      // icon: (
      //   <>
      //     <ActiveBefore className="active-logo-before" />
      //     <FaPlus className="active-icon" />
      //     <ActiveAfter className="active-logo-after" />
      //   </>
      // ),
      // text: "Post",
      // href: "#post",
      icon: (
        <>
          <ActiveBefore className="active-logo-before" />
          <img src={logo} alt="logo" className="active-logo" />
          <ActiveAfter className="active-logo-after" />
        </>
      ),
      href: "/",
    },
    {
      icon: <IoIosNotifications className="icon" />,
      text: "History",
      href: "#history",
    },
    {
      icon: <BiSolidUser className="icon" />,
      text: "Profile",
      href: "#profile",
    },
  ];

  return (
    <nav className="fixed left-0 bottom-0 w-full z-[99] block lg:hidden">
      <div className="relative bg-gray-700 w-full max-w-[400px] h-[70px] m-auto flex items-center justify-around rounded-t-3xl">
        <ul className="flex list-none">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`list ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleItemClick(index)}
            >
              <a href={item.href} className="a-css">
                {item.icon}
                <span className="text">{item.text}</span>
              </a>
            </li>
          ))}
          <div className="indicator bg-root-yellow-clr absolute bottom-0 w-[70px] h-[6px] rounded-xl transition-all duration-500 ease-in-out"></div>
        </ul>
      </div>

      {/* <div className="flex items-center">
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4 select-none">
          <div
            // onClick={() => setShowUserDetails(true)}
            onClick={toggleUserDetails}
            className="cursor-pointer transition-all duration-500 ease-in-out"
          >
            <img
              src={purna}
              alt="Purna Shrestha"
              className="w-9 h-9 object-cover"
            />
          </div>
        </div>
        {showUserDetails && (
          <LeapblogUserCard user={user} onClose={closeUserDetails} />
        )}
      </div> */}
    </nav>
  );
};

export default NavbarMobile;
