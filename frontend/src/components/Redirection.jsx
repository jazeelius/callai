import React from 'react'
import { NavLink } from 'react-router-dom'

function Redirection() {
  return (
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 mt-11">
      {/* <!-- Title --> */}
      
      <div class="mt-10 mb-9 max-w-2xl text-center mx-auto w-max">
        <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 font-bold text-[#2D2D2D] text-4xl  dark:black">
        {/* font-bold text-[#2D2D2D] text-4xl  dark:black */}
          Start Earning <span>Today &nbsp;</span>
        </h1>
      </div>
      {/* <!-- End Title --> */}

      {/* <!-- Buttons --> */}
      <div class="mt-8 gap-3 flex justify-center">
      <NavLink to="/test">
            <button className="font-sans bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ">
              <span className="mr-2">{">"}</span> Get Started
            </button>
          </NavLink>
      </div>
      {/* <!-- End Buttons --> */}
    </div>
  )
}

export default Redirection
