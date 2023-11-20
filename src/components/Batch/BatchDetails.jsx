import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { FaLinkedinIn } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

import user from "../../assets/purna.webp";

const BatchDetails = () => {
  const [batchDetails, setBatchDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Mock data for demonstration
    const batchData = {
      2022: {
        year: 2022,
        details: "Welcome to the LSPP Batch of 2022!",
        // members: [
        //   {
        //     id: 1,
        //     name: "Purna Shrestha",
        //     image: user,
        //     linkedIn: "https://www.linkedin.com/in/purna-shrestha-0310ps/",
        //     portfolio: "https://www.purnashrestha.com.np/",
        //     profile: "",
        //   },
        // ],
        members: Array.from({ length: 20 }, (_, index) => ({
          id: index + 1,
          name: "Purna Shrestha",
          image: user,
          linkedIn: "https://www.linkedin.com/in/purna-shrestha-0310ps/",
          portfolio: "https://www.purnashrestha.com.np/",
          profile: "",
        })),
      },
      2023: {
        year: 2023,
        details: "Details for batch 2023...",
        members: Array.from({ length: 20 }, (_, index) => ({
          id: index + 1,
          name: "Purna Shrestha",
          image: user,
          linkedIn: "https://www.linkedin.com/in/purna-shrestha-0310ps/",
          portfolio: "https://www.purnashrestha.com.np/",
          profile: "",
        })),
      },
      // Add other batch details...
    };

    setBatchDetails(batchData[id]);
  }, [id]);

  if (!batchDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center text-black md:mt-4">
      <div className="w-[calc(100%-80px)] lg:w-[calc(100%-240px)] ml-auto">
        <h2 className="text-2xl font-semibold text-center py-2 md:mb-2">
          LSPP Batch {batchDetails.year}
        </h2>
        {/* <p className="text-lg">{batchDetails.details}</p> */}
        <ul className="flex items-center justify-center flex-wrap gap-5">
          {batchDetails.members.map((member) => (
            <li key={member.id} className="border p-4 rounded-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-[264px] h-52 object-cover object-top rounded-2xl"
                // onClick={() => {
                //   if (member.profile) {
                //     history.push(`/profile/${member.profile}`);
                //   } else {
                //     alert("Profile not found!");
                //   }
                // }}
              />

              <h4 className="text-xl font-semibold my-3">{member.name}</h4>
              <Link
                to={member.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 inline-block"
              >
                <TbWorldWww />
              </Link>
              <Link
                to={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-block"
              >
                <FaLinkedinIn />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BatchDetails;
