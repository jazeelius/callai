import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      {/* Remix */}
      <div className="min-h-screen flex flex-col bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen text-white text-sm sm:text-base">
        <header>
          <nav className="block w-full max-w-screen-xl px-4 py-3 mx-auto text-white shadow-md rounded-xl bg-white">
            <div>
              <NavLink to="/">
                <h2 className="mr-4 ml-2 cursor-pointer py-1.5 font-sans text-3xl font-extrabold leading-relaxed tracking-normal text-black antialiased">
                  Callai
                </h2>
              </NavLink>

              <div className="flex gap-1 ml-auto md:mr-4">
                <button>
                  <NavLink to="/test">Try it out now</NavLink>
                </button>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default RootLayout;
