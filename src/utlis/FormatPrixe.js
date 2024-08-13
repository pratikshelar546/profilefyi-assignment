
const useFormatPrice = (price) => {
    const formattedPrice = price?.toLocaleString('en-IN');

  // Add the Indian Rupee symbol and 'INR' at the end
  const priceInINR = `${formattedPrice} INR`;

  return priceInINR;
};

export default useFormatPrice;
