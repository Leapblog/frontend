import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPen,
  faEllipsisVertical,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import { faGlobe } from "@fortawesome/free-regular-svg-icons";
import purna from "../assets/purna.webp";

const userDetails = {
  name: "Purna Shrestha",
  position: "Software Developer",
  linkedinLink: "https://www.linkedin.com/in/purna-shrestha-0310ps/",
  portfolioLink: "https://purnashrestha.com.np",
  totalBlogs: 50,
  likedBlogs: 25,
  repostedBlogs: 5,
  image: purna,
};

const Profile = ({ isOpen }) => {
  const [activeSection, setActiveSection] = useState("total-blogs");
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const handleProfileClick = () => {
    setShowProfilePopup(!showProfilePopup);
  };

  const handleClosePopup = () => {
    setShowProfilePopup(false);
  };

  return (
    // <div
    //   className={`fixed inset-0 ${
    //     isOpen ? "md:w-[calc(100%-240px)]" : "md:w-[calc(100%-80px)]"
    //   } w-full h-[100vh] ml-auto bg-bg-clr z-10 transition-all duration-500 ease-in-out`}
    // >
    <div className="w-[calc(100%-80px)] lg:w-[calc(100%-240px)] ml-auto min-h-[100vh] bg-bg-clr z-10 transition-all duration-500 ease-in-out">
      <div className="p-2 py-5 md:p-10">
        <div className="flex items-center flex-col md:flex-row">
          <button
            onClick={handleProfileClick}
            className="w-24 h-24 rounded-full overflow-hidden cursor-pointer flex-none"
          >
            <img
              src={userDetails.image}
              alt="User Profile"
              className="w-24 h-24 object-cover"
            />
          </button>

          <div className="flex flex-col flex-auto py-2 md:py-0 px-5 md:px-10 gap-2">
            <div className="flex flex-col">
              <h2 className="text-xl text-center md:text-start font-bold text-white-clr tracking-wider">
                {userDetails.name}
              </h2>
              <p className="text-gray-500 text-center md:text-start ">
                {userDetails.position}
              </p>
            </div>

            <div className="flex space-x-2">
              <Link
                to="#"
                className="flex items-center justify-center bg-root-yellow-clr text-bg-clr font-semibold rounded-md text-center py-2 px-4 border-[1px] border-root-yellow-clr hover:bg-transparent hover:text-root-yellow-clr transition-all duration-300 ease-in-out"
              >
                <FontAwesomeIcon icon={faUserPen} className="mr-1" />
                Edit
              </Link>
              <Link
                to={userDetails.portfolioLink}
                className="user-social"
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                />
              </Link>
              <Link
                to={userDetails.linkedinLink}
                className="user-social"
              >
                {/* <FaLinkedinIn className="text-lg text-root-yellow-clr" /> */}
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                />
              </Link>
              <Link to="#settings" className="flex items-center">
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  className="text-gray-500 text-2xl p-2"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2 md:mt-10 w-full">
          <div
            className={`flex items-center justify-center flex-col w-1/3 ${
              activeSection === "total-blogs"
                ? "text-root-yellow-clr border-4 border-t-transparent border-x-transparent border-root-yellow-clr py-2"
                : "text-white-clr border-4 border-bg-clr"
            }`}
          >
            <Link
              to="#total-blogs"
              className="text-sm md:text-lg font-semibold text-inherit"
              onClick={() => handleSectionClick("total-blogs")}
            >
              Total
            </Link>
            <p className="text-inherit">{userDetails.totalBlogs}</p>
          </div>
          <div
            className={`flex items-center justify-center flex-col w-1/3 ${
              activeSection === "liked-blogs"
                ? "text-root-yellow-clr border-4 border-t-transparent border-x-transparent border-root-yellow-clr py-2"
                : "text-white-clr border-4 border-bg-clr"
            }`}
          >
            <Link
              to="#liked-blogs"
              className="text-sm md:text-lg font-semibold text-inherit"
              onClick={() => handleSectionClick("liked-blogs")}
            >
              Liked
            </Link>
            <p className="text-inherit">{userDetails.likedBlogs}</p>
          </div>
          <div
            className={`flex items-center justify-center flex-col w-1/3 ${
              activeSection === "reposted-blogs"
                ? "text-root-yellow-clr border-4 border-t-transparent border-x-transparent border-root-yellow-clr py-2"
                : "text-white-clr border-4 border-bg-clr"
            }`}
          >
            <Link
              to="#reposted-blogs"
              className="text-sm md:text-lg font-semibold text-inherit"
              onClick={() => handleSectionClick("reposted-blogs")}
            >
              Reposted
            </Link>
            <p className="text-inherit">{userDetails.repostedBlogs}</p>
          </div>
        </div>
      </div>
      {showProfilePopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-8"
          onClick={handleClosePopup}
        >
          <img
            src={userDetails.image}
            alt="User Profile"
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
