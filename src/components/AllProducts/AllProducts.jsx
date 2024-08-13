"use client";
import ProductsCard from "@/commanComponents/DynamicProductCard/ProductsCard";
import { CartContext } from "@/ContextAPI/CartContext";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState();
  const { addItem, cartItems, removeItemFromCart } = useContext(CartContext);

  // console.log(cartItems);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://shopkart-api-3rbp.onrender.com/product/getProduct/electronics"
      );
      setProducts(response.data.product);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="w-full flex justify-center items-center mt-16 p-3">
      <div className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products &&
          products
            .filter((item) => item.key === "Mobile")
            .map((item, index) => (
              <ProductsCard
                key={index}
                product={item}
                addToCart={addItem}
                cartQuantity={
                  cartItems.find((cart) => cart._id === item._id) || null
                }
                removeItem={removeItemFromCart}
              />
            ))}
      </div>
    </section>
  );
};

export default AllProducts;
