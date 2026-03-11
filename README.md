Task 3: Test Design
In a README file, answer the following question:
You are testing a login system for a web application.
List at least 10 test cases that you would include in an automated test suite.


Testcases
-----------------

Successful Login: Verify that a user can log in with a valid email and correct password.
Successful Sign up: Verify that a user can sign up  with a valid details.
Unregistered User: Verify that login fails for an email address not present in the database.
Empty Fields: Verify that appropriate validation messages appear if either the email or password fields are left empty.
Invalid Email Format: Verify that the system rejects improperly formatted emails (e.g., "judith@con").
Account Lockout: Verify that the account is temporarily locked after 5 consecutive failed login attempts to prevent brute-force attacks.
Password Masking: Verify that the password input field obscures characters using dots or asterisks for security.
Verify that when a user loggs out, they are asked to authenticate and cannot navigate backinto the system..
Session Persistence: Verify that a user remains logged in after a page refresh if they haven't logged out.
Password Recovery: Verify that the "Forgot Password" link correctly redirects the user to the reset password workflow.



Task 4: Debugging
Below is a test that currently fails.
test("calculates cart total correctly", () => {
  const items = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 3 }
  ];

  expect(calculateCartTotal(items, 0.1)).toBe(22.5);
});
Please do the following:
Explain why the test fails
Correct the test


ANSWER
--------
Problem Identification
The original test failed because of a discrepancy in the test assertion. After reviewing the business logic in cart.js, it was clear that the "expected" value in the test did not match the actual mathematical result of the inputs provided.

Manual Calculation Audit
To confirm the expected behavior, I performed a manual trace of the function's logic:

Item 1: Price 10 × Quantity 2 = 20

Item 2: Price 5 × Quantity 3 = 15

Gross Subtotal: 20 + 15 = 35

Discount Applied (10%): 35 × 0.10 = 3.5

Correct Final Total: 35 − 3.5 = 31.5

The Solution
--------------
I have updated the test case to assert the correct value of 31.5. I also refactored the test slightly to use descriptive variables, which improves readability and makes future maintenance easier for the team.

JavaScript
test("should accurately calculate total with a 10% discount applied", () => {
  const items = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 3 }
  ];

  const discount = 0.1; // 10%
  const expectedTotal = 31.5;

  expect(calculateCartTotal(items, discount)).toBe(expectedTotal);
});