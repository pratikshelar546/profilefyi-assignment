"use client";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
export const CardProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const isItem = cartItems?.find((cartItem) => cartItem._id === item._id);

    if (isItem) {
      setCartItems(
        cartItems?.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (item) => {
    const isItem = cartItems.find((cartItem) => cartItem._id === item._id);

    if (isItem && isItem.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    const carts = localStorage.getItem("profileCartItem");
    if (carts) {
      setCartItems(JSON.stringify(carts));
    }
  }, []);

  // console.log(cartItems);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItemFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
