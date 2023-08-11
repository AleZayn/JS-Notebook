// Task: Calculate the Factorial
// Problem: Write a function that calculates the factorial of a given positive integer n. The factorial of a number is the product of all positive integers less than or equal to n. For example, the factorial of 5 is 5 × 4 × 3 × 2 × 1 = 120. Implement a function that takes an integer n as input and uses a loop to calculate and print the factorial of n using console.log. Make sure to handle cases where n is not a positive integer.

const calcFactorial = (n) => {
  let result = 1;
  // Handle cases where n is not a positive integer or less than 2
  if (n < 2) {
    return 1;
  }
  // Loop
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Test
console.log(calcFactorial(5));
