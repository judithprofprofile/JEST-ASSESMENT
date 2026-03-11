function calculateCartTotal(items, discount = 0) {
  if (!Array.isArray(items)) {
    throw new Error("Items must be an array");
  }

  let total = 0;

  items.forEach(item => {
    // Check if price and quantity exist and are numbers
    if (item.price === undefined || item.quantity === undefined) {
      throw new Error("Invalid item");
    }
    total += item.price * item.quantity;
  });

  if (discount > 0) {
    total = total - (total * discount);
  }

  // Returns a number rounded to 2 decimal places
  return Number(total.toFixed(2));
}

module.exports = { calculateCartTotal };