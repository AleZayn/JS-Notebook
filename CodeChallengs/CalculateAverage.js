// Task: Write a JavaScript function called calculateAverage that takes an array of numbers as input and returns the average (mean) of those numbers. Remember to handle cases where the array might be empty or contain non-numeric values.

const calculateAverage = (input) => {
  if (input.length === 0) {
    return 0;
  }
  let average = 0;
  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] !== "number") {
      return NaN;
    }
    average += input[i];
  }
  return average / input.length;
};

// test
const numbers = [5, 10, 15, 20, 25];

console.log(calculateAverage(numbers));
