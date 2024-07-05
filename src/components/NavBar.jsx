import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <nav className="border-2 w-10/12  max-w-screen-xl px-3 py-0 mx-auto text-white   rounded-xl  backdrop-blur-md bg-white flex justify-between items-center mt-5 sticky bg-opacity-30 ">
        <NavLink to="/">
          <h2 className="mr-4 ml-1  cursor-pointer py-1.5 font-sans text-3xl font-extrabold leading-relaxed tracking-normal text-black antialiased px-2 bg-gradient-to-b from-slate-400 to-black text-transparent bg-clip-text">
            call<span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">ai</span>
          </h2>
        </NavLink>
        <div className="hidden sm:block text-center font-sans font-medium text-xs sm:text-base">
          <NavLink
            to="/features"
            className="px-3 text-black"
          >
            features
          </NavLink>
          <NavLink to="/docs" className="px-3 text-black">
            docs
          </NavLink>
          <NavLink
            to="/signup"
            className="px-3 text-black"
          >
            sign up
          </NavLink>
        </div>
        <div className="flex items-center gap-4">
          <NavLink to="/test">
            <button className="font-sans bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 ">
              <span className="mr-2">{">"}</span> Try it Out
            </button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
