"use client";
import useFormatPrice from "@/utlis/FormatPrixe";
import Image from "next/image";
import React, { useState } from "react";

const ProductsCard = ({ product, addToCart, cartQuantity, removeItem }) => {
  const user = JSON.stringify(localStorage.getItem("profileUser"));
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    if (!user) {
      let newUser = window.prompt("Login First with your Full name ");
      localStorage.setItem("profileUser", newUser);
    }
    if (user) {
      console.log("ADding", cartQuantity);

      addToCart(product);
    }
  };
  // console.log(cartQuantity);

  const handleRemoveItem = () => {
    console.log("removing");

    removeItem(product);
    console.log(cartQuantity);
  };

  return (
    <div className="h-full border border-solid rounded-md flex flex-col gap-2 bg-slate-100 w-full p-3 items-center">
      <div className="h-44 relative w-full">
        <Image
          src={product.image[0]}
          alt={product.title}
          fill
          sizes="10vw"
          priority
          className=" object-contain"
        />
      </div>
      <h1 className="text-base font-medium">{product.title}</h1>
      <p className="text-sm font-light text-left w-full">
        {product.description.slice(0, 50) + "..."}
      </p>
      <div className="flex justify-between w-full">
        <p>{useFormatPrice(product.price)}</p>
        {cartQuantity?._id === product._id && cartQuantity?.quantity > 0 ? (
          <div>
            <button onClick={handleAddToCart}>+</button>
            {cartQuantity ? (
              <p>{cartQuantity.quantity}</p>
            ) : (
              <p>0</p> // or some default value if cartQuantity is not available
            )}
            <button onClick={handleRemoveItem}>-</button>
          </div>
        ) : (
          <button onClick={handleAddToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductsCard;
