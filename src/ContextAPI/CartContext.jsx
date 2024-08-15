"use client";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
export const CardProvider = ({ children }) => {
  const initialState = [];
  const [cartItems, setCartItems] = useState(initialState);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartItems"));
    if (cartData) {
      setCartItems(cartData);
    }
  }, []);

  const addItem = (item) => {
    const isItem = cartItems?.find((cartItem) => cartItem._id === item._id);

    if (isItem) {
      setCartItems(
        cartItems?.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, cartQuantity: 1 }]);
    }
  };

  const removeItemFromCart = (item) => {
    const isItem = cartItems.find((cartItem) => cartItem._id === item._id);

    if (isItem && isItem.cartQuantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, cartQuantity: cartItem.cartQuantity - 1 }
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
      (total, item) => total + item.price * item.cartQuantity,
      0
    );
  };

  useEffect(() => {
    console.log(cartItems === initialState, cartItems !== initialState);
    if (cartItems !== initialState) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

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
