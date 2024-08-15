"use client";
import { CartContext } from "@/ContextAPI/CartContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const Navbar = () => {
  const { push } = useRouter();
  const { cartItems } = useContext(CartContext);
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
            <h2 className=" cursor-pointer" onClick={() => push("/")}>
              Products
            </h2>
            <h2 onClick={() => push("/cart")} className=" cursor-pointer flex">
              Cart
              {cartItems?.length >= 1 ? (
                <p className="text-xs bg-red-600 h-4 w-4 text-center text-white rounded-full">
                  {cartItems.length}
                </p>
              ) : null}
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
