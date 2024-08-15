"use client";
import ProductsCard from "@/commanComponents/DynamicProductCard/ProductsCard";
import { CartContext } from "@/ContextAPI/CartContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import CartPriceSection from "./CartPriceSection";

const CartItems = () => {
  const { addItem, cartItems, removeItemFromCart } = useContext(CartContext);
  const { push } = useRouter();

  return (
    <>
      <div className="w-full flex justify-center items-center mt-16 p-3  gap-3">
        <div className="w-full max-w-6xl flex md:flex-row flex-col gap-3">
          <div className="w-full max-w-4xl flex flex-col gap-5 ">
            {cartItems?.length > 0 ? (
              cartItems?.map((product, index) => (
                <ProductsCard
                  product={product}
                  key={index}
                  displayStyle={"flex-row"}
                  addToCart={addItem}
                  removeItem={removeItemFromCart}
                  cartQuantity={
                    cartItems.find((cart) => cart._id === product._id) || null
                  }
                />
              ))
            ) : (
              <div className="flex justify-center items-center flex-col gap-3">
                <h1 className="text-2xl font-semibold">Cart is Empty</h1>
                <button
                  className="bg-blue-200 px-4 py-2 rounded-lg"
                  onClick={() => push("/")}
                >
                  Add Product
                </button>
              </div>
            )}
          </div>
          {cartItems?.length > 0 && <CartPriceSection />}
        </div>
      </div>
    </>
  );
};

export default CartItems;
