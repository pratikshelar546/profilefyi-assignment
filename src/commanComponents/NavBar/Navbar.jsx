import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-white fixed top-0 z-10 h-fit p-3">
      <div className=" w-full flex justify-center">
        <div className="w-full max-w-6xl flex  justify-between gap-2 lg:text-xl md:text-base text-sm font-semibold">
          <h1 className="">Profile.fyi E-Commerce</h1>

          <div className=" w-1/3  sm:flex hidden">
            <input
              type="search"
              placeholder="Search"
              className="text-sm w-full font-normal p-1  outline-none border border-solid border-gray-500 rounded-md"
            />
          </div>
          <div className="flex gap-2 sm:gap-3">
            <h2>Products</h2>
            <h2>Cart</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
