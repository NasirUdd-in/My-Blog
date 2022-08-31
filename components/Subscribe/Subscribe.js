import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div className="container  mx-auto  my-28 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xl font-thin">COLLABORATIVE WORK MANAGEMENT</p>
          <h1 className="text-6xl font-bold mt-5">Stay Connected</h1>
        </div>
        <div>
          <p>
            In pulishing and graphic design.Front-end web development, also
            known as client-side development is the practice of producing HTML,
            CSS and JavaScript for a website or Web Application so that a user
            can see and interact with them directly. 
          </p>
          <div className="flex mt-6">
                <div className="bg-white border rounded-md focus-within:ring dark:bg-gray-800 dark:border-gray-600 focus-within:border-blue-400 focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:focus-within:border-blue-300">
                    <div className="flex flex-wrap justify-between md:flex-row">
                        <input type="email" className="p-2 m-1 text-sm text-gray-700 bg-transparent appearance-none focus:outline-none focus:placeholder-transparent" placeholder="Enter your email" aria-label="Enter your email"/>
                        <button className="w-full px-3 py-2 m-1 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded-md dark:hover:bg-gray-600 dark:bg-gray-700 lg:w-auto hover:bg-gray-700">subscribe</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
