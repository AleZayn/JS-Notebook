// Exercise refe "FreeCodeCamp.org";

// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

const sumAll = (arr) => {
  // Find missing numbers
  const maxMissingele = Math.max(...arr);
  const minNumber = Math.min(...arr);
  let missingEle = [];
  for (let i = minNumber; i <= maxMissingele; i++) {
    if (!arr.includes(i)) {
      missingEle.push(i);
    }
  }

  // Concat input and missingEle
  const getArr = missingEle.concat(arr);

  // Sort ele
  getArr.sort((a, b) => a - b);

  // Sum of all
  const result = getArr.reduce((acc, curr) => acc + curr);
  return result;
};

// Test
const userInputArray = [10, 5];
// OutPut
console.log(sumAll(userInputArray));
