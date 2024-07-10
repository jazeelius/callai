import React from 'react'

function Hero() {
  return (
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

    {/* <!-- Title --> */}
    <div class="mt-32 mb-9 max-w-2xl text-center mx-auto">
      <h1 class="block antialiased font-bold text-[#2D2D2D] text-4xl md:text-5xl lg:text-6xl dark:black">
        Automate your sales calls with
        <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"> AI</span>
      </h1>
    </div>
    {/* <!-- End Title --> */}

    <div class="mt-5 max-w-3xl text-center mx-auto ">
      <p class="text-lg text-gray-600 dark:text-neutral-400 max-w-prose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repellat, vero ad repellendus quia sapiente animi quasi ipsum voluptatum, ipsa eveniet minima provident sed neque quo, tempore sint ea nisi.</p>
    </div>

    {/* <!-- Buttons --> */}
    <div class="mt-8 gap-3 flex justify-center">
      <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800" href="/test">
        Get started
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </a>
      <a class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-gray-500 to-black hover:from-black hover:to-gray-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800" href="https://github.com/jazeelius/callai">
        Github
        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </a>
      
      
  
    {/* <!-- End Buttons --> */}

    
  </div>
</div>
  )
}

export default Hero