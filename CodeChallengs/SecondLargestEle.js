// Problem Title: Finding the Second Largest Element

// Problem Description:
// You are given an array of integers. Write a function to find and return the second largest element in the array.

// Note:
// arr = [5, 10, 3, 8, 7]
// In the given example, the largest element is 10, and the second largest element is 8.

// Constraints:
// Your solution should have a time complexity of O(n), where n is the length of the input array.
// You are not allowed to use any built-in sorting functions or libraries.
// The array will have at least two distinct elements, so there will always be a second largest element.

const secondLargestNum = (arr) => {
  let firstLargest = 0,
    secondLargest = -Infinity;

  for (const num of arr) {
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest && num !== firstLargest) {
      secondLargest = num;
    }
  }
  return secondLargest;
};

// Test
const input = [10, 31, 35, 99, 38];
console.log(secondLargestNum(input));
// OutPut 38
