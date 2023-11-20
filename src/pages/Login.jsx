import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="fixed flex items-center justify-center min-h-screen w-full z-[99] bg-white">
      <div className="bg-white-clr rounded-xl px-10 py-3">
        <form action="">
          <div>
            <h2 className="text-lg text-root-yellow-clr font-semibold pb-2 text-center">
              Leapfrog Student Partner Login
            </h2>
          </div>

          <div className="pb-2 text-gray-600">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              className="border-2 border-gray-300 rounded w-64 text-sm p-1 mt-1 placeholder:p-2 placeholder:text-sm placeholder:italic"
              placeholder="someone@gmail.com"
            />
          </div>

          <div className="pb-2 text-gray-600">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              className="border-2 border-gray-300 rounded w-64 text-sm p-1 mt-1 placeholder:p-2 placeholder:text-sm placeholder:italic"
              placeholder="Password"
            />
          </div>

          <div>
            <a href="#" className="text-sm text-gray-500">
              Forgot password?
            </a>
            <div className="py-2 text-gray-600">
              <input type="checkbox" name="" id="" className="mr-3 " />
              <label htmlFor="Remember me">Remember Me</label>
            </div>
          </div>

          <button
            type="Submit"
            className=" text-white p-1 px-28 my-2 border-2 rounded-md bg-root-yellow-clr transition-all duration-300 ease-in-out hover:text-root-yellow-clr hover:bg-white-clr hover:border-root-yellow-clr"
          >
            Login
          </button>

          <div className="my-2 text-center">
            <span className="text-gray-500">
              Doesn't have an account?
              <Link
                to="/signup"
                className="text-sm text-root-yellow-clr ml-2 hover:underline"
              >
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
