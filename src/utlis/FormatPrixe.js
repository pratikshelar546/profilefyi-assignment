const formatPrice = (price) => {
  if (price == null || isNaN(price)) {
    return "Invalid Price"; // Handle cases where price is not a number
  }

  // Convert to a number and format with commas
  const formattedPrice = Number(price).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Add the Indian Rupee symbol and 'INR' at the end
  const priceInINR = `₹${formattedPrice} INR`;

  return priceInINR;
};

export default formatPrice;
