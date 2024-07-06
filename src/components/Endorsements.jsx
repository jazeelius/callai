import React from "react";


function Endorsements() {
  return (
    <>
      <section className="">
    <div id="endorsements-title" className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 bg-[#FAFAFA]">
        <h2 className="pt-32 mb-8 lg:mb-10 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-800 md:text-3xl ">Loved by the best</h2>
        <hr class="h-1 rounded w-80 mx-auto my-8 bg-gray-200 border-0"></hr>
        <div className="mt-3 flex md:col-span-2  text-gray-400 justify-center hover:bg gap-4">
        

            <div className="has-tooltip group relative flex justify-center ">
            <a href="#" className="flex justify-center items-center m-5 text-5xl hover:text-gray-500 ">
            <i className="fa-brands fa-salesforce "></i>    
            <span class="absolute top-20 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">SalesForce</span>                                           
            </a>
            </div>

            <div className="group relative flex justify-center">
            <a href="#" className="flex justify-center items-center m-5 text-5xl hover:text-gray-500">
            <i className="fa-brands fa-google"></i>    
            <span class="absolute top-20 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Google</span>                                           
            </a>
            </div>

            <div className="group relative flex justify-center">
            <a href="#" className="flex justify-center items-center m-5 text-5xl hover:text-gray-500">
            <i className="fa-brands fa-stripe"></i>    
            <span class="absolute top-20 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Stripe</span>                                           
            </a>
            </div>
            
            {/* <a href="#" className="flex justify-center items-center m-5 text-5xl hover:text-black">
            <i className="fa-brands fa-google"></i>                                                                 
            </a> */}
            {/* <a href="#" className="flex justify-center items-center m-5 text-5xl hover:text-black">
            <i className="fa-brands fa-stripe"></i>                                                 
            </a> */}

           
           
            
        </div>
    </div>
</section>
    </>
  );
}

export default Endorsements;
