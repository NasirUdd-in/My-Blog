import React from "react";

const Navigation = () => {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-10 px-12 bg-white shadow sm:items-baseline w-full">
    <div className="mb-2 sm:mb-0">
      <a href="/COMPANY" className="text-xl no-underline text-grey-darkest hover:text-blue-dark ml-4">COMPANY</a>
      <a href="/COMPANY" className="text-xl no-underline text-grey-darkest hover:text-blue-dark ml-4">SERVICES</a>
      <a href="/COMPANY" className="text-xl no-underline text-grey-darkest hover:text-blue-dark ml-4">PRICING</a>
      <a href="/COMPANY" className="text-xl no-underline text-grey-darkest hover:text-blue-dark ml-4">RESOURCES</a>
      <a href="/COMPANY" className="text-xl no-underline text-grey-darkest hover:text-blue-dark ml-4">ENTERPRISE</a>
    </div>
    <div>
      <a href="/one" className="text-lg no-underline text-blue-600/100 hover:text-blue-dark ml-4">LOG IN</a>
      <a href="/two" className="text-lg no-underline text-blue-600/100 hover:text-blue-dark ml-4">CONSTACT SALES</a>
    </div>
  </nav>
  );
};

export default Navigation;
