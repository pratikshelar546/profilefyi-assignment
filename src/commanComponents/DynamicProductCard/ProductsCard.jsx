"use client";
import formatPrice from "@/utlis/FormatPrixe";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
const ProductsCard = ({
  product,
  addToCart,
  cartQuantity,
  removeItem,
  displayStyle,
}) => {
  const user = JSON.stringify(localStorage.getItem("profileUser"));
  const [disableButton, setDisableButton] = useState(false);
  const handleAddToCart = () => {
    if (!user) {
      let newUser = window.prompt("Login First with your Full name ");
      localStorage.setItem("profileUser", newUser);
    } else {
      if (product.quantity === cartQuantity?.cartQuantity) {
        toast.error("Sorry! We don't have any more units for this item.");
        setDisableButton(true);
      } else {
        setDisableButton(false);
        addToCart(product);
      }
    }
  };

  const handleRemoveItem = () => {
    setDisableButton(false);
    removeItem(product);
  };

  return (
    <div
      className={`h-full border border-solid rounded-md flex justify-between gap-2 bg-slate-100 w-full p-3 items-center flex-col md:${displayStyle}`}
    >
      <div className="h-44 relative w-full">
        <Image
          src={product.image[0]}
          alt={product.title}
          fill
          sizes="10vw"
          priority
          className="object-contain"
        />
      </div>
      <div className="flex-grow flex flex-col justify-start w-full">
        <h1 className="text-base font-medium text-center">{product.title}</h1>
        <p className="text-sm font-light text-center w-full truncate">
          {product.description.slice(0, 50) + "..."}
        </p>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center lg:flex-row flex-col">
          <p className="font-semibold">{formatPrice(product.price)}</p>
          {cartQuantity?._id === product._id &&
          cartQuantity?.cartQuantity > 0 ? (
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <button
                  onClick={handleAddToCart}
                  className={`${
                    disableButton ? "bg-gray-400" : "bg-blue-200"
                  } rounded-full px-3 py-1`}
                  disabled={disableButton}
                >
                  +
                </button>
                <p>{cartQuantity.cartQuantity}</p>
                <button
                  onClick={handleRemoveItem}
                  className="bg-blue-200 rounded-full px-3 py-1"
                >
                  -
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="px-3 py-1 border border-solid border-gray-400 rounded-xl hover:bg-blue-200"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
