import React from "react";
import { NavLink, Outlet } from "react-router-dom";

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

function NavBar() {
  return (
    <header className="flex justify-center w-full">
      <nav className="z-50 border-2 w-[82%] fixed top-0  max-w-screen-xl px-3 py-0 mx-auto text-white  rounded-xl  backdrop-blur-md bg-white flex justify-between items-center mt-5 bg-opacity-30 ">
        <NavLink to="/">
          <h2 className="mr-4 ml-1  cursor-pointer py-1.5 font-sans text-3xl font-extrabold leading-relaxed tracking-normal text-black antialiased px-2 bg-gradient-to-b from-slate-400 to-black text-transparent bg-clip-text">
            call<span>ai</span>
          </h2>
        </NavLink>
        <div className="hidden sm:block text-center font-sans font-medium text-xs sm:text-base">
          <a className="px-3 text-black" href="#features">
            features
          </a>

          <a className="px-3 text-black" href="#endorsements-title">
            endorsements
          </a>
          {/* endorsements-title */}
          <a className="px-3 text-black" href="#footer">
            contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          <NavLink to="/test">
            <button className="font-sans bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ">
              <span className="mr-2">{">"}</span> Try it Out
            </button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
