// Exercise refe "FreeCodeCamp.org";

// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let fibonacci = [0, 1];
  let oddFibonacci = 1;

  if (num < 2) {
    return 1;
  }

  for (let i = 2; i <= num; i++) {
    const nextNum = fibonacci[i - 2] + fibonacci[i - 1];
    fibonacci.push(nextNum);

    // odd fibonacci
    if (nextNum <= num && nextNum % 2 !== 0) {
      oddFibonacci += nextNum;
    }
  }
  return oddFibonacci;
}

// Test
console.log(sumFibs(4));
