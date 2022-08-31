import Image from "next/image";
import React from "react";

const Heroarea = () => {
  return (
    <div className="bg-[url('/pictwo.jpg')] bg-cover">
     <section className="relative  h-500 w-500 bg-indigo-900 opacity-95">
  {/* <img
    className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
    src="https://unsplash.com/photos/Hcfwew744z4"
    alt="Couple on a bed with a dog"
  /> */}
  {/* <Image src="/picone.jpg" alt="Vercel Logo" width={500} height={500} /> */}
  <div className="hidden sm:block sm:inset-0 sm:sabsolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

  <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
        RESOURCES
        <strong className="font-extrabold text-white mt-6 sm:block">
          Forever Home.
        </strong>
      </h1>

      <p className="max-w-lg mt-8 sm:leading-relaxed sm:text-xl text-white">
      The book resource is essentially a series of web pages in a book-like format, with chapters, subchapters, and a table of contents.
      </p>

      <div className="flex flex-wrap gap-4 mt-8 text-center">
        <a className="block w-full px-12 py-3 text-sm font-medium text-indigo-900 rounded shadow bg-white sm:w-auto  hover:border-current focus:outline-none focus:ring" href="#">
          Get Started
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Heroarea;
