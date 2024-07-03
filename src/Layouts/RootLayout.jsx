import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      {/* Remix */}
      <header className="bg-white">
        <nav className="">
          <div>
            <NavLink to="/">
              <h2 className="font-[Poppins] text-black">Callai</h2>
            </NavLink>
            <div>
              <NavLink to="/test"></NavLink>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>

      {/* <div className='root-layout'>
      <div className='root-layout'>
  <header className='max-w-screen-xl mx-auto p-4'>
    <nav className='bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 flex items-center justify-between'>
      <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>
        Jobarouter
      </h1>
      <ul className='flex space-x-4'>
        <li className='py-2'>
          <NavLink to="/" className='text-white bg-blue-700 px-3 py-2 rounded md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500'>
            Home
          </NavLink>
        </li>
        <li className='py-2'>
          <NavLink to="/test" className='text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 px-3 py-2 rounded'>
            Try it out
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <Outlet/>
  </main>
</div>
    </div> */}
    </>
  );
}

export default RootLayout;
