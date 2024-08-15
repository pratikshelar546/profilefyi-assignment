import { CartContext } from "@/ContextAPI/CartContext";
import formatPrice from "@/utlis/FormatPrixe";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const CartPriceSection = () => {
  const [coupenValue, setCoupenValue] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const { cartItems, getCartTotal, clearCart } = useContext(CartContext);

  // Get and format total price
  const total = getCartTotal();
  const formattedTotalPrice = formatPrice(total);
  const formattedDiscountedPrice =
    discountedPrice !== null ? formatPrice(discountedPrice) : null;

  const { push } = useRouter();

  const handleCoupen = () => {
    if (coupenValue === "ASSIGNMENT") {
      setDiscountedPrice(total * 0.9);
    } else {
      setDiscountedPrice(null); // Reset or handle invalid coupon
    }
  };

  useEffect(() => {
    handleCoupen();
  }, [total]);

  const handleClearCart = async () => {
    await clearCart();
    push("/");
  };
  return (
    <>
      <section className="bg-slate-100 h-full lg:p-0 p-5 lg:sticky top-16 relative lg:w-[40%] w-full">
        <div className="border-b-2">
          <div className="p-3 text-lg font-medium text-gray-500 flex justify-between">
            <h1>PRICE DETAILS</h1>
            <button
              className="px-3 py-1 border border-solid border-gray-400 rounded-xl  hover:bg-blue-200"
              onClick={handleClearCart}
            >
              Clear cart
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="border-b-2">
            <div className="flex justify-between py-3 text-md">
              <h1>Price ({cartItems?.length} items)</h1>
              <h1>{formattedTotalPrice}</h1>
            </div>
            {discountedPrice !== null && (
              <div className="flex justify-between py-3 text-md">
                <h1>Discounted Price</h1>
                <p>{formattedDiscountedPrice}</p>
              </div>
            )}
            <div className="w-full flex gap-3 justify-between">
              <input
                onChange={(e) => setCoupenValue(e.target.value)}
                className="border border-solid px-2 border-gray-400 w-1/2 outline-none rounded-lg text-sm"
                placeholder="Enter coupon code"
              />
              <button
                onClick={handleCoupen}
                className="px-2 py-1 border border-solid border-gray-400 rounded-xl hover:bg-blue-200 text-sm"
              >
                Apply Coupon
              </button>
            </div>
            <span className="text-xs">
              Coupon code to get 10% Discount{" "}
              <span className="text-red-700 font-semibold">ASSIGNMENT</span>
            </span>
            <div className="flex justify-between py-3 text-md">
              <h1>Delivery Charges</h1>
              <h1 className="text-green-700">Free</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-3 py-2 text-md">
          <h1>Total amount</h1>
          <h1>
            {discountedPrice !== null
              ? formattedDiscountedPrice
              : formattedTotalPrice}
          </h1>
        </div>
      </section>
    </>
  );
};

export default CartPriceSection;
