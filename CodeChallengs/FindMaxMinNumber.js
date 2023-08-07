// Exercise: Find Maximum and Minimum Number from an Array

// Write a JavaScript function that takes an array of numbers as input and returns the maximum and minimum numbers from that array. Your task is to implement the logic to find the maximum and minimum numbers without using any built-in sorting functions or external libraries.

// function
function MinMax(arr) {
  let maxNum = arr[0];
  let minNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    } else if (minNum > arr[i]) {
      minNum = arr[i];
    }
  }
  return [minNum, maxNum];
}

// userInput
const userInput = [1, 2, 3, 4, 5];

// output
console.log(MinMax(userInput));
