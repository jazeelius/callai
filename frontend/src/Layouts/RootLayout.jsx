import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


function RootLayout() {
  return (
    <>
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-white text-sm sm:text-base ">
        {/* Remix */}
        <NavBar />
        <main>
          <Outlet />
        </main>
    </div>
      
    </>
  );
}

export default RootLayout;
