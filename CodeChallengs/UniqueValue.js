// **Question:**
// You have an array containing integers, some of which might be repeated. Your task is to write a function in JavaScript that takes this array as input and returns an array with only the unique elements, removing any duplicates. Remember, the order of the elements should be preserved.

// Here's an example array:
// const inputArray = [3, 7, 2, 7, 9, 3, 5, 7];

// Your function should transform this array into:
// const uniqueArray = [3, 7, 2, 9, 5];

// **Challenge:**
// Write a JavaScript function named `findUniqueElements` that takes an array as its argument and returns an array with only the unique elements.

const findUniqueElements = (ele) => {
  let result = [];
  for (let i = 0; i < ele.length; i++) {
    if (!result.includes(ele[i])) {
      result.push(ele[i]);
    }
  }
  return result;
};

// test
const inputArray = [3, 7, 2, 7, 9, 3, 5, 7];

console.log(findUniqueElements(inputArray));
