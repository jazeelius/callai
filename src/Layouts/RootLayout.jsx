import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


function RootLayout() {
  return (
    <>
      {/* Remix */}

      <div className="min-h-screen flex flex-col bg-[#FAFAFA] h-screen text-white text-sm sm:text-base ">
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default RootLayout;
