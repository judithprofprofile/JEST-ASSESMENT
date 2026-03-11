const { getUserData } = require('../userService');

describe("Task 2: getUserData", () => {
  test("returns user data on successful API response", async () => {
    const mockFetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: 1, name: "Judith Jay" })
    });

    const result = await getUserData(mockFetch, 1);
    expect(result).toEqual({ id: 1, name: "Judith Jay" });
    expect(mockFetch).toHaveBeenCalledWith("https://api.example.com/users/1");
  });

  test("throws error on failed API response", async () => {
    const mockFetch = jest.fn().mockResolvedValue({ ok: false });
    await expect(getUserData(mockFetch, 1)).rejects.toThrow("Failed to fetch user");
  });

  test("throws error when userId is missing", async () => {
    const mockFetch = jest.fn();
    await expect(getUserData(mockFetch)).rejects.toThrow("User ID required");
  });
});