// **Question:** Imagine you have an array of numbers, and you suspect that there might be some missing numbers in it. The array you have is `[1, 2, 3, 4, 5, 10]`, and you believe there are some numbers missing between 5 and 10. Can you write a piece of code that helps you find those missing numbers and display them?

// Your task is to fill in the missing numbers between 5 and 10, based on the given array `[1, 2, 3, 4, 5, 10]`. Once you've found the missing numbers, please share the results.

const arrayOfNum = [1, 2, 3, 4, 5, 10];

const findMissingNum = (num) => {
  let missingNum = [];
  const maxLen = Math.max(...num);

  for (let i = 1; i <= maxLen; i++) {
    if (!num.includes(i)) {
      missingNum.push(i);
    }
  }
  return missingNum;
};

// Test
const missingNumbers = findMissingNum(arrayOfNum);
console.log("Missing numbers from the given array are:", missingNumbers);
