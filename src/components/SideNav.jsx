import React, { useState } from "react";
//  import { CgClose } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill, BsArrowReturnRight } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { MdReport } from "react-icons/md";
import { BiSolidHelpCircle, BiSolidSend } from "react-icons/bi";

const SideNav = ({ isOpen, onClose }) => {
  const [activeList, setActiveList] = useState("Home");
  const [activeSubItem, setActiveSubItem] = useState("LSPs 2023");

  const navigationItems = [
    { label: "Home", link: "/", icon: <AiFillHome /> },
    {
      label: "Batch",
      link: "/batch",
      icon: <BsFillPeopleFill />,
      subItems: [
        { label: "LSPs 2022", link: "/batch/lsp-2022", icon: <HiUserGroup /> },
        { label: "LSPs 2023", link: "/batch/lsp-2023", icon: <HiUserGroup /> },
        { label: "LSPs 2024", link: "/batch/lsp-2024", icon: <HiUserGroup /> },
      ],
    },
    { label: "Settings", link: "/settings", icon: <IoMdSettings /> },
    { label: "Report", link: "/report", icon: <MdReport /> },
    { label: "Help", link: "/help", icon: <BiSolidHelpCircle /> },
    { label: "Send Feedback", link: "/send-feedback", icon: <BiSolidSend /> },
  ];

  const handleItemClick = (label) => {
    setActiveList(label);

    //  Check if the label belongs to a sub-item of "Batch"
    if (label.startsWith("LSPs")) {
      setActiveSubItem(label);
    } else {
      setActiveSubItem("");
    }
  };

  const copyrightInfo = {
    year: new Date().getFullYear(),
    title: "Leapblog",
    builder: "LeapBloggers",
  };

  return (
    <div
      className={`fixed top-[56px] left-0 w-auto lg:w-1/6 h-[100vh] bg-transparent backdrop-blur-sm text-white transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-40`}
    >
      {/* Close button */}
      {/* <div className="absolute top-4 right-4 cursor-pointer">
        <CgClose className="text-white text-xl" onClick={onClose} />
      </div> */}
      <ul className="mt-5 text-sm md:text-lg 2xl:text-2xl px-2">
        {navigationItems.map((item, index) => (
          <li
            key={index}
            className={`mb-4 p-2 2xl:py-3 px-5 ${
              item.label === activeList
                ? "bg-gray-700 text-root-yellow-clr rounded-lg"
                : ""
            }`}
          >
            <a
              href={item.link}
              className="flex items-center"
              onClick={() => handleItemClick(item.label)}
            >
              {item.icon && <div className="mr-2">{item.icon}</div>}
              {item.label}
            </a>
            {item.subItems && (
              <ul className="ml-4 relative">
                {item.subItems.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className={`mb-2 py-1 px-5 ${
                      subItem.label === activeSubItem
                        ? "text-root-yellow-clr rounded-lg"
                        : ""
                    }`}
                  >
                    <a
                      href={subItem.link}
                      className={`flex items-center ${
                        subItem.label === activeSubItem
                          ? "text-root-yellow-clr"
                          : ""
                      }`}
                      onClick={() => handleItemClick(subItem.label)}
                    >
                      {subItem.icon && (
                        <div className="mr-2">{subItem.icon}</div>
                      )}
                      {subItem.label}
                    </a>
                    {subItem.label === activeSubItem && (
                      <BsArrowReturnRight className="absolute top-1/2 left-[-10px] transform -translate-y-1/2 text-root-yellow-clr text-lg" />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <hr />

      <div className="mt-5 text-center p-2 text-sm lg:text-lg 2xl:text-xl">
        <p className="">
          &copy; {copyrightInfo.title} {copyrightInfo.year}
          <br /> Build with &#9829; by {copyrightInfo.builder}
        </p>
      </div>
    </div>
  );
};

export default SideNav;
