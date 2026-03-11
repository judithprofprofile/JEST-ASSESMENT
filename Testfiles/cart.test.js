const { calculateCartTotal } = require('../cart');

describe("Task 1: calculateCartTotal", () => {
  test("calculates total for multiple items", () => {
    const items = [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 3 }
    ];
    expect(calculateCartTotal(items)).toBe(35);
  });

  test("applies 10% discount correctly", () => {
    const items = [{ price: 20, quantity: 1 }];
    expect(calculateCartTotal(items, 0.1)).toBe(18);
  });

  test("returns 0 for empty cart", () => {
    expect(calculateCartTotal([])).toBe(0);
  });

  test("throws error for non-array input", () => {
    expect(() => calculateCartTotal(null)).toThrow("Items must be an array");
  });

  test("throws error for invalid items", () => {
    const items = [{ price: 10 }]; // missing quantity
    expect(() => calculateCartTotal(items)).toThrow("Invalid item");
  });
});