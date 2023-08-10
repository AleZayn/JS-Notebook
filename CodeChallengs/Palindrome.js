// Task: Palindrome Checker

// Write a function called isPalindrome that takes a string as an argument and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.

// For example:

// isPalindrome("racecar") should return true.
// isPalindrome("hello") should return false.
// isPalindrome("madam") should return true.

const isPalindrome = (str) => {
  let reversedStr = "";
  str = str.toLowerCase(); //lowerCase
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr === str;
};

//Test
console.log(isPalindrome("raCecar"));
