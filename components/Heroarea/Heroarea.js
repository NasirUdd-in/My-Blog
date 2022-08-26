import Image from "next/image";
import React from "react";

const Heroarea = () => {
  return (
    <div>
     <section className="relative bg-[url('/pictwo.jpg')] bg-cover h-500 w-500">
  {/* <img
    className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
    src="https://unsplash.com/photos/Hcfwew744z4"
    alt="Couple on a bed with a dog"
  /> */}
  {/* <Image src="/picone.jpg" alt="Vercel Logo" width={500} height={500} /> */}
  <div className="hidden sm:block sm:inset-0 sm:sabsolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

  <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        RESOURCES
        <strong className="font-extrabold text-blue-900 mt-6 sm:block">
          Forever Home.
        </strong>
      </h1>

      <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
      </p>

      <div className="flex flex-wrap gap-4 mt-8 text-center">
        <a className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-blue-900 sm:w-auto active:bg-blue-900 hover:bg-blue-900 focus:outline-none focus:ring" href="/get-started">
          Get Started
        </a>

        <a className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-blue-900 sm:w-auto hover:text-blue-900 active:text-blue-900 focus:outline-none focus:ring" href="/about">
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Heroarea;
