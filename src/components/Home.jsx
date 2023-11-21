import React, { useState, useEffect } from "react";

import { GiFrogFoot } from "react-icons/gi";
// import { GiFrogPrince } from "react-icons/gi";
import { FaRegComment } from "react-icons/fa";
// import { TfiCommentsSmiley } from "react-icons/tfi";
import { BiRepost } from "react-icons/bi";
import { FiShare } from "react-icons/fi";

import user from "../assets/purna.webp";
import LoginButton from "./Batch/LoginButton";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from an API or a local data source
    // Replace this with your actual data fetching logic when available
    // Example: fetch("https://api.example.com/blogs")
    //   .then(response => response.json())
    //   .then(data => setBlogs(data));

    // Mock data for demonstration
    const sampleBlogs = [
      {
        id: 1,
        title: "Blog 1",
        creator: "John Doe",
        userName: "john",
        datePosted: "2023-10-25T13:24:00",
        profilePicture: user,
        images: [
          "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-golden-achievement-unlocked-celebrating-your-success-on-a-blue-3d-background-image_3808269.jpg",
        ],
        likeCount: 10,
        commentCount: 5,
        repostCount: 2,
      },
      {
        id: 2,
        title: "Blog 2",
        creator: "Jane Smith",
        userName: "jane",
        datePosted: "2023-10-24T09:45:00",
        profilePicture: user,
        images: [
          "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-golden-achievement-unlocked-celebrating-your-success-on-a-blue-3d-background-image_3808269.jpg",
        ],
        likeCount: 15,
        commentCount: 8,
        repostCount: 3,
      },
      {
        id: 3,
        title: "Blog 3",
        creator: "Emma Johnson",
        userName: "emma",
        datePosted: "2023-10-23T11:15:00",
        profilePicture: user,
        images: [
          "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-golden-achievement-unlocked-celebrating-your-success-on-a-blue-3d-background-image_3808269.jpg",
        ],
        likeCount: 20,
        commentCount: 12,
        repostCount: 5,
      },
      {
        id: 4,
        title: "Blog 4",
        creator: "James Thompson",
        userName: "james",
        datePosted: "2023-10-22T17:30:00",
        profilePicture: user,
        images: [
          "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-golden-achievement-unlocked-celebrating-your-success-on-a-blue-3d-background-image_3808269.jpg",
        ],
        likeCount: 8,
        commentCount: 4,
        repostCount: 1,
      },
      {
        id: 5,
        title: "Blog 5",
        creator: "Sophia Lee",
        userName: "sophia",
        datePosted: "2023-10-21T14:20:00",
        profilePicture: user,
        images: [
          "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-golden-achievement-unlocked-celebrating-your-success-on-a-blue-3d-background-image_3808269.jpg",
        ],
        likeCount: 12,
        commentCount: 6,
        repostCount: 2,
      },
      {
        id: 6,
        title: "Blog 6",
        creator: "Michael Davis",
        userName: "michael",
        datePosted: "2023-10-20T10:10:00",
        profilePicture: user,
        images: [
          "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-golden-achievement-unlocked-celebrating-your-success-on-a-blue-3d-background-image_3808269.jpg",
        ],
        likeCount: 18,
        commentCount: 9,
        repostCount: 4,
      },
      {
        id: 7,
        title: "Blog 7",
        creator: "Olivia Wilson",
        userName: "olivia",
        datePosted: "2023-10-19T08:45:00",
        profilePicture: user,
        images: [
          "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-golden-achievement-unlocked-celebrating-your-success-on-a-blue-3d-background-image_3808269.jpg",
        ],
        likeCount: 25,
        commentCount: 15,
        repostCount: 6,
      },
      {
        id: 8,
        title: "Blog 8",
        creator: "William Garcia",
        userName: "william",
        datePosted: "2023-10-18T22:00:00",
        profilePicture: user,
        images: [
          "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-golden-achievement-unlocked-celebrating-your-success-on-a-blue-3d-background-image_3808269.jpg",
        ],
        likeCount: 30,
        commentCount: 18,
        repostCount: 8,
      },
      {
        id: 9,
        title: "Blog 9",
        creator: "David Brown",
        userName: "david",
        datePosted: "2023-10-17T19:20:00",
        profilePicture: user,
        images: [
          "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-golden-achievement-unlocked-celebrating-your-success-on-a-blue-3d-background-image_3808269.jpg",
        ],
        likeCount: 22,
        commentCount: 11,
        repostCount: 3,
      },
      {
        id: 10,
        title: "Blog 10",
        creator: "Sophie Evans",
        userName: "sophie",
        datePosted: "2023-10-16T12:10:00",
        profilePicture: user,
        images: [
          "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-golden-achievement-unlocked-celebrating-your-success-on-a-blue-3d-background-image_3808269.jpg",
        ],
        likeCount: 19,
        commentCount: 10,
        repostCount: 5,
      },
      {
        id: 11,
        title: "Blog 11",
        creator: "Sophie Evans",
        userName: "sophie",
        datePosted: "2023-10-16T12:10:00",
        profilePicture: user,
        images: [
          "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-golden-achievement-unlocked-celebrating-your-success-on-a-blue-3d-background-image_3808269.jpg",
        ],
        likeCount: 19,
        commentCount: 10,
        repostCount: 5,
      },
      {
        id: 12,
        title: "Blog 12",
        creator: "Sophie Evans",
        userName: "sophie",
        datePosted: "2023-10-16T12:10:00",
        profilePicture: user,
        images: [
          "https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-golden-achievement-unlocked-celebrating-your-success-on-a-blue-3d-background-image_3808269.jpg",
        ],
        likeCount: 19,
        commentCount: 10,
        repostCount: 5,
      },
      // Add more blog objects as needed
    ];

    setBlogs(sampleBlogs);
  }, []);

  const formatDate = (date) => {
    // Convert date string to a Date object
    const postDate = new Date(date);
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - postDate.getTime();
    const seconds = timeDifference / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    if (seconds < 60) {
      return `${Math.floor(seconds)} seconds ago`;
    } else if (minutes < 60) {
      return `${Math.floor(minutes)} minutes ago`;
    } else if (hours < 24) {
      return `${Math.floor(hours)} hours ago`;
    } else {
      return `${Math.floor(days)} days ago`;
    }
  };

  return (
    <div className="flex items-center justify-center text-black md:mt-4">
      <div className="w-[calc(100%-80px)] lg:w-[calc(100%-240px)] ml-auto">
        {/* <h3 className="text-2xl mb-4 font-bold">Latest Blogs:</h3> */}
        <ul className="flex items-center justify-center flex-wrap gap-5">
          {blogs.map((blog) => (
            <li key={blog.id} className="border p-2 md:p-4 rounded-md">
              <div className="mb-2 md:mb-4">
                <div className="flex justify-between">
                  <div className="flex justify-start items-start">
                    <img
                      src={blog.profilePicture}
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover mr-2"
                    />
                    <div className="flex flex-col">
                      <h4 className="text-xl font-semibold">{blog.creator}</h4>
                      <span className="text-gray-400 -mt-1">
                        @{blog.userName}
                      </span>
                    </div>
                  </div>
                  <span className="flex items-baseline justify-end text-gray-400">
                    {formatDate(blog.datePosted)}
                  </span>
                </div>
              </div>
              {/* <p className="text-gray-700">{blog.content}</p> */}
              <div className="flex space-x-4 mb-4">
                <div className="relative">
                  {blog.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index}`}
                      className="w-full md:w-[360px] h-48 object-cover object-center rounded-2xl"
                    />
                  ))}
                  <h4 className="text-xl font-semibold absolute text-white bottom-0 py-2 px-3 w-full bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.8)] rounded-b-2xl">
                    {blog.title}
                  </h4>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 text-xl">
                <div className="flex items-center w-1/2 justify-between ml-2">
                  <button className="text-gray-600 relative">
                    {/* <GiFrogPrince /> */}
                    <GiFrogFoot />{" "}
                    <span className="engagements">{blog.likeCount}</span>
                  </button>
                  <button className="text-blue-600 relative">
                    <FaRegComment className="-scale-x-100" />{" "}
                    <span className="engagements">{blog.commentCount}</span>
                  </button>
                  <button className="text-green-600 relative">
                    <BiRepost className="scale-y-150" />
                    <span className="engagements">{blog.repostCount}</span>
                  </button>
                </div>
                <div>
                  <button className="flex">
                    <FiShare className="mr-3" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <LoginButton />
    </div>
  );
};

export default Home;
