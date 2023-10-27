import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPen,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import purna from "../assets/purna.webp";

const userDetails = {
  name: "Purna Shrestha",
  position: "Software Developer",
  linkedinLink: "https://www.linkedin.com/in/purna-shrestha-0310ps/",
  totalBlogs: 50,
  likedBlogs: 25,
  recentBlogs: 5,
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
    <div
      className={`fixed inset-0 ${
        isOpen ? "md:w-[calc(100%-240px)]" : "md:w-[calc(100%-80px)]"
      } w-full h-[100vh] ml-auto bg-bg-clr z-10 transition-all duration-500 ease-in-out`}
    >
      <div className="p-5 md:p-10">
        <div className="flex items-center justify-between mb-4 w-full">
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

          <div className="flex flex-col flex-auto px-5 md:px-10 gap-2">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold text-white-clr tracking-wider">
                {userDetails.name}
              </h2>
              <p className="text-gray-500">{userDetails.position}</p>
            </div>

            <div className="flex space-x-2">
              <Link
                to="#"
                className="flex items-center justify-center bg-root-yellow-clr text-bg-clr font-semibold rounded-md text-center py-2 px-4"
              >
                <FontAwesomeIcon icon={faUserPen} className="mr-1" />
                Edit
              </Link>
              <Link
                to={userDetails.linkedinLink}
                className="flex items-center justify-center border-[1px] border-root-yellow-clr text-bg-clr rounded-md text-center p-2"
              >
                {/* <FaLinkedinIn className="text-lg text-root-yellow-clr" /> */}
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-lg text-root-yellow-clr"
                />
              </Link>
              <Link to="#settings" className="flex items-center">
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  className="text-gray-500 text-2xl"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10 md:mt-16 w-full">
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
              Total Blogs
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
              Liked Blogs
            </Link>
            <p className="text-inherit">{userDetails.likedBlogs}</p>
          </div>
          <div
            className={`flex items-center justify-center flex-col w-1/3 ${
              activeSection === "recent-blogs"
                ? "text-root-yellow-clr border-4 border-t-transparent border-x-transparent border-root-yellow-clr py-2"
                : "text-white-clr border-4 border-bg-clr"
            }`}
          >
            <Link
              to="#recent-blogs"
              className="text-sm md:text-lg font-semibold text-inherit"
              onClick={() => handleSectionClick("recent-blogs")}
            >
              Recent Blogs
            </Link>
            <p className="text-inherit">{userDetails.recentBlogs}</p>
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
