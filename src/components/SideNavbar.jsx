import React, { useState } from "react";
// import logo from "../assets/images/leapblog_naya_naya_green.svg";
import logo from "/leapblog.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import Profile from "./Profile";
import user from "../assets/purna.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBars,
  faGear,
  faHome,
  faMagnifyingGlass,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navigationItems = [
    { icon: <FontAwesomeIcon icon={faHome} />, label: "Home", to: "/" },
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      label: "Profile",
      to: "/profile",
    },
    {
      icon: <FontAwesomeIcon icon={faBell} />,
      label: "Notifications",
      to: "/notifications",
    },
    {
      icon: <FontAwesomeIcon icon={faHeart} />,
      label: "Saved",
      to: "/saved",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      label: "Settings",
      to: "/settings",
    },
  ];

  // FOr conditional rendering of the logo !IMPORTANT COMMENT
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeLinkClick = () => {
    if (location.pathname === "/") {
      // If you're already on the home page, refresh the page
      window.location.reload();
    } else {
      // If you're on another page, navigate to the home page
      navigate("/");
    }
  };

  return (
    <div
      className={`sideNavbar fixed left-0 top-0 h-full py-2 px-4 w-20 bg-bg-clr z-50 transition-all duration-500 ease-in-out sidebar ${
        isOpen ? "open w-60" : ""
      } `}
    >
      <div className="h-16 flex items-center justify-between relative logo-details">
        <NavLink
          to="/"
          onClick={handleHomeLinkClick}
          className={`${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={logo}
            // src="https://www.lftechnology.com/images/lf-logo.svg"

            alt="leapblog"
            className={`flex items-center justify-center w-32 transition-all duration-500 ease-in-out logo`}
          />
        </NavLink>
        <button
          onClick={toggleSideNavbar}
          className="text-white text-xl outline-none absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer transition-all duration-500 ease-in-out"
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      <ul className="mt-5 h-full nav-list">
        <li className="relative my-2 list-none">
          <FontAwesomeIcon
            icon={faPlus}
            className="absolute top-1/2 left-4 -translate-y-1/2 text-[1rem]"
          />
          <input
            type="button"
            value="Create"
            className={`input text-[1rem] font-medium ${
              isOpen ? "w-full text-white-clr" : "text-bg-clr/10"
            }`}
          />
        </li>
        <li className="relative my-2 list-none">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute top-1/2 left-4 -translate-y-1/2 text-[1rem]"
            // onClick={toggleSideNavbar}
          />
          <input
            type="text"
            // placeholder="Search"
            // value="Search"
            className={`input text-[1rem] font-medium ${
              isOpen ? "w-full pl-14 text-white-clr/80" : "text-bg-clr/10"
            }`}
          />
        </li>
        {navigationItems.map((item, index) => (
          <li key={index} className="relative my-2 list-none">
            <NavLink
              to={item.to}
              className="flex items-center rounded-xl no-underline transition-all duration-200 ease-in-out hover:bg-white-clr hover:text-bg-clr"
            >
              <i className="icon absolute flex items-center justify-center">
                {item.icon}
              </i>
              <span
                className={`text-[1rem] whitespace-nowrap font-medium transition-all duration-400 ease-in-out flex items-center justify-start w-full py-3 pl-14 rounded-md ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                }`}
              >
                {item.label}
              </span>
            </NavLink>
            <span className="tooltip">{item.label}</span>
          </li>
        ))}
        <li
          className={`profile fixed left-0 bottom-1 px-4 pr-0 py-3 overflow-hidden flex items-center justify-between ${
            isOpen ? "w-60" : ""
          } `}
        >
          <div
            className={`profile-details flex items-center flex-nowrap transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            <img
              src={user}
              alt="Profile Picture"
              className="w-12 h-12 rounded-md object-cover mr-3"
            />
            <div>
              <div>Purna Shrestha</div>
              <div>Web Designer</div>
            </div>
          </div>
          <NavLink to="/logout">
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className={`absolute top-1/2 -translate-y-1/2 text-[1rem] transition-all duration-500 ease-in-out ${
                isOpen ? "right-6" : "right-[133px]"
              }`}
            />
          </NavLink>
        </li>
      </ul>
      {/* {location.pathname === "/profile" && <Profile isOpen={isOpen} />}{" "} */}
    </div>
  );
};

export default SideNavbar;
