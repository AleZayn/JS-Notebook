// Exercise refe "FreeCodeCamp.org";

// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
// titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.

const titleCase = (word) => {
  const res = word
    .split(" ")
    .map((ele) => ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase())
    .join(" ");

  return res;
};

// Test
const caseInput = "HERE IS MY HANDLE HERE IS MY SPOUT";

// OutPut
console.log(titleCase(caseInput));
