import React from "react";

function Endorsements() {
  return (
    <>
      <section className="">
    <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 bg-[#FAFAFA]">
        <h2 className="pt-20 mb-8 lg:mb-12 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-800 md:text-4xl">You’ll be in good company</h2>
        <div className="mt-3 flex md:col-span-2 text-gray-500 justify-center hover:bg gap-4">
            
            <a href="#" className="flex justify-center items-center m-5 text-5xl hover:text-black">
            <i className="fa-brands fa-salesforce"></i>                                               
            </a>
            <a href="#" className="flex justify-center items-center m-5 text-5xl hover:text-black">
            <i className="fa-brands fa-google"></i>                                                                 
            </a>
            <a href="#" className="flex justify-center items-center m-5 text-5xl hover:text-black">
            <i className="fa-brands fa-stripe"></i>                                                 
            </a>

           
           
            
        </div>
    </div>
</section>
    </>
  );
}

export default Endorsements;
