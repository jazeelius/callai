import React from "react";

function Developers() {
  return (
    <>
      <section className=" border-2 w-[94%] mt-40 mx-auto p-8 rounded-lg backdrop-blur-md bg-white bg-opacity-30">
        <div className="text-center">
          <h2 className="py-1.5 font-sans text-3xl font-extrabold tracking-normal text-black antialiased px-2 bg-gradient-to-b from-slate-400 to-black text-transparent bg-clip-text">
            Main Developers
          </h2>
        </div>
        <div className="flex justify-center mt-4 space-x-4"></div>

        <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
          <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="flex justify-end px-4 pt-4">
                <button
                  id="dropdownButton"
                  data-dropdown-toggle="dropdown"
                  class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                  type="button"
                >
                  <span class="sr-only">Open dropdown</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdown"
                  class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul class="py-2" aria-labelledby="dropdownButton">
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Export Data
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-col items-center pb-10">
                <img
                  class="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie image"
                />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Visual Designer
                </span>
                <div class="flex mt-4 md:mt-6">
                  <a
                    href="#"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add friend
                  </a>
                  <a
                    href="#"
                    class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>
          </figure>

          <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="flex justify-end px-4 pt-4">
                <button
                  id="dropdownButton"
                  data-dropdown-toggle="dropdown"
                  class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                  type="button"
                >
                  <span class="sr-only">Open dropdown</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdown"
                  class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul class="py-2" aria-labelledby="dropdownButton">
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Export Data
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="flex flex-col items-center pb-10">
                <img
                  class="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie image"
                />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Bonnie Green
                </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Visual Designer
                </span>
                <div class="flex mt-4 md:mt-6">
                  <a
                    href="#"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add friend
                  </a>
                  <a
                    href="#"
                    class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </section>
    </>
  );
}

export default Developers;
