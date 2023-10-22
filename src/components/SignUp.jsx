import React from "react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white-clr rounded-xl px-10 py-3">
        <form action="" className="text-black">
          <h2 className="text-lg text-root-yellow-clr font-semibold pb-2 text-center">
            Leapfrog Student Partner SignUp
          </h2>
          <div className="py-2 flex flex-col">
            <label htmlFor="" className="">
              Full Name
            </label>
            <input
              type="text"
              className="border-2 border-gray-300 rounded w-64 text-sm p-1 placeholder:p-2 placeholder:text-2x1 placeholder:italic"
              placeholder="abc def"
            />
          </div>
          <div className="pb-2 flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="border-2 border-gray-300 rounded w-64 text-sm p-1 placeholder:p-2 placeholder:text-2x1 placeholder:italic"
              placeholder="someone@gmail.com"
            />
          </div>
          <div className="pb-2 flex flex-col">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="border-2 border-gray-300 rounded w-64 text-sm p-1 placeholder:p-2 placeholder:text-2x1 placeholder:italic"
              placeholder="Password"
            />
          </div>
          <div className="pb-3 flex flex-col">
            <label htmlFor="">Re-enter Password</label>
            <input
              type="password"
              className="border-2 border-gray-300 rounded w-64 text-sm p-1 placeholder:p-2 placeholder:text-2x1 placeholder:italic"
              placeholder="Re-enter Password"
            />
          </div>
          <button
            type="submit"
            className=" text-white font-medium p-1 px-24 my-2 border-2 rounded-md bg-root-yellow-clr transition-all duration-300 ease-in-out hover:text-root-yellow-clr hover:bg-white-clr hover:border-root-yellow-clr"
          >
            Register
          </button>
          <div className="my-2 text-center">
            <span className="text-gray-500">
              Already have an account?
              <a  href="#" className="text-sm text-root-yellow-clr ml-2 hover:underline">Log in</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
