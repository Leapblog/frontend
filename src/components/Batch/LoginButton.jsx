import React from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-[99] mx-auto">
      <Link
        to="/login"
        className="flex items-center py-2 px-8 rounded-t-2xl bg-gradient-to-r from-white-clr to-white-clr text-bg-clr font-bold tracking-wider uppercase"
        style={{ boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)" }}
      >
        Login
        <span className="absolute left-4 bg-bg-clr -z-10 rounded-t-[0.75rem] w-20 h-8 animate-ping"></span>
      </Link>
    </div>
  );
};

export default LoginButton;
