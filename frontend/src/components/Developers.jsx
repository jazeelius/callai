import React from "react";

function Developers() {
  return (
    <>
      <div className="col-span-1 mt-10 sm:col-span-2 lg:col-span-3 p-4 border rounded-lg text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-b from-slate-400 to-black text-transparent bg-clip-text">
          Main Developers
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mt-4 pt-11">
          <div className="max-w-sm border border-gray-200 rounded-lg">
            <div className="p-5 flex flex-col items-center justify-center">
              <img className="w-[256px] mt-9 rounded mb-4" src="https://github.com/jazeelius.png" alt="Default avatar" />
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 text-center">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
              <a href="https://github.com/jazeelius" className="inline-flex mb-3 items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-500
hover:bg-blue-600">
                Github
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm border border-gray-200 rounded-lg">
            <div className="p-5 flex flex-col items-center justify-center">
              <img className="w-[256px] mt-9 rounded mb-4" src="https://github.com/jazeelius.png" alt="Default avatar" />
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 text-center">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-4 font-normal text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
              <a href="https://github.com/igbokwe-kosi" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-500
hover:bg-blue-600">
                Github
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Developers;