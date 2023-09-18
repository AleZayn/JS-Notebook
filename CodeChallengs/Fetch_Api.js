// Fetching Data from rest api with async await func and also .then()catch()

// Task
// Display name and city from an rest api but it can generate every time onclick just one person's data.

// Api `https://jsonplaceholder.typicode.com/users/`

// Output: Name + City

// Solution:

async function Fecth_APi_With_Async() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    if (!response.ok) {
      throw new Error("--Error");
    }
    const recivedData = await response.json();
    return recivedData;
  } catch (error) {
    console.error(error.message);
  }
}

async function randomUser() {
  try {
    const userData = await Fecth_APi_With_Async();
    const generateRandomUser = Math.floor(Math.random() * userData.length);
    const outPut = userData[generateRandomUser];
    const userName = outPut.name;
    const userCity = outPut.address.city;
    console.log(`User name is ${userName} and his city is ${userCity}`);
  } catch (error) {
    console.error(error.message);
  }
}
// randomUser();

// 2nd Solution

function Fetch_Api_With_Then() {
  try {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then((raw) => {
        return raw.json();
      })
      .then((data) => {
        console.log(data);
      });
  } catch (error) {
    console.error(error.message);
  }
}
// Add some logic on this func also for getting random user wwith sepcific requirements
Fetch_Api_With_Then();
